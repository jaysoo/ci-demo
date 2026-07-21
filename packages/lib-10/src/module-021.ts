// Generated fixture source - exists to give tsc real work to do in CI demos.

export interface Shape021_1<T> {
  id: string;
  value: T;
  meta: { tags: string[]; score: number; nested: { a: T; b: readonly T[] } };
}

export type Mapped021_1<T> = { readonly [K in keyof Shape021_1<T>]-?: Shape021_1<T>[K] };

export type Paths021_1<T> = T extends object
  ? { [K in keyof T & string]: K | `${K}.${Paths021_1<T[K]> & string}` }[keyof T & string]
  : never;

export function build021_1<T extends { id: string }>(items: readonly T[]) {
  return items
    .map((item, index) => ({ ...item, index, key: `${item.id}:${index}` }))
    .filter((item) => item.index % 2 === 0)
    .reduce<Record<string, (typeof items)[number] & { index: number }>>((acc, item) => {
      acc[item.key] = item;
      return acc;
    }, {});
}

export function compose021_1<A, B, C, D>(
  f: (a: A) => B,
  g: (b: B) => C,
  h: (c: C) => D
): (a: A) => D {
  return (a) => h(g(f(a)));
}

export const wired021_1 = compose021_1(
  (x: number) => ({ n: x }),
  (x) => ({ ...x, s: String(x.n) }),
  (x) => ({ ...x, ok: x.s.length > 0 })
);

export class Store021_1<T extends { id: string }> {
  private readonly items = new Map<string, T>();

  add(item: T): this {
    this.items.set(item.id, item);
    return this;
  }

  find(predicate: (item: T) => boolean): T | undefined {
    for (const item of this.items.values()) {
      if (predicate(item)) {
        return item;
      }
    }
    return undefined;
  }

  fold<A>(seed: A, step: (acc: A, item: T) => A): A {
    let acc = seed;
    for (const item of this.items.values()) {
      acc = step(acc, item);
    }
    return acc;
  }

  snapshot(): Mapped021_1<T>[] {
    return [] as never;
  }
}

export const label021_1 = 'lib-10/module-021/block-1';

export interface Shape021_2<T> {
  id: string;
  value: T;
  meta: { tags: string[]; score: number; nested: { a: T; b: readonly T[] } };
}

export type Mapped021_2<T> = { readonly [K in keyof Shape021_2<T>]-?: Shape021_2<T>[K] };

export type Paths021_2<T> = T extends object
  ? { [K in keyof T & string]: K | `${K}.${Paths021_2<T[K]> & string}` }[keyof T & string]
  : never;

export function build021_2<T extends { id: string }>(items: readonly T[]) {
  return items
    .map((item, index) => ({ ...item, index, key: `${item.id}:${index}` }))
    .filter((item) => item.index % 2 === 0)
    .reduce<Record<string, (typeof items)[number] & { index: number }>>((acc, item) => {
      acc[item.key] = item;
      return acc;
    }, {});
}

export function compose021_2<A, B, C, D>(
  f: (a: A) => B,
  g: (b: B) => C,
  h: (c: C) => D
): (a: A) => D {
  return (a) => h(g(f(a)));
}

export const wired021_2 = compose021_2(
  (x: number) => ({ n: x }),
  (x) => ({ ...x, s: String(x.n) }),
  (x) => ({ ...x, ok: x.s.length > 0 })
);

export class Store021_2<T extends { id: string }> {
  private readonly items = new Map<string, T>();

  add(item: T): this {
    this.items.set(item.id, item);
    return this;
  }

  find(predicate: (item: T) => boolean): T | undefined {
    for (const item of this.items.values()) {
      if (predicate(item)) {
        return item;
      }
    }
    return undefined;
  }

  fold<A>(seed: A, step: (acc: A, item: T) => A): A {
    let acc = seed;
    for (const item of this.items.values()) {
      acc = step(acc, item);
    }
    return acc;
  }

