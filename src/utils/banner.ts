import { type Player } from '@prisma/client';
import { type StaticImageData } from 'next/image';
import Suzaki_Chiretta_Banner_310 from '~/assets/banners/310_Suzaki_Chiretta_Banner.png';
import Suzaki_Gunner_A_Banner_310 from '~/assets/banners/310_Suzaki_Gunner_A_Banner.png';
import Suzaki_Gunner_Banner_310 from '~/assets/banners/310_Suzaki_Gunner_Banner.png';
import Suzaki_Harissa_Banner_310 from '~/assets/banners/310_Suzaki_Harissa_Banner.png';
import Suzaki_Hazel_Banner_310 from '~/assets/banners/310_Suzaki_Hazel_Banner.png';
import Suzaki_Reva_Banner_310 from '~/assets/banners/310_Suzaki_Reva_Banner.png';
import Suzaki_Saffron_Banner_310 from '~/assets/banners/310_Suzaki_Saffron_Banner.png';
import Suzaki_Selicy_Banner_310 from '~/assets/banners/310_Suzaki_Selicy_Banner.png';
import Suzaki_Shiso_Banner_310 from '~/assets/banners/310_Suzaki_Shiso_Banner.png';
import Suzaki_Shopkeeper_Banner_310 from '~/assets/banners/310_Suzaki_Shopkeeper_Banner.png';
import Suzaki_Stamp_Banner_310 from '~/assets/banners/310_Suzaki_Stamp_Banner.png';
import Suzaki_Terra_Banner_310 from '~/assets/banners/310_Suzaki_Terra_Banner.png';
import Suzaki_Violette_Banner_310 from '~/assets/banners/310_Suzaki_Violette_Banner.png';
import ReviewsBanner from '~/assets/banners/500_Reviews-Banner.png';
import All_Spells_Unlocked from '~/assets/banners/All_Spells_Unlocked.png';
import Chiretta_BasicBanner from '~/assets/banners/Chiretta_Basic-Banner.png';
import Chiretta_ClassicBanner from '~/assets/banners/Chiretta_Classic-Banner.png';
import Chiretta_InkBanner from '~/assets/banners/Chiretta_Ink-Banner.png';
import DeveloperBanner from '~/assets/banners/Developer-Banner.png';
import Dreadwyrm_BasicBanner from '~/assets/banners/Dreadwyrm_Basic-Banner.png';
import Dreadwyrm_ClassicBanner from '~/assets/banners/Dreadwyrm_Classic-Banner.png';
import Dreadwyrm_InkBanner from '~/assets/banners/Dreadwyrm_Ink-Banner.png';
import Gunner_BasicBanner from '~/assets/banners/Gunner_Basic-Banner.png';
import Gunner_ClassicBanner from '~/assets/banners/Gunner_Classic-Banner.png';
import Gunner_InkBanner from '~/assets/banners/Gunner_Ink-Banner.png';
import Harissa_BasicBanner from '~/assets/banners/Harissa_Basic-Banner.png';
import Harissa_ClassicBanner from '~/assets/banners/Harissa_Classic-Banner.png';
import Harissa_InkBanner from '~/assets/banners/Harissa_Ink-Banner.png';
import Hazel_BasicBanner from '~/assets/banners/Hazel_Basic-Banner.png';
import Hazel_ClassicBanner from '~/assets/banners/Hazel_Classic-Banner.png';
import Hazel_InkBanner from '~/assets/banners/Hazel_Ink-Banner.png';
import Maypul_BasicBanner from '~/assets/banners/Maypul_Basic-Banner.png';
import Maypul_InkBanner from '~/assets/banners/Maypul_Ink-Banner.png';
import Neera_BasicBanner from '~/assets/banners/Neera_Basic-Banner.png';
import Neera_InkBanner from '~/assets/banners/Neera_Ink-Banner.png';
import Perilla_BasicBanner from '~/assets/banners/Perilla_Basic-Banner.png';
import Perilla_ClassicBanner from '~/assets/banners/Perilla_Classic-Banner.png';
import Queen_BasicBanner from '~/assets/banners/Queen_Basic-Banner.png';
import Queen_InkBanner from '~/assets/banners/Queen_Ink-Banner.png';
import Random_BasicBanner from '~/assets/banners/Random_Basic-Banner.png';
import Random_Title_Box from '~/assets/banners/Random_Title_Box.png';
import Reva_BasicBanner from '~/assets/banners/Reva_Basic-Banner.png';
import Reva_ClassicBanner from '~/assets/banners/Reva_Classic-Banner.png';
import Reva_InkBanner from '~/assets/banners/Reva_Ink-Banner.png';
import Saffron_BasicBanner from '~/assets/banners/Saffron_Basic-Banner.png';
import Saffron_ClassicBanner from '~/assets/banners/Saffron_Classic-Banner.png';
import Saffron_InkBanner from '~/assets/banners/Saffron_Ink-Banner.png';
import Saffron_Omg from '~/assets/banners/Saffron_Omg.png';
import Saffron_RedBanner from '~/assets/banners/Saffron_Red-Banner.png';
import Saffron_TutorialBanner from '~/assets/banners/Saffron_Tutorial-Banner.png';
import Selicy_BasicBanner from '~/assets/banners/Selicy_Basic-Banner.png';
import Selicy_ClassicBanner from '~/assets/banners/Selicy_Classic-Banner.png';
import Selicy_GreenBanner from '~/assets/banners/Selicy_Green-Banner.png';
import Selicy_InkBanner from '~/assets/banners/Selicy_Ink-Banner.png';
import Shiso_BasicBanner from '~/assets/banners/Shiso_Basic-Banner.png';
import Shiso_ClassicBanner from '~/assets/banners/Shiso_Classic-Banner.png';
import Shiso_InkBanner from '~/assets/banners/Shiso_Ink-Banner.png';
import Shopkeeper_BasicBanner from '~/assets/banners/Shopkeeper_Basic-Banner.png';
import Shopkeeper_ClassicBanner from '~/assets/banners/Shopkeeper_Classic-Banner.png';
import Shopkeeper_InkBanner from '~/assets/banners/Shopkeeper_Ink-Banner.png';
import Terra_BasicBanner from '~/assets/banners/Terra_Basic-Banner.png';
import Terra_ClassicBanner from '~/assets/banners/Terra_Classic-Banner.png';
import Terra_InkBanner from '~/assets/banners/Terra_Ink-Banner.png';
import Terrable_BasicBanner from '~/assets/banners/Terrable_Basic-Banner.png';
import Terrable_ClassicBanner from '~/assets/banners/Terrable_Classic-Banner.png';
import Violette_BasicBanner from '~/assets/banners/Violette_Basic-Banner.png';
import Violette_ClassicBanner from '~/assets/banners/Violette_Classic-Banner.png';
import Violette_InkBanner from '~/assets/banners/Violette_Ink-Banner.png';

