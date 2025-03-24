import { Box, Flex, Group, Overlay, Stack, Text, Title, Tooltip } from '@mantine/core';
import { IconId } from '@tabler/icons-react';
import cx from 'classnames';
import Image from 'next/image';
import Flag from '~/components/Flag/Flag';
import RankChange from '~/components/RankChange/RankChange';
import Tier from '~/components/Tier/Tier';
import Winrate from '~/components/Winrate/Winrate';
import { getTopCharacter } from '~/game/characters';
import { getLevel } from '~/game/levels';
import { type PlayerInfo } from '~/types/Player';
import { getBanner } from '~/utils/banner';
import { getPeakRating } from '~/utils/peakRating';
import { getRankChange } from '~/utils/rankChange';
import styles from './profile-banner.module.scss';

export interface ProfileBannerProps {
  player: PlayerInfo;
  rankInExperience?: number;
}

export default function ProfileBanner({ player, rankInExperience }: ProfileBannerProps) {
  const character = getTopCharacter(player);
  const background = getBanner(player.banner);
  const previousNames = [
    ...new Set(player.snapshots.map((snapshot) => snapshot.displayName)),
  ].filter((name) => name !== player.displayName);

  return (
    <Flex className={styles.banner} align="flex-end" justify="center" mb="xl">
      <Image
        src={background?.bg ?? character.banner.bg}
        alt=""
        fill
        style={{
          maxWidth: '100%',
          // height: 'auto',
          objectFit: 'cover',
          objectPosition: background?.position ?? character.banner.position,
        }}
      />
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.85) 45%, rgba(0, 0, 0, 1) 100%)"
        zIndex={3}
        className={styles.overlay}
      />
      <Flex
        style={{ zIndex: 4 }}
        className={styles.stats}
        justify="space-between"
        align="flex-end"
        wrap="wrap"
      >
        <Box p="md" className={styles.card}>
          <Title order={1} className={styles.title}>
            <span className={styles.name}>{player.displayName}</span>
            <Flag
              city={player.city}
              country={player.countryCode}
              size={18}
              className={styles.nameIcon}
            />
            {previousNames.length > 0 && (
              <Tooltip
                label={
                  <>
                    <strong>Previously known as:</strong>
                    {previousNames.map((name) => (
                      <div key={name}>{name}</div>
                    ))}
                  </>
                }
              >
                <IconId size={18} className={styles.nameIcon} />
              </Tooltip>
            )}
          </Title>
          {player.title && (
            <Title order={2} size="h5">
              {player.title}
            </Title>
          )}
          {player.rank && (
            <Title order={3} size="h6" className={styles.rank}>
              Rank:
              <RankChange
                rank={player.rank}
                previousRank={player.snapshots[0]?.rank ?? player.rank}
                change={getRankChange(player)}
                reverse
                hideNone
              />
            </Title>
          )}
          <Flex align="center" gap="sm" my="xs">
            <Tier rating={player.rating ?? 0} size="large" />
          </Flex>
          <Group>
            <Winrate
              wins={player.rankedWins}
              losses={player.rankedLosses}
              className={styles.winrate}
            />
            <Text size="xs">
              {Math.round(
                (player.rankedWins / (player.rankedWins + player.rankedLosses) || 0) * 100
              )}
              % Winrate
            </Text>
          </Group>
        </Box>
        <Box p="md" className={cx(styles.card, styles.right)}>
          {player.rankedPeakRating && player.rating && (
            <Stack gap={0} mb={5}>
              <Text size="xs" fw="bold" ta={{ sm: 'right' }}>
                PEAK RATING
              </Text>
              <Text size="xs" ta={{ sm: 'right' }}>
                {getPeakRating(player)}
              </Text>
            </Stack>
          )}
          {player.unrankedRating && (
            <Stack gap={0} mb={5}>
              <Text size="xs" fw="bold" ta={{ sm: 'right' }}>
                UNRANKED RATING
              </Text>
              <Text size="xs" ta={{ sm: 'right' }}>
                {player.unrankedRating}
              </Text>
            </Stack>
          )}
          <Stack gap={0} mb={5}>
            <Text size="xs" fw="bold" ta={{ sm: 'right' }}>
              PLAYER LEVEL
            </Text>
            <Text size="xs" ta={{ sm: 'right' }}>
              Lv. {getLevel(player.experience, 'profile')} ({player.experience.toLocaleString()})
            </Text>
          </Stack>
          {rankInExperience && (
            <Stack gap={0} mb={5}>
              <Text size="xs" fw="bold" ta={{ sm: 'right' }}>
                EXPERIENCE RANK
              </Text>
              <Text size="xs" ta={{ sm: 'right' }}>
                {rankInExperience ? `${rankInExperience}` : 'Unranked'}
              </Text>
            </Stack>
          )}
        </Box>
      </Flex>
    </Flex>
  );
}
