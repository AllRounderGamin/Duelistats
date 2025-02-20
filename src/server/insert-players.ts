import { type PlayerSnapshot, type Prisma } from '@prisma/client';
import { type z } from 'zod';
import { fetchUserData } from '~/playfab/client';
import { LocationSchema, type LeaderboardEntrySchema } from '~/playfab/schema';
import { db } from '~/server/db';
import { CharacterStats, StatisticName } from '~/types/Characters';

export async function insertPlayers(
  players: z.infer<typeof LeaderboardEntrySchema>[],
  insertedPlayers: string[],
  statisticName: StatisticName,
  position: number
): Promise<string[]> {
  const foundPlayfabIds: string[] = [];
  let index = position;

  for (const playerData of players) {
    index++;

    if (insertedPlayers.includes(playerData.PlayFabId)) {
      console.log(
        `${index}: Skipping ${playerData.PlayFabId} (${playerData.DisplayName}) ${statisticName.toString()}`
      );
      continue;
    }

    foundPlayfabIds.push(playerData.PlayFabId);
    const location = LocationSchema.safeParse(playerData.Profile.Locations[0]);

    if (!location.success) {
      console.error(`Failed to parse location data for ${playerData.PlayFabId}:`, location.error);
      continue;
    }

    const userData = await fetchUserData({ PlayFabId: playerData.PlayFabId });
    await new Promise((resolve) => setTimeout(resolve, 500));

    const player = {
      playFabId: playerData.PlayFabId,
      title: userData.Data?.SelectedTitle?.Value,
      banner: userData.Data?.SelectedBanner?.Value,
      displayName: playerData.DisplayName ?? '',
      experience:
        playerData.Profile.Statistics.find(
          (statistic) => statistic.Name === StatisticName.ProfileExperience.toString()
        )?.Value ?? 0,
      rank:
        statisticName === StatisticName.OneVsOneRatingTwo
          ? playerData.Position !== undefined
            ? playerData.Position + 1
            : null
          : null,
      rating: playerData.Profile.Statistics.find(
        (statistic) => statistic.Name === StatisticName.OneVsOneRatingTwo.toString()
      )?.Value,
      rankedWins:
        playerData.Profile.Statistics.find(
          (statistic) => statistic.Name === StatisticName.OneVsOneRankedWinsTwo.toString()
        )?.Value ?? 0,
      rankedLosses:
        playerData.Profile.Statistics.find(
          (statistic) => statistic.Name === StatisticName.OneVsOneRankedLossesTwo.toString()
        )?.Value ?? 0,
      rankedPeakRating: playerData.Profile.Statistics.find(
        (statistic) => statistic.Name === StatisticName.OneVsOnePeakRatingTwo.toString()
      )?.Value,
      season: 'Two',
      unrankedWins:
        playerData.Profile.Statistics.find(
          (statistic) => statistic.Name === StatisticName.OneVsOneWins.toString()
        )?.Value ?? 0,
      unrankedLosses:
        playerData.Profile.Statistics.find(
          (statistic) => statistic.Name === StatisticName.OneVsOneLosses.toString()
        )?.Value ?? 0,
      unrankedRating: playerData.Profile.Statistics.find(
        (statistic) => statistic.Name === StatisticName.OneVsOneUnratedRatingTwo.toString()
      )?.Value,
      continentCode: location.data.ContinentCode,
      countryCode: location.data.CountryCode,
      city: location.data.City,
      latitude: location.data.Latitude,
      longitude: location.data.Longitude,
      dreadwyrmExp: playerData.Profile.Statistics.find(
        (statistic) => statistic.Name === CharacterStats.DreadwyrmExperience.toString()
      )?.Value,
      selicyExp: playerData.Profile.Statistics.find(
        (statistic) => statistic.Name === CharacterStats.SelicyExperience.toString()
      )?.Value,
      saffronExp: playerData.Profile.Statistics.find(
        (statistic) => statistic.Name === CharacterStats.SaffronExperience.toString()
      )?.Value,
      chirettaExp: playerData.Profile.Statistics.find(
        (statistic) => statistic.Name === CharacterStats.ChirettaExperience.toString()
      )?.Value,
      maypulExp: playerData.Profile.Statistics.find(
        (statistic) => statistic.Name === CharacterStats.MaypulExperience.toString()
      )?.Value,
      gunnerExp: playerData.Profile.Statistics.find(
        (statistic) => statistic.Name === CharacterStats.GunnerExperience.toString()
      )?.Value,
      harissaExp: playerData.Profile.Statistics.find(
        (statistic) => statistic.Name === CharacterStats.HarissaExperience.toString()
      )?.Value,
      revaExp: playerData.Profile.Statistics.find(
        (statistic) => statistic.Name === CharacterStats.RevaExperience.toString()
      )?.Value,
      violetteExp: playerData.Profile.Statistics.find(
        (statistic) => statistic.Name === CharacterStats.VioletteExperience.toString()
      )?.Value,
      neeraExp: playerData.Profile.Statistics.find(
        (statistic) => statistic.Name === CharacterStats.NeeraExperience.toString()
      )?.Value,
      terraExp: playerData.Profile.Statistics.find(
        (statistic) => statistic.Name === CharacterStats.TerraExperience.toString()
      )?.Value,
      queenExp: playerData.Profile.Statistics.find(
        (statistic) => statistic.Name === CharacterStats.QueenExperience.toString()
      )?.Value,
      shopkeeperExp: playerData.Profile.Statistics.find(
        (statistic) => statistic.Name === CharacterStats.ShopkeeperExperience.toString()
      )?.Value,
      hazelExp: playerData.Profile.Statistics.find(
        (statistic) => statistic.Name === CharacterStats.HazelExperience.toString()
      )?.Value,
      shisoExp: playerData.Profile.Statistics.find(
        (statistic) => statistic.Name === CharacterStats.ShisoExperience.toString()
      )?.Value,
      terrableExp: playerData.Profile.Statistics.find(
        (statistic) => statistic.Name === CharacterStats.TerrableExperience.toString()
      )?.Value,
      perillaExp: playerData.Profile.Statistics.find(
        (statistic) => statistic.Name === CharacterStats.PerillaExperience.toString()
      )?.Value,
    } satisfies Prisma.PlayerCreateInput;

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const existingSnapshot = await db.playerSnapshot.findFirst({
      where: {
        playFabId: playerData.PlayFabId,
        createdAt: {
          gte: today,
          lt: tomorrow,
        },
      },
    });

    let playerSnapshotPayload: PlayerSnapshot;

    if (existingSnapshot) {
      playerSnapshotPayload = await db.playerSnapshot.update({
        where: { id: existingSnapshot.id },
        data: {
          ...player,
        },
      });
    } else {
      playerSnapshotPayload = await db.playerSnapshot.create({
        data: {
          ...player,
          player: {
            connectOrCreate: {
              where: {
                playFabId: playerData.PlayFabId,
              },
              create: {
                ...player,
              },
            },
          },
        },
      });
    }

    const playerUpsert = await db.player.upsert({
      where: {
        playFabId: playerData.PlayFabId,
      },
      update: {
        ...player,
        snapshots: {
          connectOrCreate: {
            where: {
              id: playerSnapshotPayload.id,
            },
            create: {
              id: playerSnapshotPayload.id,
              ...player,
            },
          },
        },
      },
      create: {
        ...player,
      },
    });

    console.log(
      `${index}: Upserted player ${playerUpsert.displayName} (${playerUpsert.playFabId}) - ${statisticName.toString()}`
    );
  }

  return foundPlayfabIds;
}
