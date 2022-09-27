import { Valueof } from ".";

type Expect<T extends true> = T;
type Equal<A, B> = (A extends B ? 1 : 2) extends (B extends A ? 1 : 3)
  ? true
  : false;

const obj = { a: 1, b: 2 } as const;

type cases = [Expect<Equal<Valueof<typeof obj>, 1 | 2>>];
