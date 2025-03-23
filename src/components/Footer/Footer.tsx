import { Center, Container, Text } from '@mantine/core';
import Link from 'next/link';

export default function Footer() {
  return (
    <div>
      <Container component="header" my="xl">
        <Center>
          <Text size="xs">
            Duelistats is not officially involved in producing or managing{' '}
            <Link target="_blank" href="https://www.duelistsofeden.com/">
              Duelists of Eden
            </Link>
            . You can buy the game on{' '}
            <Link
              target="_blank"
              href="https://store.steampowered.com/app/1664200/Duelists_of_Eden/"
            >
              Steam
            </Link>
            .
          </Text>
        </Center>
      </Container>
    </div>
  );
}
