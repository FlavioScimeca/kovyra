import { config } from '@kovyra/ui';

export type Conf = typeof config;

declare module '@kovyra/ui' {
  interface TamaguiCustomConfig extends Conf {}
}
