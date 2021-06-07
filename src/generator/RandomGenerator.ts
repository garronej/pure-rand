export default interface RandomGenerator {
  next(): [number, RandomGenerator];
  jump?(): RandomGenerator;
  min(): number; //inclusive
  max(): number; //inclusive
}
export { RandomGenerator };

export interface RandomGeneratorWithUnsafe {
  /** Minimal value (included) that could be generated by this generator */
  min(): number;
  /** Maximal value (included) that could be generated by this generator */
  max(): number;
  /** Produce a fully independent clone of the current instance */
  clone(): RandomGeneratorWithUnsafe;
  /** Generate next random value along with the next generator (does not impact current instance) */
  next(): [number, RandomGeneratorWithUnsafe];
  /** Compute the jumped generator (does not impact current instance) */
  jump?(): RandomGeneratorWithUnsafe;
  /** Generate next value BUT alters current generator */
  unsafeNext(): number;
  /** Jump current generator */
  unsafeJump?(): void;
}

export function unsafeGenerateN(rng: RandomGeneratorWithUnsafe, num: number): number[] {
  const out: number[] = [];
  for (let idx = 0; idx != num; ++idx) {
    out.push(rng.unsafeNext());
  }
  return out;
}

// TODO implement it with unsafeGenerateN
export function generateN(rng: RandomGenerator, num: number): [number[], RandomGenerator] {
  let cur: RandomGenerator = rng;
  const out: number[] = [];
  for (let idx = 0; idx != num; ++idx) {
    const nextOut = cur.next();
    out.push(nextOut[0]);
    cur = nextOut[1];
  }
  return [out, cur];
}

export function unsafeSkipN(rng: RandomGeneratorWithUnsafe, num: number): void {
  for (let idx = 0; idx != num; ++idx) {
    rng.unsafeNext();
  }
}

// TODO Implement it with unsafeSkipN
export function skipN(rng: RandomGenerator, num: number): RandomGenerator {
  return generateN(rng, num)[1];
}