  snapshot(): Mapped021_2<T>[] {
    return [] as never;
  }
}

export const label021_2 = 'lib-10/module-021/block-2';

export interface Shape021_3<T> {
  id: string;
  value: T;
  meta: { tags: string[]; score: number; nested: { a: T; b: readonly T[] } };
}

export type Mapped021_3<T> = { readonly [K in keyof Shape021_3<T>]-?: Shape021_3<T>[K] };

export type Paths021_3<T> = T extends object
  ? { [K in keyof T & string]: K | `${K}.${Paths021_3<T[K]> & string}` }[keyof T & string]
  : never;

export function build021_3<T extends { id: string }>(items: readonly T[]) {
  return items
    .map((item, index) => ({ ...item, index, key: `${item.id}:${index}` }))
    .filter((item) => item.index % 2 === 0)
    .reduce<Record<string, (typeof items)[number] & { index: number }>>((acc, item) => {
      acc[item.key] = item;
      return acc;
    }, {});
}

export function compose021_3<A, B, C, D>(
  f: (a: A) => B,
  g: (b: B) => C,
  h: (c: C) => D
): (a: A) => D {
  return (a) => h(g(f(a)));
}

export const wired021_3 = compose021_3(
  (x: number) => ({ n: x }),
  (x) => ({ ...x, s: String(x.n) }),
  (x) => ({ ...x, ok: x.s.length > 0 })
);

export class Store021_3<T extends { id: string }> {
  private readonly items = new Map<string, T>();

  add(item: T): this {
    this.items.set(item.id, item);
    return this;
  }

  find(predicate: (item: T) => boolean): T | undefined {
    for (const item of this.items.values()) {
      if (predicate(item)) {
        return item;
      }
    }
    return undefined;
  }

  fold<A>(seed: A, step: (acc: A, item: T) => A): A {
    let acc = seed;
    for (const item of this.items.values()) {
      acc = step(acc, item);
    }
    return acc;
  }

  snapshot(): Mapped021_3<T>[] {
    return [] as never;
  }
}

export const label021_3 = 'lib-10/module-021/block-3';

export interface Shape021_4<T> {
  id: string;
  value: T;
  meta: { tags: string[]; score: number; nested: { a: T; b: readonly T[] } };
}

export type Mapped021_4<T> = { readonly [K in keyof Shape021_4<T>]-?: Shape021_4<T>[K] };

export type Paths021_4<T> = T extends object
  ? { [K in keyof T & string]: K | `${K}.${Paths021_4<T[K]> & string}` }[keyof T & string]
  : never;

export function build021_4<T extends { id: string }>(items: readonly T[]) {
  return items
    .map((item, index) => ({ ...item, index, key: `${item.id}:${index}` }))
    .filter((item) => item.index % 2 === 0)
    .reduce<Record<string, (typeof items)[number] & { index: number }>>((acc, item) => {
      acc[item.key] = item;
      return acc;
    }, {});
}

export function compose021_4<A, B, C, D>(
  f: (a: A) => B,
  g: (b: B) => C,
  h: (c: C) => D
): (a: A) => D {
  return (a) => h(g(f(a)));
}

export const wired021_4 = compose021_4(
  (x: number) => ({ n: x }),
  (x) => ({ ...x, s: String(x.n) }),
  (x) => ({ ...x, ok: x.s.length > 0 })
);

export class Store021_4<T extends { id: string }> {
  private readonly items = new Map<string, T>();

  add(item: T): this {
    this.items.set(item.id, item);
    return this;
  }

  find(predicate: (item: T) => boolean): T | undefined {
    for (const item of this.items.values()) {
      if (predicate(item)) {
        return item;
      }
    }
    return undefined;
  }

  fold<A>(seed: A, step: (acc: A, item: T) => A): A {
    let acc = seed;
    for (const item of this.items.values()) {
      acc = step(acc, item);
    }
    return acc;
  }

