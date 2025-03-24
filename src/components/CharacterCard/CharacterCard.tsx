import { Anchor, Card, Table, Text, Tooltip } from '@mantine/core';
import { type Player } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { type Character } from '~/game/characters';
import { getLevel } from '~/game/levels';
import { type TopCharacterPlayers } from '~/types/Player';
import stylesPlayerList from '../PlayerList/player-list.module.scss';
import styles from './character-card.module.scss';

export default function CharacterCard({ players, character }: TopCharacterPlayers) {
  return (
    <Card withBorder padding="xl" radius="md" className={styles.card}>
      <Card.Section h={140} style={{ position: 'relative' }}>
        <Image
          src={character.banner.bg}
          alt={character.name}
          fill
          style={{
            maxWidth: '100%',
            // height: 'auto',
            objectFit: 'cover',
            objectPosition: character.banner.position,
          }}
        />
      </Card.Section>
      <Text ta="center" fz="lg" fw={500} mt="sm">
        {character.name}
      </Text>
      <Card.Section>
        <Table className={styles.table} striped highlightOnHover horizontalSpacing={'xs'}>
          <Table.Thead>
            <Table.Tr>
              <Table.Th className={styles.rank}></Table.Th>
              <Table.Th>Level</Table.Th>
              <Table.Th>Player</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {players.map((player, i) => (
              <CharacterCardRow
                key={player.playFabId}
                player={player}
                character={character}
                rank={i + 1}
              />
            ))}
          </Table.Tbody>
        </Table>
      </Card.Section>
    </Card>
  );
}

function CharacterCardRow({
  player,
  character,
  rank,
}: {
  player: Player;
  character: Character;
  rank: number;
}) {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const PlayerName = (
    <Anchor
      size="sm"
      href={`/player/${player.playFabId}/${player.displayName}`}
      component={Link}
      ref={linkRef}
      className={styles.name}
      underline="never"
    >
      {player.displayName}
    </Anchor>
  );
  const characterExp = player[character.statName];
  const characterLvl = typeof characterExp === 'number' ? getLevel(characterExp, 'character') : 0;

  function handleRowClick() {
    const isTextSelected = window.getSelection()?.toString();

    if (!isTextSelected) {
      linkRef.current?.click();
    }
  }

  return (
    <Table.Tr key={player.playFabId} className={stylesPlayerList.row} onClick={handleRowClick}>
      <Table.Td className={styles.rank}>{rank}</Table.Td>
      <Table.Td className={styles.level}>
        <Tooltip label={`${characterExp?.toLocaleString()} character exp`}>
          <Text size="sm">Lv. {characterLvl}</Text>
        </Tooltip>
      </Table.Td>
      <Table.Td>
        {player.title ? <Tooltip label={player.title}>{PlayerName}</Tooltip> : PlayerName}
      </Table.Td>
    </Table.Tr>
  );
}
