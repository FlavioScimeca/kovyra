import { sizeToSpace } from '../utils';
import { size } from './size';

export const spaces = Object.entries(size).reduce(
  (acc, [k, v]) => {
    acc[k] = sizeToSpace(v);
    return acc;
  },
  {} as Record<string, number>
);

// Add required true key
spaces.true = spaces.$true || 16;
