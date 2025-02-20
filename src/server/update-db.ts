import {
  CHARACTER_EXP_FETCH_AMOUNT,
  PROFILE_EXP_FETCH_AMOUNT,
  RANKED_FETCH_AMOUNT,
} from '~/constants';
import { env } from '~/env';
import { fetchLeaderboard, loginWithCustomId } from '~/playfab/client';
import { insertPlayers } from '~/server/insert-players';
import { StatisticName } from '~/types/Characters';
import getUrl from '~/utils/getUrl';

export async function updateDB() {
  try {
    console.time('updateDB');

    await fetch(getUrl('/api/updated'), {
      method: 'POST',
      body: JSON.stringify({
        customId: env.CUSTOMID,
        updating: true,
      }),
    });

    await loginWithCustomId({
      CustomId: env.CUSTOMID,
      CreateAccount: false,
    });

    let foundPlayfabIds: string[] = [];

    async function getLeaderboardData(statisticName: StatisticName, totalRecordsToFetch: number) {
      let startPosition = 0;
      let recordsFetched = 0;

      console.log(`\nStarting to fetch ${statisticName} leaderboard data...\n`);

      while (recordsFetched < totalRecordsToFetch) {
        const fetchCount = Math.min(100, totalRecordsToFetch - recordsFetched);

        const leaderboardData = await fetchLeaderboard({
          MaxResultsCount: fetchCount,
          StartPosition: startPosition,
          StatisticName: statisticName.toString(),
        });

        const insertedPlayers = await insertPlayers(
          leaderboardData.Leaderboard,
          foundPlayfabIds,
          statisticName,
          startPosition
        );

        foundPlayfabIds = [...foundPlayfabIds, ...insertedPlayers];

        recordsFetched += leaderboardData.Leaderboard.length;
        startPosition += leaderboardData.Leaderboard.length;

        await new Promise((resolve) => setTimeout(resolve, 15000));
      }
    }

    await getLeaderboardData(StatisticName.OneVsOneRatingTwo, RANKED_FETCH_AMOUNT);
    await getLeaderboardData(StatisticName.ProfileExperience, PROFILE_EXP_FETCH_AMOUNT);
    await getLeaderboardData(StatisticName.ChirettaExperience, CHARACTER_EXP_FETCH_AMOUNT);
    await getLeaderboardData(StatisticName.DreadwyrmExperience, CHARACTER_EXP_FETCH_AMOUNT);
    await getLeaderboardData(StatisticName.GunnerExperience, CHARACTER_EXP_FETCH_AMOUNT);
    await getLeaderboardData(StatisticName.HarissaExperience, CHARACTER_EXP_FETCH_AMOUNT);
    await getLeaderboardData(StatisticName.HazelExperience, CHARACTER_EXP_FETCH_AMOUNT);
    await getLeaderboardData(StatisticName.MaypulExperience, CHARACTER_EXP_FETCH_AMOUNT);
    await getLeaderboardData(StatisticName.NeeraExperience, CHARACTER_EXP_FETCH_AMOUNT);
    await getLeaderboardData(StatisticName.QueenExperience, CHARACTER_EXP_FETCH_AMOUNT);
    await getLeaderboardData(StatisticName.RevaExperience, CHARACTER_EXP_FETCH_AMOUNT);
    await getLeaderboardData(StatisticName.SaffronExperience, CHARACTER_EXP_FETCH_AMOUNT);
    await getLeaderboardData(StatisticName.SelicyExperience, CHARACTER_EXP_FETCH_AMOUNT);
    await getLeaderboardData(StatisticName.ShisoExperience, CHARACTER_EXP_FETCH_AMOUNT);
    await getLeaderboardData(StatisticName.ShopkeeperExperience, CHARACTER_EXP_FETCH_AMOUNT);
    await getLeaderboardData(StatisticName.TerraExperience, CHARACTER_EXP_FETCH_AMOUNT);
    await getLeaderboardData(StatisticName.VioletteExperience, CHARACTER_EXP_FETCH_AMOUNT);
    await getLeaderboardData(StatisticName.TerrableExperience, CHARACTER_EXP_FETCH_AMOUNT);
    await getLeaderboardData(StatisticName.PerillaExperience, CHARACTER_EXP_FETCH_AMOUNT);

    await fetch(getUrl('/api/updated'), {
      method: 'POST',
      body: JSON.stringify({
        customId: env.CUSTOMID,
        updating: false,
        lastUpdated: true,
      }),
    });

    console.timeEnd('updateDB');
  } catch (error) {
    await fetch(getUrl('/api/updated'), {
      method: 'POST',
      body: JSON.stringify({
        customId: env.CUSTOMID,
        updating: false,
        lastUpdated: true,
      }),
    });

    console.error('Error updating database:', error);
    throw error;
  }
}
