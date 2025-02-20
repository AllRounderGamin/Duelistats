import { Prisma, type Player } from '@prisma/client';
import { type StaticImageData } from 'next/image';
import MountainBg from '~/assets/backgrounds/td_landscape_mountains_sf2x.png';
import ChirettaSplash from '~/assets/characters/Chiretta_Splash_Transparent.png';
import DreadwyrmSplash from '~/assets/characters/Dreadwyrm_Splash_Transparent.png';
import GunnerSplash from '~/assets/characters/Gunner_Splash_Transparent.png';
import HarissaSplash from '~/assets/characters/Harissa_Splash_Transparent.png';
import HazelSplash from '~/assets/characters/Hazel_Splash_transparent.png';
import MaypulSplash from '~/assets/characters/Maypul_Splash_Transparent.png';
import NeeraSplash from '~/assets/characters/Neera_Splash_Transparent.png';
import PerillaSplash from '~/assets/characters/Perilla_Splash_Transparent.png';
import QueenSplash from '~/assets/characters/Queen_Splash_Transparent.png';
import RevaSplash from '~/assets/characters/Reva_Splash_Transparent.png';
import SaffronSplash from '~/assets/characters/Saffron_Splash_Transparent.png';
import SelicySplash from '~/assets/characters/Selicy_Splash_Transparent.png';
import ShisoSplash from '~/assets/characters/Shiso_Splash_Transparent.png';
import ShopkeeperSplash from '~/assets/characters/Shopkeeper_Splash_Transparent.png';
import TerraSplash from '~/assets/characters/Terra_Splash_Transparent.png';
import TerrableSplash from '~/assets/characters/Terrable_Splash_Transparent.png';
import VioletteSplash from '~/assets/characters/Violette_Splash_Transparent.png';
import ChirettaIcon from '~/assets/icons/200px-DoE_Chiretta_IconSqu.png';
import DreadwyrmIcon from '~/assets/icons/200px-DoE_Dreadwyrm_IconSqu.png';
import GunnerIcon from '~/assets/icons/200px-DoE_Gunner_IconSqu.png';
import HarissaIcon from '~/assets/icons/200px-DoE_Harissa_IconSqu.png';
import HazelIcon from '~/assets/icons/200px-DoE_Hazel_IconSqu.png';
import MaypulIcon from '~/assets/icons/200px-DoE_Maypul_IconSqu.png';
import NeeraIcon from '~/assets/icons/200px-DoE_Neera_IconSqu.png';
import PerillaIcon from '~/assets/icons/200px-DoE_Perilla_IconSqu.png';
import QueenIcon from '~/assets/icons/200px-DoE_Queen_IconSqu.png';
import RevaIcon from '~/assets/icons/200px-DoE_Reva_IconSqu.png';
import SaffronIcon from '~/assets/icons/200px-DoE_Saffron_IconSqu.png';
import SelicyIcon from '~/assets/icons/200px-DoE_Selicy_IconSqu.png';
import ShisoIcon from '~/assets/icons/200px-DoE_Shiso_IconSqu.png';
import ShopkeeperIcon from '~/assets/icons/200px-DoE_Shopkeeper_IconSqu.png';
import TerraIcon from '~/assets/icons/200px-DoE_Terra_IconSqu.png';
import TerrableIcon from '~/assets/icons/200px-DoE_Terrable_IconSqu.png';
import VioletteIcon from '~/assets/icons/200px-DoE_Violette_IconSqu.png';
import { getBanner, type Banner } from '~/utils/banner';
// import ArenaBg from '~/assets/stages/Arena-bg.png';
// import ArenaBgD from '~/assets/stages/Arena-bg-dark.png';
// import EdenBg from '~/assets/stages/Eden-bg.png';
// import IceBg from '~/assets/stages/Ice-bg.png';
// import IslandBg from '~/assets/stages/Island-bg.png';
// import IslandBgD from '~/assets/stages/Island-bg-dark.png';
// import MountainBg from '~/assets/stages/Mountain-bg.png';
// import MountainBgR from '~/assets/stages/Mountain-bg-dark.png';

