import { Button, Grid, Menu, Space, Tabs, Text, rem } from '@mantine/core';
import { IconActivity, IconAward, IconChartArrowsVertical, IconNumbers } from '@tabler/icons-react';
import cx from 'classnames';
import { type PlayerInfo } from '~/types/Player';
import { type PlayerListSortBy } from '~/utils/sortData';
import PlayerCard from '../PlayerCard/PlayerCard';
import TopPlayerCard from '../PlayerCard/TopPlayerCard';
import PlayerList from '../PlayerList/PlayerList';
import styles from './leaderboard.module.scss';

export interface LeaderboardProps {
  leaderboard: PlayerInfo[];
  sortBy: PlayerListSortBy;
  setSortBy: (value: PlayerListSortBy) => void;
}

export default function Leaderboard({ leaderboard, sortBy, setSortBy }: LeaderboardProps) {
  function handleTabChange(value: PlayerListSortBy) {
    setSortBy(value);
  }

  return (
    <>
      <SortMenu sortBy={sortBy} handleTabChange={handleTabChange} />
      <SortTabs sortBy={sortBy} handleTabChange={handleTabChange} />
      <Space h="xs" />
      <Grid>
        <Grid.Col span={{ base: 12 }}>
          {leaderboard?.[0] && <TopPlayerCard player={leaderboard[0]} />}
        </Grid.Col>
      </Grid>
      <Grid>
        {leaderboard?.slice(1, 5).map((player) => (
          <Grid.Col span={{ base: 12, sm: 6, lg: 3 }} key={player.playFabId}>
            <PlayerCard player={player} />
          </Grid.Col>
        ))}
      </Grid>
      <Space h="xl" />
      {leaderboard && (
        <PlayerList
          players={leaderboard?.slice(5).map((player) => {
            return player;
          })}
        />
      )}
    </>
  );
}

function SortMenu({
  sortBy,
  handleTabChange,
}: {
  sortBy: PlayerListSortBy;
  handleTabChange: (value: PlayerListSortBy) => void;
}) {
  return (
    <div className={styles.menu}>
      <Menu>
        <Menu.Target>
          <Button style={{ textTransform: 'capitalize' }}>Sort by ({sortBy})</Button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item onClick={() => handleTabChange('rank')}>Rank</Menu.Item>
          <Menu.Item onClick={() => handleTabChange('experience')}>Level</Menu.Item>
          <Menu.Item onClick={() => handleTabChange('wins')}>Wins</Menu.Item>
          <Menu.Item onClick={() => handleTabChange('peak')}>Peak Rating</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
}

function SortTabs({
  sortBy,
  handleTabChange,
}: {
  sortBy: PlayerListSortBy;
  handleTabChange: (value: PlayerListSortBy) => void;
}) {
  const iconStyle = { width: rem(12), height: rem(12) };

  return (
    <div className={cx(styles.sortWrapper)}>
      <Text size="sm">Sort by:</Text>
      <Tabs
        className={styles.tabs}
        value={sortBy}
        onChange={(value) => {
          if (value && typeof value === 'string') {
            handleTabChange(value as PlayerListSortBy);
          }
        }}
      >
        <Tabs.List className={cx(styles.tabsList)}>
          <Tabs.Tab
            value="rank"
            leftSection={<IconActivity style={iconStyle} />}
            className={cx(styles.tab)}
          >
            Rank
          </Tabs.Tab>
          <Tabs.Tab
            value="experience"
            leftSection={<IconNumbers style={iconStyle} />}
            className={cx(styles.tab)}
          >
            Level
          </Tabs.Tab>
          <Tabs.Tab
            value="wins"
            leftSection={<IconAward style={iconStyle} />}
            className={cx(styles.tab)}
          >
            Wins
          </Tabs.Tab>
          <Tabs.Tab
            value="peak"
            leftSection={<IconChartArrowsVertical style={iconStyle} />}
            className={cx(styles.tab)}
          >
            Peak Rating
          </Tabs.Tab>
        </Tabs.List>
      </Tabs>
    </div>
  );
}
