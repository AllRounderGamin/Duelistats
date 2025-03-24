import { SimpleGrid } from '@mantine/core';
import { type Prisma } from '@prisma/client';
import { type GetServerSideProps, type InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import CharacterCard from '~/components/CharacterCard/CharacterCard';
import {
  Chiretta,
  Dreadwyrm,
  Gunner,
  Harissa,
  Hazel,
  Maypul,
  Neera,
  Perilla,
  Queen,
  Reva,
  Saffron,
  Selicy,
  Shiso,
  Shopkeeper,
  Terra,
  Terrable,
  Violette,
} from '~/game/characters';
import { db } from '~/server/db';
import { type TopCharacterPlayers } from '~/types/Player';

export default function CharactersPage({
  top,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>{`Characters | Duelistats`}</title>
        <meta
          name="description"
          content={`Top players for each character in the Duelists of Eden game`}
        />
      </Head>
      <SimpleGrid
        cols={{
          base: 1,
          sm: 2,
          md: 3,
        }}
      >
        {top.map((char) => {
          return (
            <CharacterCard
              key={char.character.name}
              players={char.players}
              character={char.character}
            />
          );
        })}
      </SimpleGrid>
    </>
  );
}

export const getServerSideProps = (async (context) => {
  const take = 10;
  const findManyQuery = (column: Prisma.PlayerScalarFieldEnum) => {
    return db.player.findMany({
      orderBy: { [column]: 'desc' },
      where: {
        [column]: {
          not: null,
        },
      },
      take,
    });
  };

  const [
    topChiretta,
    topDreadwyrm,
    topGunner,
    topHarissa,
    topHazel,
    topMaypul,
    topNeera,
    topQueen,
    topReva,
    topSaffron,
    topSelicy,
    topShiso,
    topShopkeeper,
    topTerra,
    topViolette,
    topTerrable,
    topPerilla,
  ] = await db.$transaction([
    findManyQuery('chirettaExp'),
    findManyQuery('dreadwyrmExp'),
    findManyQuery('gunnerExp'),
    findManyQuery('harissaExp'),
    findManyQuery('hazelExp'),
    findManyQuery('maypulExp'),
    findManyQuery('neeraExp'),
    findManyQuery('queenExp'),
    findManyQuery('revaExp'),
    findManyQuery('saffronExp'),
    findManyQuery('selicyExp'),
    findManyQuery('shisoExp'),
    findManyQuery('shopkeeperExp'),
    findManyQuery('terraExp'),
    findManyQuery('violetteExp'),
    findManyQuery('terrableExp'),
    findManyQuery('perillaExp'),
  ]);

  context.res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');

  return {
    props: {
      top: [
        {
          players: topSaffron,
          character: Saffron,
        },
        {
          players: topSelicy,
          character: Selicy,
        },
        {
          players: topHazel,
          character: Hazel,
        },
        {
          players: topTerra,
          character: Terra,
        },
        {
          players: topShiso,
          character: Shiso,
        },
        {
          players: topViolette,
          character: Violette,
        },
        {
          players: topReva,
          character: Reva,
        },
        {
          players: topChiretta,
          character: Chiretta,
        },
        {
          players: topGunner,
          character: Gunner,
        },
        {
          players: topShopkeeper,
          character: Shopkeeper,
        },
        {
          players: topHarissa,
          character: Harissa,
        },
        {
          players: topPerilla,
          character: Perilla,
        },
        {
          players: topTerrable,
          character: Terrable,
        },
        {
          players: topDreadwyrm,
          character: Dreadwyrm,
        },
        {
          players: topNeera,
          character: Neera,
        },
        {
          players: topQueen,
          character: Queen,
        },
        {
          players: topMaypul,
          character: Maypul,
        },
      ],
    },
  };
}) satisfies GetServerSideProps<{
  top: TopCharacterPlayers[];
}>;