  snapshot(): Mapped021_4<T>[] {
    return [] as never;
  }
}

export const label021_4 = 'lib-10/module-021/block-4';

export interface Shape021_5<T> {
  id: string;
  value: T;
  meta: { tags: string[]; score: number; nested: { a: T; b: readonly T[] } };
}

export type Mapped021_5<T> = { readonly [K in keyof Shape021_5<T>]-?: Shape021_5<T>[K] };

export type Paths021_5<T> = T extends object
  ? { [K in keyof T & string]: K | `${K}.${Paths021_5<T[K]> & string}` }[keyof T & string]
  : never;

export function build021_5<T extends { id: string }>(items: readonly T[]) {
  return items
    .map((item, index) => ({ ...item, index, key: `${item.id}:${index}` }))
    .filter((item) => item.index % 2 === 0)
    .reduce<Record<string, (typeof items)[number] & { index: number }>>((acc, item) => {
      acc[item.key] = item;
      return acc;
    }, {});
}

export function compose021_5<A, B, C, D>(
  f: (a: A) => B,
  g: (b: B) => C,
  h: (c: C) => D
): (a: A) => D {
  return (a) => h(g(f(a)));
}

export const wired021_5 = compose021_5(
  (x: number) => ({ n: x }),
  (x) => ({ ...x, s: String(x.n) }),
  (x) => ({ ...x, ok: x.s.length > 0 })
);

export class Store021_5<T extends { id: string }> {
  private readonly items = new Map<string, T>();

  add(item: T): this {
    this.items.set(item.id, item);
    return this;
  }

  find(predicate: (item: T) => boolean): T | undefined {
    for (const item of this.items.values()) {
      if (predicate(item)) {
        return item;
      }
    }
    return undefined;
  }

  fold<A>(seed: A, step: (acc: A, item: T) => A): A {
    let acc = seed;
    for (const item of this.items.values()) {
      acc = step(acc, item);
    }
    return acc;
  }

  snapshot(): Mapped021_5<T>[] {
    return [] as never;
  }
}

export const label021_5 = 'lib-10/module-021/block-5';

export interface Shape021_6<T> {
  id: string;
  value: T;
  meta: { tags: string[]; score: number; nested: { a: T; b: readonly T[] } };
}

export type Mapped021_6<T> = { readonly [K in keyof Shape021_6<T>]-?: Shape021_6<T>[K] };

export type Paths021_6<T> = T extends object
  ? { [K in keyof T & string]: K | `${K}.${Paths021_6<T[K]> & string}` }[keyof T & string]
  : never;

export function build021_6<T extends { id: string }>(items: readonly T[]) {
  return items
    .map((item, index) => ({ ...item, index, key: `${item.id}:${index}` }))
    .filter((item) => item.index % 2 === 0)
    .reduce<Record<string, (typeof items)[number] & { index: number }>>((acc, item) => {
      acc[item.key] = item;
      return acc;
    }, {});
}

export function compose021_6<A, B, C, D>(
  f: (a: A) => B,
  g: (b: B) => C,
  h: (c: C) => D
): (a: A) => D {
  return (a) => h(g(f(a)));
}

export const wired021_6 = compose021_6(
  (x: number) => ({ n: x }),
  (x) => ({ ...x, s: String(x.n) }),
  (x) => ({ ...x, ok: x.s.length > 0 })
);

export class Store021_6<T extends { id: string }> {
  private readonly items = new Map<string, T>();

  add(item: T): this {
    this.items.set(item.id, item);
    return this;
  }

  find(predicate: (item: T) => boolean): T | undefined {
    for (const item of this.items.values()) {
      if (predicate(item)) {
        return item;
      }
    }
    return undefined;
  }

  fold<A>(seed: A, step: (acc: A, item: T) => A): A {
    let acc = seed;
    for (const item of this.items.values()) {
      acc = step(acc, item);
    }
    return acc;
  }

  snapshot(): Mapped021_6<T>[] {
    return [] as never;
  }
}

