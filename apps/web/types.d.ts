/* eslint-disable @typescript-eslint/no-empty-object-type*/

import type { config } from '@kovyra/theme';

export type Conf = typeof config;

declare module '@kovyra/theme' {
  interface TamaguiCustomConfig extends Conf {}
}
