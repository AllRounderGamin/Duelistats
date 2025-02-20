import { type Player } from '@prisma/client';

export function getPeakRating(player: Player) {
  return player.rankedPeakRating
    ? player.rankedPeakRating < (player.rating ?? 0)
      ? (player.rating ?? 0)
      : player.rankedPeakRating
    : (player.rating ?? undefined);
}
