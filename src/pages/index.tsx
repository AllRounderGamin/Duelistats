import { Box, Button, LoadingOverlay } from '@mantine/core';
import { keepPreviousData, type DehydratedState } from '@tanstack/react-query';
import { type GetServerSideProps, type InferGetServerSidePropsType } from 'next';
import { useEffect, useState } from 'react';
import Alert from '~/components/Alert/Alert';
import Leaderboard from '~/components/Leaderboard/Leaderboard';
import { trpcHelper } from '~/pages/api/trpc/[trpc]';
import { type PlayerInfo } from '~/types/Player';
import { api } from '~/utils/api';
import { sortData, type PlayerListSortBy } from '~/utils/sortData';

export default function IndexPage(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { limit, sort } = props;
  const [sortBy, setSortBy] = useState<PlayerListSortBy>(sort);
  const playersQuery = api.player.getLeaderboard.useInfiniteQuery(
    { limit, sort: sortBy },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      placeholderData: keepPreviousData,
    }
  );
  const [sortedData, setSortedData] = useState<PlayerInfo[]>(
    sortData(playersQuery.data?.pages.flatMap((page) => page.items) ?? [], { sortBy })
  );
  useEffect(() => {
    if (!playersQuery.isFetching && !playersQuery.isFetchingNextPage) {
      setSortedData(
        sortData(playersQuery.data?.pages.flatMap((page) => page.items) ?? [], { sortBy })
      );
    }
  }, [
    playersQuery.data,
    sortBy,
    playersQuery.isPlaceholderData,
    playersQuery.isFetching,
    playersQuery.isFetchingNextPage,
  ]);

  if (playersQuery.status === 'error') {
    return <Alert title="Error">Something went wrong while fetching the leaderboard.</Alert>;
  }
  return (
    <>
      {/*<Alert title="Welcome!" color={undefined} mb="xs">
        Website updates for season 2 and the new characters is coming soon! Stay tuned!
      </Alert> */}
      <Box pos="relative">
        <LoadingOverlay
          visible={playersQuery.isFetching || playersQuery.isFetchingNextPage}
          zIndex={9999}
          overlayProps={{ radius: 'md', blur: 1 }}
        />
        {sortedData && (
          <Leaderboard leaderboard={sortedData} sortBy={sortBy} setSortBy={setSortBy} />
        )}
      </Box>
      {playersQuery.hasNextPage && (
        <Button
          fullWidth
          onClick={() => playersQuery.fetchNextPage()}
          loading={playersQuery.isFetchingNextPage}
        >
          Load more
        </Button>
      )}
    </>
  );
}

export const getServerSideProps = (async (context) => {
  const limit = 100;
  const sort = 'rank' satisfies PlayerListSortBy;

  await trpcHelper.player.getLeaderboard.prefetchInfinite({
    limit,
    sort,
  });

  context.res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');
  // context.res.setHeader('Cache-Control', 'no-store');

  return {
    props: {
      trpcState: trpcHelper.dehydrate(),
      limit,
      sort,
    },
  };
}) satisfies GetServerSideProps<{
  trpcState: DehydratedState;
  limit: number;
  sort: PlayerListSortBy;
}>;