export type Banner = {
  bg: StaticImageData;
  position: 'center' | 'top';
};

export function getBanner(banner: Player['banner']): Banner | undefined {
  switch (banner) {
    case '310_Suzaki_Chiretta_Banner':
      return {
        bg: Suzaki_Chiretta_Banner_310,
        position: 'center',
      };
    case '310_Suzaki_Gunner_A_Banner':
      return {
        bg: Suzaki_Gunner_A_Banner_310,
        position: 'center',
      };
    case '310_Suzaki_Gunner_Banner':
      return {
        bg: Suzaki_Gunner_Banner_310,
        position: 'center',
      };
    case '310_Suzaki_Harissa_Banner':
      return {
        bg: Suzaki_Harissa_Banner_310,
        position: 'center',
      };
    case '310_Suzaki_Hazel_Banner':
      return {
        bg: Suzaki_Hazel_Banner_310,
        position: 'center',
      };
    case '310_Suzaki_Reva_Banner':
      return {
        bg: Suzaki_Reva_Banner_310,
        position: 'center',
      };
    case '310_Suzaki_Saffron_Banner':
      return {
        bg: Suzaki_Saffron_Banner_310,
        position: 'center',
      };
    case '310_Suzaki_Selicy_Banner':
      return {
        bg: Suzaki_Selicy_Banner_310,
        position: 'center',
      };
    case '310_Suzaki_Shiso_Banner':
      return {
        bg: Suzaki_Shiso_Banner_310,
        position: 'center',
      };
    case '310_Suzaki_Shopkeeper_Banner':
      return {
        bg: Suzaki_Shopkeeper_Banner_310,
        position: 'center',
      };
    case '310_Suzaki_Stamp_Banner':
      return {
        bg: Suzaki_Stamp_Banner_310,
        position: 'center',
      };
    case '310_Suzaki_Terra_Banner':
      return {
        bg: Suzaki_Terra_Banner_310,
        position: 'center',
      };
    case '310_Suzaki_Violette_Banner':
      return {
        bg: Suzaki_Violette_Banner_310,
        position: 'center',
      };
    case '500_Reviews-Banner':
      return {
        bg: ReviewsBanner,
        position: 'top',
      };
    case 'All_Spells_Unlocked':
      return {
        bg: All_Spells_Unlocked,
        position: 'center',
      };
    case 'Chiretta_Basic-Banner':
      return {
        bg: Chiretta_BasicBanner,
        position: 'center',
      };
    case 'Chiretta_Classic-Banner':
      return {
        bg: Chiretta_ClassicBanner,
        position: 'center',
      };
    case 'Chiretta_Ink-Banner':
      return {
        bg: Chiretta_InkBanner,
        position: 'top',
      };
    case 'Developer-Banner':
      return {
        bg: DeveloperBanner,
        position: 'center',
      };
    case 'Dreadwyrm_Basic-Banner':
      return {
        bg: Dreadwyrm_BasicBanner,
        position: 'center',
      };
    case 'Dreadwyrm_Classic-Banner':
      return {
        bg: Dreadwyrm_ClassicBanner,
        position: 'center',
      };
    case 'Dreadwyrm_Ink-Banner':
      return {
        bg: Dreadwyrm_InkBanner,
        position: 'center',
      };
    case 'Gunner_Basic-Banner':
      return {
        bg: Gunner_BasicBanner,
        position: 'center',
      };
    case 'Gunner_Classic-Banner':
      return {
        bg: Gunner_ClassicBanner,
        position: 'center',
      };
    case 'Gunner_Ink-Banner':
      return {
        bg: Gunner_InkBanner,
        position: 'center',
      };
    case 'Harissa_Basic-Banner':
      return {
        bg: Harissa_BasicBanner,
        position: 'center',
      };
    case 'Harissa_Classic-Banner':
      return {
        bg: Harissa_ClassicBanner,
        position: 'center',
      };
    case 'Harissa_Ink-Banner':
      return {
        bg: Harissa_InkBanner,
        position: 'top',
      };
    case 'Hazel_Basic-Banner':
      return {
        bg: Hazel_BasicBanner,
        position: 'center',
      };
    case 'Hazel_Classic-Banner':
      return {
        bg: Hazel_ClassicBanner,
        position: 'center',
      };
    case 'Hazel_Ink-Banner':
      return {
        bg: Hazel_InkBanner,
        position: 'center',
      };
    case 'Maypul_Basic-Banner':
      return {
        bg: Maypul_BasicBanner,
        position: 'center',
      };
    case 'Maypul_Ink-Banner':
      return {
        bg: Maypul_InkBanner,
        position: 'center',
      };
    case 'Neera_Basic-Banner':
      return {
        bg: Neera_BasicBanner,
        position: 'center',
      };
    case 'Neera_Ink-Banner':
      return {
        bg: Neera_InkBanner,
        position: 'center',
      };
    case 'Queen_Basic-Banner':
      return {
        bg: Queen_BasicBanner,
        position: 'center',
      };
    case 'Queen_Ink-Banner':
      return {
        bg: Queen_InkBanner,
        position: 'center',
      };
    case 'Random_Basic-Banner':
      return {
        bg: Random_BasicBanner,
        position: 'center',
      };
    case 'Random_Title_Box':
      return {
        bg: Random_Title_Box,
        position: 'center',
      };
    case 'Reva_Basic-Banner':
      return {
        bg: Reva_BasicBanner,
        position: 'center',
      };
    case 'Reva_Classic-Banner':
      return {
        bg: Reva_ClassicBanner,
        position: 'center',
      };
    case 'Reva_Ink-Banner':
      return {
        bg: Reva_InkBanner,
        position: 'center',
      };
    case 'Saffron_Basic-Banner':
      return {
        bg: Saffron_BasicBanner,
        position: 'center',
      };
    case 'Saffron_Classic-Banner':
      return {
        bg: Saffron_ClassicBanner,
        position: 'center',
      };
    case 'Saffron_Ink-Banner':
      return {
        bg: Saffron_InkBanner,
        position: 'center',
      };
    case 'Saffron_Omg':
      return {
        bg: Saffron_Omg,
        position: 'center',
      };
    case 'Saffron_Red-Banner':
      return {
        bg: Saffron_RedBanner,
        position: 'center',
      };
    case 'Saffron_Tutorial-Banner':
      return {
        bg: Saffron_TutorialBanner,
        position: 'center',
      };
    case 'Selicy_Basic-Banner':
      return {
        bg: Selicy_BasicBanner,
        position: 'center',
      };
    case 'Selicy_Classic-Banner':
      return {
        bg: Selicy_ClassicBanner,
        position: 'center',
      };
    case 'Selicy_Green-Banner':
      return {
        bg: Selicy_GreenBanner,
        position: 'center',
      };
    case 'Selicy_Ink-Banner':
      return {
        bg: Selicy_InkBanner,
        position: 'center',
      };
    case 'Shiso_Basic-Banner':
      return {
        bg: Shiso_BasicBanner,
        position: 'center',
      };
    case 'Shiso_Classic-Banner':
      return {
        bg: Shiso_ClassicBanner,
        position: 'center',
      };
    case 'Shiso_Ink-Banner':
      return {
        bg: Shiso_InkBanner,
        position: 'center',
      };
    case 'Shopkeeper_Basic-Banner':
      return {
        bg: Shopkeeper_BasicBanner,
        position: 'center',
      };
    case 'Shopkeeper_Classic-Banner':
      return {
        bg: Shopkeeper_ClassicBanner,
        position: 'center',
      };
    case 'Shopkeeper_Ink-Banner':
      return {
        bg: Shopkeeper_InkBanner,
        position: 'center',
      };
    case 'Terra_Basic-Banner':
      return {
        bg: Terra_BasicBanner,
        position: 'center',
      };
    case 'Terra_Classic-Banner':
      return {
        bg: Terra_ClassicBanner,
        position: 'center',
      };
    case 'Terra_Ink-Banner':
      return {
        bg: Terra_InkBanner,
        position: 'top',
      };
    case 'Violette_Basic-Banner':
      return {
        bg: Violette_BasicBanner,
        position: 'center',
      };
    case 'Violette_Classic-Banner':
      return {
        bg: Violette_ClassicBanner,
        position: 'center',
      };
    case 'Violette_Ink-Banner':
      return {
        bg: Violette_InkBanner,
        position: 'center',
      };
    case 'Perilla_Basic-Banner':
      return {
        bg: Perilla_BasicBanner,
        position: 'center',
      };
    case 'Perilla_Classic-Banner':
      return {
        bg: Perilla_ClassicBanner,
        position: 'center',
      };
    case 'Terrable_Basic-Banner':
      return {
        bg: Terrable_BasicBanner,
        position: 'center',
      };
    case 'Terrable_Classic-Banner':
      return {
        bg: Terrable_ClassicBanner,
        position: 'center',
      };
    default:
      return undefined;
  }
}
