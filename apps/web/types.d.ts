import { config } from '@kovyra/theme';

export type Conf = typeof config;

declare module '@kovyra/theme' {
  interface TamaguiCustomConfig extends Conf {}
}
