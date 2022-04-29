import { Distribution } from './Distribution.ts';
import { RandomGenerator } from '../generator/RandomGenerator.ts';
import { ArrayInt } from './internals/ArrayInt.ts';
import { unsafeUniformArrayIntDistribution } from './UnsafeUniformArrayIntDistribution.ts';

/**
 * Uniformly generate random ArrayInt values between `from` (included) and `to` (included)
 *
 * @param from - Lower bound of the range (included)
 * @param to - Upper bound of the range (included)
 *
 * @public
 */
function uniformArrayIntDistribution(from: ArrayInt, to: ArrayInt): Distribution<ArrayInt>;
/**
 * Uniformly generate random ArrayInt values between `from` (included) and `to` (included)
 *
 * @param from - Lower bound of the range (included)
 * @param to - Upper bound of the range (included)
 * @param rng - Instance of RandomGenerator to extract random values from
 *
 * @public
 */
function uniformArrayIntDistribution(from: ArrayInt, to: ArrayInt, rng: RandomGenerator): [ArrayInt, RandomGenerator];
function uniformArrayIntDistribution(from: ArrayInt, to: ArrayInt, rng?: RandomGenerator) {
  if (rng != null) {
    const nextRng = rng.clone();
    return [unsafeUniformArrayIntDistribution(from, to, nextRng), nextRng];
  }
  return function (rng: RandomGenerator) {
    const nextRng = rng.clone();
    return [unsafeUniformArrayIntDistribution(from, to, nextRng), nextRng];
  };
}

export { uniformArrayIntDistribution };
