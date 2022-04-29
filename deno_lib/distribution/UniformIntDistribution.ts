import { Distribution } from './Distribution.ts';
import { RandomGenerator } from '../generator/RandomGenerator.ts';
import { unsafeUniformIntDistribution } from './UnsafeUniformIntDistribution.ts';

/**
 * Uniformly generate random integer values between `from` (included) and `to` (included)
 *
 * @param from - Lower bound of the range (included)
 * @param to - Upper bound of the range (included)
 *
 * @public
 */
function uniformIntDistribution(from: number, to: number): Distribution<number>;
/**
 * Uniformly generate random integer values between `from` (included) and `to` (included)
 *
 * @param from - Lower bound of the range (included)
 * @param to - Upper bound of the range (included)
 * @param rng - Instance of RandomGenerator to extract random values from
 *
 * @public
 */
function uniformIntDistribution(from: number, to: number, rng: RandomGenerator): [number, RandomGenerator];
function uniformIntDistribution(from: number, to: number, rng?: RandomGenerator) {
  if (rng != null) {
    const nextRng = rng.clone();
    return [unsafeUniformIntDistribution(from, to, nextRng), nextRng];
  }
  return function (rng: RandomGenerator) {
    const nextRng = rng.clone();
    return [unsafeUniformIntDistribution(from, to, nextRng), nextRng];
  };
}

export { uniformIntDistribution };