export const label021_6 = 'lib-10/module-021/block-6';

export interface Shape021_7<T> {
  id: string;
  value: T;
  meta: { tags: string[]; score: number; nested: { a: T; b: readonly T[] } };
}

export type Mapped021_7<T> = { readonly [K in keyof Shape021_7<T>]-?: Shape021_7<T>[K] };

export type Paths021_7<T> = T extends object
  ? { [K in keyof T & string]: K | `${K}.${Paths021_7<T[K]> & string}` }[keyof T & string]
  : never;

export function build021_7<T extends { id: string }>(items: readonly T[]) {
  return items
    .map((item, index) => ({ ...item, index, key: `${item.id}:${index}` }))
    .filter((item) => item.index % 2 === 0)
    .reduce<Record<string, (typeof items)[number] & { index: number }>>((acc, item) => {
      acc[item.key] = item;
      return acc;
    }, {});
}

export function compose021_7<A, B, C, D>(
  f: (a: A) => B,
  g: (b: B) => C,
  h: (c: C) => D
): (a: A) => D {
  return (a) => h(g(f(a)));
}

export const wired021_7 = compose021_7(
  (x: number) => ({ n: x }),
  (x) => ({ ...x, s: String(x.n) }),
  (x) => ({ ...x, ok: x.s.length > 0 })
);

export class Store021_7<T extends { id: string }> {
  private readonly items = new Map<string, T>();

  add(item: T): this {
    this.items.set(item.id, item);
    return this;
  }

  find(predicate: (item: T) => boolean): T | undefined {
    for (const item of this.items.values()) {
      if (predicate(item)) {
        return item;
      }
    }
    return undefined;
  }

  fold<A>(seed: A, step: (acc: A, item: T) => A): A {
    let acc = seed;
    for (const item of this.items.values()) {
      acc = step(acc, item);
    }
    return acc;
  }

  snapshot(): Mapped021_7<T>[] {
    return [] as never;
  }
}

export const label021_7 = 'lib-10/module-021/block-7';

export interface Shape021_8<T> {
  id: string;
  value: T;
  meta: { tags: string[]; score: number; nested: { a: T; b: readonly T[] } };
}

export type Mapped021_8<T> = { readonly [K in keyof Shape021_8<T>]-?: Shape021_8<T>[K] };

export type Paths021_8<T> = T extends object
  ? { [K in keyof T & string]: K | `${K}.${Paths021_8<T[K]> & string}` }[keyof T & string]
  : never;

export function build021_8<T extends { id: string }>(items: readonly T[]) {
  return items
    .map((item, index) => ({ ...item, index, key: `${item.id}:${index}` }))
    .filter((item) => item.index % 2 === 0)
    .reduce<Record<string, (typeof items)[number] & { index: number }>>((acc, item) => {
      acc[item.key] = item;
      return acc;
    }, {});
}

export function compose021_8<A, B, C, D>(
  f: (a: A) => B,
  g: (b: B) => C,
  h: (c: C) => D
): (a: A) => D {
  return (a) => h(g(f(a)));
}

export const wired021_8 = compose021_8(
  (x: number) => ({ n: x }),
  (x) => ({ ...x, s: String(x.n) }),
  (x) => ({ ...x, ok: x.s.length > 0 })
);

export class Store021_8<T extends { id: string }> {
  private readonly items = new Map<string, T>();

  add(item: T): this {
    this.items.set(item.id, item);
    return this;
  }

  find(predicate: (item: T) => boolean): T | undefined {
    for (const item of this.items.values()) {
      if (predicate(item)) {
        return item;
      }
    }
    return undefined;
  }

  fold<A>(seed: A, step: (acc: A, item: T) => A): A {
    let acc = seed;
    for (const item of this.items.values()) {
      acc = step(acc, item);
    }
    return acc;
  }

  snapshot(): Mapped021_8<T>[] {
    return [] as never;
  }
}

