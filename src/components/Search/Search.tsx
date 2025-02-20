import { Autocomplete, Loader, UnstyledButton, rem } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import { IconSearch, IconSend2 } from '@tabler/icons-react';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { api, type RouterOutputs } from '~/utils/api';
import styles from './search.module.scss';

export default function Search() {
  const [searchTerm, searchSearchTerm] = useState<string>();
  const [debounced] = useDebouncedValue(searchTerm, 500, { leading: true });
  const headerSearchQuery = api.player.headerSearch.useQuery(
    {
      search: debounced,
    },
    {
      refetchOnWindowFocus: false,
      enabled: debounced !== undefined && debounced.length > 0,
    }
  );
  const router = useRouter();
  const [error, setError] = useState(false);
  const ref = useRef<HTMLInputElement>(null);
  const lastFoundPlayers = useRef<RouterOutputs['player']['headerSearch']>([]);

  useEffect(() => {
    if (headerSearchQuery.data) {
      lastFoundPlayers.current = headerSearchQuery.data;
    }
  }, [headerSearchQuery.data]);

  async function handleSubmit(value?: unknown) {
    let currentSearchTerm = searchTerm;

    if (typeof value === 'string') {
      currentSearchTerm = value;
    }

    const player = headerSearchQuery.data?.find((p) => p.displayName === currentSearchTerm);

    if (player) {
      await router.push(`/player/${player.playFabId}/${player.displayName}`);

      // Clear search term and unfocus
      searchSearchTerm('');
      ref.current?.blur();
    } else {
      setError(true);
    }
  }

  return (
    <Autocomplete
      ref={ref}
      placeholder="Search players..."
      leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
      rightSectionProps={{
        style: {
          justifyContent: 'flex-end',
        },
      }}
      rightSection={
        <>
          {headerSearchQuery.fetchStatus === 'fetching' &&
            (headerSearchQuery.isLoading || headerSearchQuery.isPending) && <Loader size={16} />}
          <UnstyledButton
            aria-label="Search player"
            className={styles.searchBtn}
            onClick={handleSubmit}
          >
            <IconSend2 style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
          </UnstyledButton>
        </>
      }
      data={
        headerSearchQuery.data?.map((p) => p.displayName) ??
        lastFoundPlayers.current?.map((p) => p.displayName) ??
        []
      }
      value={searchTerm}
      error={error}
      onChange={(val) => {
        searchSearchTerm(val);
        setError(false);
      }}
      onOptionSubmit={handleSubmit}
      onKeyDown={async (event) => {
        if (event.key === 'Enter') {
          await handleSubmit();
        }
      }}
    />
  );
}
