import { RandomGenerator, generateN, skipN, unsafeGenerateN, unsafeSkipN } from './generator/RandomGenerator.ts';
import { congruential, congruential32 } from './generator/LinearCongruential.ts';
import mersenne from './generator/MersenneTwister.ts';
import { xorshift128plus } from './generator/XorShift.ts';
import { xoroshiro128plus } from './generator/XoroShiro.ts';

import { Distribution } from './distribution/Distribution.ts';
import { uniformArrayIntDistribution } from './distribution/UniformArrayIntDistribution.ts';
import { uniformBigIntDistribution } from './distribution/UniformBigIntDistribution.ts';
import { uniformIntDistribution } from './distribution/UniformIntDistribution.ts';
import { unsafeUniformArrayIntDistribution } from './distribution/UnsafeUniformArrayIntDistribution.ts';
import { unsafeUniformBigIntDistribution } from './distribution/UnsafeUniformBigIntDistribution.ts';
import { unsafeUniformIntDistribution } from './distribution/UnsafeUniformIntDistribution.ts';

// Explicit cast into string to avoid to have __type: "__PACKAGE_TYPE__"
const __type = '__PACKAGE_TYPE__' as string;
const __version = '__PACKAGE_VERSION__' as string;
const __commitHash = '__COMMIT_HASH__' as string;

export {
  __type,
  __version,
  __commitHash,
  RandomGenerator,
  generateN,
  skipN,
  unsafeGenerateN,
  unsafeSkipN,
  congruential,
  congruential32,
  mersenne,
  xorshift128plus,
  xoroshiro128plus,
  Distribution,
  uniformArrayIntDistribution,
  uniformBigIntDistribution,
  uniformIntDistribution,
  unsafeUniformArrayIntDistribution,
  unsafeUniformBigIntDistribution,
  unsafeUniformIntDistribution,
};