export const label021_8 = 'lib-10/module-021/block-8';

export interface Shape021_9<T> {
  id: string;
  value: T;
  meta: { tags: string[]; score: number; nested: { a: T; b: readonly T[] } };
}

export type Mapped021_9<T> = { readonly [K in keyof Shape021_9<T>]-?: Shape021_9<T>[K] };

export type Paths021_9<T> = T extends object
  ? { [K in keyof T & string]: K | `${K}.${Paths021_9<T[K]> & string}` }[keyof T & string]
  : never;

export function build021_9<T extends { id: string }>(items: readonly T[]) {
  return items
    .map((item, index) => ({ ...item, index, key: `${item.id}:${index}` }))
    .filter((item) => item.index % 2 === 0)
    .reduce<Record<string, (typeof items)[number] & { index: number }>>((acc, item) => {
      acc[item.key] = item;
      return acc;
    }, {});
}

export function compose021_9<A, B, C, D>(
  f: (a: A) => B,
  g: (b: B) => C,
  h: (c: C) => D
): (a: A) => D {
  return (a) => h(g(f(a)));
}

export const wired021_9 = compose021_9(
  (x: number) => ({ n: x }),
  (x) => ({ ...x, s: String(x.n) }),
  (x) => ({ ...x, ok: x.s.length > 0 })
);

export class Store021_9<T extends { id: string }> {
  private readonly items = new Map<string, T>();

  add(item: T): this {
    this.items.set(item.id, item);
    return this;
  }

  find(predicate: (item: T) => boolean): T | undefined {
    for (const item of this.items.values()) {
      if (predicate(item)) {
        return item;
      }
    }
    return undefined;
  }

  fold<A>(seed: A, step: (acc: A, item: T) => A): A {
    let acc = seed;
    for (const item of this.items.values()) {
      acc = step(acc, item);
    }
    return acc;
  }

  snapshot(): Mapped021_9<T>[] {
    return [] as never;
  }
}

export const label021_9 = 'lib-10/module-021/block-9';

export interface Shape021_10<T> {
  id: string;
  value: T;
  meta: { tags: string[]; score: number; nested: { a: T; b: readonly T[] } };
}

export type Mapped021_10<T> = { readonly [K in keyof Shape021_10<T>]-?: Shape021_10<T>[K] };

export type Paths021_10<T> = T extends object
  ? { [K in keyof T & string]: K | `${K}.${Paths021_10<T[K]> & string}` }[keyof T & string]
  : never;

export function build021_10<T extends { id: string }>(items: readonly T[]) {
  return items
    .map((item, index) => ({ ...item, index, key: `${item.id}:${index}` }))
    .filter((item) => item.index % 2 === 0)
    .reduce<Record<string, (typeof items)[number] & { index: number }>>((acc, item) => {
      acc[item.key] = item;
      return acc;
    }, {});
}

export function compose021_10<A, B, C, D>(
  f: (a: A) => B,
  g: (b: B) => C,
  h: (c: C) => D
): (a: A) => D {
  return (a) => h(g(f(a)));
}

export const wired021_10 = compose021_10(
  (x: number) => ({ n: x }),
  (x) => ({ ...x, s: String(x.n) }),
  (x) => ({ ...x, ok: x.s.length > 0 })
);

export class Store021_10<T extends { id: string }> {
  private readonly items = new Map<string, T>();

  add(item: T): this {
    this.items.set(item.id, item);
    return this;
  }

  find(predicate: (item: T) => boolean): T | undefined {
    for (const item of this.items.values()) {
      if (predicate(item)) {
        return item;
      }
    }
    return undefined;
  }

  fold<A>(seed: A, step: (acc: A, item: T) => A): A {
    let acc = seed;
    for (const item of this.items.values()) {
      acc = step(acc, item);
    }
    return acc;
  }

  snapshot(): Mapped021_10<T>[] {
    return [] as never;
  }
}

export const label021_10 = 'lib-10/module-021/block-10';
