import { DEFAULT_THEME, Grid, List, Space, Text, Title } from '@mantine/core';
import Head from 'next/head';
import Link from 'next/link';
import {
  CHARACTER_EXP_FETCH_AMOUNT,
  PROFILE_EXP_FETCH_AMOUNT,
  RANKED_FETCH_AMOUNT,
} from '~/constants';
import { theme } from '~/theme';

export default function AboutPage() {
  return (
    <>
      <style jsx>{`
        @media (min-width: ${theme.breakpoints?.md}) {
          .changelog-inner {
            direction: rtl;
            padding-inline-end: 2em;
          }
        }
      `}</style>
      {/* Why does this need to be a separate global...? */}
      <style jsx global>{`
        @media (min-width: ${theme.breakpoints?.md}) {
          .changelog-wrapper {
            border-inline-start: 1px solid ${DEFAULT_THEME.colors.gray[7]};
          }
        }
      `}</style>
      <div>
        <Head>
          <title>About | Duelistats</title>
          <meta
            name="description"
            content="About page for Duelistats, a website that provides statistics for the game Duelists of Eden, based on Stats of Eden by Reese"
          />
        </Head>
        <Grid>
          <Grid.Col span={{ md: 6 }} className="main">
            <Title order={2} size="h1">
              About
            </Title>
            <p>This site is a work in progress. Stats refreshed hourly... Currently fetches:</p>
            <ul>
              <li>Top {RANKED_FETCH_AMOUNT} ranked players</li>
              <li>Top {PROFILE_EXP_FETCH_AMOUNT} experienced players</li>
              <li>Top {CHARACTER_EXP_FETCH_AMOUNT} players for each character</li>
            </ul>
            <p>I have plans to add:</p>
            <ul>
              {/* <li>More than top {RANKED_FETCH_AMOUNT}</li>
              <li>Country pages</li>
              <li>
                Global stats (top exp, top played characters, matches played, aggregated stats, etc)
              </li>
              <li>
                A &quot;most played&quot;, or &quot;most experience&quot; feature to highlight
                active players
              </li> */}
              <li>Season 1 and 2 Toggle</li>
              <li>Efficiency Changes</li>
              <li>Country Pages</li>
              <li>Badge to Track Active Players</li>
            </ul>
            <p>
              The discord for the game is{' '}
              <Link target="_blank" href="https://www.discord.gg/OSFE">
                Duelists of Eden
              </Link>{' '}
            </p>
            <p>
              Also check out{' '}
              <Link target="-blank" href="https://www.decksofeden.org">
                Decks of Eden
              </Link>
            </p>
          </Grid.Col>
          <Grid.Col span={{ md: 4 }} offset={{ md: 2 }} className="changelog-wrapper">
            <div className="changelog-inner">
              <Title order={3} size="h3">
                Changelog
              </Title>
              <Space h="xs" />
              <ChangelogItem date="March 24th, 2025">
                <List size="xs">
                  <List.Item>
                    {' '}
                    Minor changes to change branding to Duelistats from Stats of Eden{' '}
                  </List.Item>
                  <List.Item>Reorder Character Page to match game order</List.Item>
                  <List.Item>Gave season 2 character icons white border</List.Item>
                  <List.Item>Fixed character page name overflow</List.Item>
                </List>
              </ChangelogItem>
              <ChangelogItem date="February 20th, 2025">
                <List size="xs">
                  <List.Item>Port site to load season 2 data</List.Item>
                  <List.Item>Increase char level cap</List.Item>
                </List>
              </ChangelogItem>
              <ChangelogItem date="July 6th, 2024">
                <List size="xs">
                  <List.Item>Added &quot;Peak Rating&quot; sort</List.Item>
                </List>
              </ChangelogItem>
              <ChangelogItem date="June 28th, 2024">
                <List size="xs">
                  <List.Item>Fixed incorrect rank data</List.Item>
                  <List.Item>Updated scraper to get top 750</List.Item>
                </List>
              </ChangelogItem>
              <ChangelogItem date="June 22nd, 2024">
                <List size="xs">
                  <List.Item>
                    Add <Link href="/characters">characters</Link> page
                  </List.Item>
                  <List.Item>
                    Add player titles & banners (If you don&apos;t see it, try reapplying it ingame)
                  </List.Item>
                  <List.Item>Add previously known names</List.Item>
                </List>
              </ChangelogItem>
              <ChangelogItem date="June 7th, 2024">
                <List size="xs">
                  <List.Item>Increased players fetched from 250 to 500</List.Item>
                  <List.Item>Added player sort</List.Item>
                  <List.Item>Added &quot;load more&quot; button</List.Item>
                  <List.Item>Updated &quot;last updated&quot; logic</List.Item>
                </List>
              </ChangelogItem>
              <ChangelogItem date="May 19th, 2024">
                <List size="xs">
                  <List.Item>Added table sort to homepage</List.Item>
                  <List.Item>Added ranked history chart</List.Item>
                  <List.Item>Add rank change indicator</List.Item>
                </List>
              </ChangelogItem>
            </div>
          </Grid.Col>
        </Grid>
      </div>
    </>
  );
}

const ChangelogItem = ({ date, children }: { date: string; children: React.ReactNode }) => (
  <>
    <Text fw="bold" size="sm">
      {date}
    </Text>
    <Space h="xs" />
    <div>{children}</div>
    <Space h="xs" />
  </>
);