export type Character = {
  name: string;
  icon: StaticImageData;
  splash: StaticImageData;
  banner: Banner;
  statName: Prisma.PlayerScalarFieldEnum;
};

export const Chiretta: Character = {
  name: 'Chiretta',
  icon: ChirettaIcon,
  splash: ChirettaSplash,
  banner: getBackgroundImage('Chiretta_Basic-Banner'),
  statName: Prisma.PlayerScalarFieldEnum.chirettaExp,
};

export const Dreadwyrm: Character = {
  name: 'Dreadwyrm',
  icon: DreadwyrmIcon,
  splash: DreadwyrmSplash,
  banner: getBackgroundImage('Dreadwyrm_Basic-Banner'),
  statName: Prisma.PlayerScalarFieldEnum.dreadwyrmExp,
};

export const Gunner: Character = {
  name: 'Gunner',
  icon: GunnerIcon,
  splash: GunnerSplash,
  banner: getBackgroundImage('Gunner_Basic-Banner'),
  statName: Prisma.PlayerScalarFieldEnum.gunnerExp,
};

export const Harissa: Character = {
  name: 'Harissa',
  icon: HarissaIcon,
  splash: HarissaSplash,
  banner: getBackgroundImage('Harissa_Basic-Banner'),
  statName: Prisma.PlayerScalarFieldEnum.harissaExp,
};

export const Hazel: Character = {
  name: 'Hazel',
  icon: HazelIcon,
  splash: HazelSplash,
  banner: getBackgroundImage('Hazel_Basic-Banner'),
  statName: Prisma.PlayerScalarFieldEnum.hazelExp,
};

export const Maypul: Character = {
  name: 'Maypul',
  icon: MaypulIcon,
  splash: MaypulSplash,
  banner: getBackgroundImage('Maypul_Basic-Banner'),
  statName: Prisma.PlayerScalarFieldEnum.maypulExp,
};

export const Neera: Character = {
  name: 'Neera',
  icon: NeeraIcon,
  splash: NeeraSplash,
  banner: getBackgroundImage('Neera_Basic-Banner'),
  statName: Prisma.PlayerScalarFieldEnum.neeraExp,
};

export const Queen: Character = {
  name: 'Queen',
  icon: QueenIcon,
  splash: QueenSplash,
  banner: getBackgroundImage('Queen_Basic-Banner'),
  statName: Prisma.PlayerScalarFieldEnum.queenExp,
};

export const Reva: Character = {
  name: 'Reva',
  icon: RevaIcon,
  splash: RevaSplash,
  banner: getBackgroundImage('Reva_Basic-Banner'),
  statName: Prisma.PlayerScalarFieldEnum.revaExp,
};

export const Saffron: Character = {
  name: 'Saffron',
  icon: SaffronIcon,
  splash: SaffronSplash,
  banner: getBackgroundImage('Saffron_Basic-Banner'),
  statName: Prisma.PlayerScalarFieldEnum.saffronExp,
};

export const Selicy: Character = {
  name: 'Selicy',
  icon: SelicyIcon,
  splash: SelicySplash,
  banner: getBackgroundImage('Selicy_Basic-Banner'),
  statName: Prisma.PlayerScalarFieldEnum.selicyExp,
};

export const Shiso: Character = {
  name: 'Shiso',
  icon: ShisoIcon,
  splash: ShisoSplash,
  banner: getBackgroundImage('Shiso_Basic-Banner'),
  statName: Prisma.PlayerScalarFieldEnum.shisoExp,
};

export const Shopkeeper: Character = {
  name: 'Shopkeeper',
  icon: ShopkeeperIcon,
  splash: ShopkeeperSplash,
  banner: getBackgroundImage('Shopkeeper_Basic-Banner'),
  statName: Prisma.PlayerScalarFieldEnum.shopkeeperExp,
};

export const Terra: Character = {
  name: 'Terra',
  icon: TerraIcon,
  splash: TerraSplash,
  banner: getBackgroundImage('Terra_Basic-Banner'),
  statName: Prisma.PlayerScalarFieldEnum.terraExp,
};

export const Violette: Character = {
  name: 'Violette',
  icon: VioletteIcon,
  splash: VioletteSplash,
  banner: getBackgroundImage('Violette_Basic-Banner'),
  statName: Prisma.PlayerScalarFieldEnum.violetteExp,
};

export const Terrable: Character = {
  name: 'Terrable',
  icon: TerrableIcon,
  splash: TerrableSplash,
  banner: getBackgroundImage('Terrable_Basic-Banner'),
  statName: Prisma.PlayerScalarFieldEnum.terrableExp,
};

export const Perilla: Character = {
  name: 'Perilla',
  icon: PerillaIcon,
  splash: PerillaSplash,
  banner: getBackgroundImage('Perilla_Basic-Banner'),
  statName: Prisma.PlayerScalarFieldEnum.perillaExp,
};

export const Characters: Character[] = [
  Chiretta,
  Dreadwyrm,
  Gunner,
  Harissa,
  Hazel,
  Maypul,
  Neera,
  Queen,
  Reva,
  Saffron,
  Selicy,
  Shiso,
  Shopkeeper,
  Terra,
  Violette,
  Terrable,
  Perilla,
];

export function getTopCharacter(player: Player): Character {
  let topCharacter: Character = Selicy;
  let topExp = 0;
  const chiretta = player.chirettaExp;
  const dreadwyrm = player.dreadwyrmExp;
  const gunner = player.gunnerExp;
  const harissa = player.harissaExp;
  const hazel = player.hazelExp;
  const maypul = player.maypulExp;
  const neera = player.neeraExp;
  const queen = player.queenExp;
  const reva = player.revaExp;
  const saffron = player.saffronExp;
  const selicy = player.selicyExp;
  const shiso = player.shisoExp;
  const shopkeeper = player.shopkeeperExp;
  const terra = player.terraExp;
  const violette = player.violetteExp;
  const terrable = player.terrableExp;
  const perilla = player.perillaExp;

  // loop over characters and find the one with the highest experience
  for (const character of Characters) {
    let exp = 0;

    switch (character.name) {
      case 'Chiretta':
        exp = chiretta ?? 0;
        break;
      case 'Dreadwyrm':
        exp = dreadwyrm ?? 0;
        break;
      case 'Gunner':
        exp = gunner ?? 0;
        break;
      case 'Harissa':
        exp = harissa ?? 0;
        break;
      case 'Hazel':
        exp = hazel ?? 0;
        break;
      case 'Maypul':
        exp = maypul ?? 0;
        break;
      case 'Neera':
        exp = neera ?? 0;
        break;
      case 'Queen':
        exp = queen ?? 0;
        break;
      case 'Reva':
        exp = reva ?? 0;
        break;
      case 'Saffron':
        exp = saffron ?? 0;
        break;
      case 'Selicy':
        exp = selicy ?? 0;
        break;
      case 'Shiso':
        exp = shiso ?? 0;
        break;
      case 'Shopkeeper':
        exp = shopkeeper ?? 0;
        break;
      case 'Terra':
        exp = terra ?? 0;
        break;
      case 'Violette':
        exp = violette ?? 0;
        break;
      case 'Terrable':
        exp = terrable ?? 0;
        break;
      case 'Perilla':
        exp = perilla ?? 0;
        break;
    }

    if (exp > topExp) {
      topExp = exp;
      topCharacter = character;
    }
  }

  return topCharacter;
}

export function getBackgroundImage(filename: string): Banner {
  const basicBanner = getBanner(filename);

  if (basicBanner) {
    return basicBanner;
  } else {
    return {
      bg: MountainBg,
      position: 'center',
    };
  }
}
