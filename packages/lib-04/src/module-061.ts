// Generated fixture source - exists to give tsc real work to do in CI demos.

export interface Shape061_1<T> {
  id: string;
  value: T;
  meta: { tags: string[]; score: number; nested: { a: T; b: readonly T[] } };
}

export type Mapped061_1<T> = { readonly [K in keyof Shape061_1<T>]-?: Shape061_1<T>[K] };

export type Paths061_1<T> = T extends object
  ? { [K in keyof T & string]: K | `${K}.${Paths061_1<T[K]> & string}` }[keyof T & string]
  : never;

export function build061_1<T extends { id: string }>(items: readonly T[]) {
  return items
    .map((item, index) => ({ ...item, index, key: `${item.id}:${index}` }))
    .filter((item) => item.index % 2 === 0)
    .reduce<Record<string, (typeof items)[number] & { index: number }>>((acc, item) => {
      acc[item.key] = item;
      return acc;
    }, {});
}

export function compose061_1<A, B, C, D>(
  f: (a: A) => B,
  g: (b: B) => C,
  h: (c: C) => D
): (a: A) => D {
  return (a) => h(g(f(a)));
}

export const wired061_1 = compose061_1(
  (x: number) => ({ n: x }),
  (x) => ({ ...x, s: String(x.n) }),
  (x) => ({ ...x, ok: x.s.length > 0 })
);

export class Store061_1<T extends { id: string }> {
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

  snapshot(): Mapped061_1<T>[] {
    return [] as never;
  }
}

export const label061_1 = 'lib-04/module-061/block-1';

export interface Shape061_2<T> {
  id: string;
  value: T;
  meta: { tags: string[]; score: number; nested: { a: T; b: readonly T[] } };
}

export type Mapped061_2<T> = { readonly [K in keyof Shape061_2<T>]-?: Shape061_2<T>[K] };

export type Paths061_2<T> = T extends object
  ? { [K in keyof T & string]: K | `${K}.${Paths061_2<T[K]> & string}` }[keyof T & string]
  : never;

export function build061_2<T extends { id: string }>(items: readonly T[]) {
  return items
    .map((item, index) => ({ ...item, index, key: `${item.id}:${index}` }))
    .filter((item) => item.index % 2 === 0)
    .reduce<Record<string, (typeof items)[number] & { index: number }>>((acc, item) => {
      acc[item.key] = item;
      return acc;
    }, {});
}

export function compose061_2<A, B, C, D>(
  f: (a: A) => B,
  g: (b: B) => C,
  h: (c: C) => D
): (a: A) => D {
  return (a) => h(g(f(a)));
}

export const wired061_2 = compose061_2(
  (x: number) => ({ n: x }),
  (x) => ({ ...x, s: String(x.n) }),
  (x) => ({ ...x, ok: x.s.length > 0 })
);

export class Store061_2<T extends { id: string }> {
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

  snapshot(): Mapped061_2<T>[] {
    return [] as never;
  }
}

export const label061_2 = 'lib-04/module-061/block-2';

export interface Shape061_3<T> {
  id: string;
  value: T;
  meta: { tags: string[]; score: number; nested: { a: T; b: readonly T[] } };
}

export type Mapped061_3<T> = { readonly [K in keyof Shape061_3<T>]-?: Shape061_3<T>[K] };

export type Paths061_3<T> = T extends object
  ? { [K in keyof T & string]: K | `${K}.${Paths061_3<T[K]> & string}` }[keyof T & string]
  : never;

export function build061_3<T extends { id: string }>(items: readonly T[]) {
  return items
    .map((item, index) => ({ ...item, index, key: `${item.id}:${index}` }))
    .filter((item) => item.index % 2 === 0)
    .reduce<Record<string, (typeof items)[number] & { index: number }>>((acc, item) => {
      acc[item.key] = item;
      return acc;
    }, {});
}

export function compose061_3<A, B, C, D>(
  f: (a: A) => B,
  g: (b: B) => C,
  h: (c: C) => D
): (a: A) => D {
  return (a) => h(g(f(a)));
}

export const wired061_3 = compose061_3(
  (x: number) => ({ n: x }),
  (x) => ({ ...x, s: String(x.n) }),
  (x) => ({ ...x, ok: x.s.length > 0 })
);

export class Store061_3<T extends { id: string }> {
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

  snapshot(): Mapped061_3<T>[] {
    return [] as never;
  }
}

export const label061_3 = 'lib-04/module-061/block-3';

export interface Shape061_4<T> {
  id: string;
  value: T;
  meta: { tags: string[]; score: number; nested: { a: T; b: readonly T[] } };
}

export type Mapped061_4<T> = { readonly [K in keyof Shape061_4<T>]-?: Shape061_4<T>[K] };

export type Paths061_4<T> = T extends object
  ? { [K in keyof T & string]: K | `${K}.${Paths061_4<T[K]> & string}` }[keyof T & string]
  : never;

export function build061_4<T extends { id: string }>(items: readonly T[]) {
  return items
    .map((item, index) => ({ ...item, index, key: `${item.id}:${index}` }))
    .filter((item) => item.index % 2 === 0)
    .reduce<Record<string, (typeof items)[number] & { index: number }>>((acc, item) => {
      acc[item.key] = item;
      return acc;
    }, {});
}

export function compose061_4<A, B, C, D>(
  f: (a: A) => B,
  g: (b: B) => C,
  h: (c: C) => D
): (a: A) => D {
  return (a) => h(g(f(a)));
}

export const wired061_4 = compose061_4(
  (x: number) => ({ n: x }),
  (x) => ({ ...x, s: String(x.n) }),
  (x) => ({ ...x, ok: x.s.length > 0 })
);

export class Store061_4<T extends { id: string }> {
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

  snapshot(): Mapped061_4<T>[] {
    return [] as never;
  }
}

export const label061_4 = 'lib-04/module-061/block-4';

export interface Shape061_5<T> {
  id: string;
  value: T;
  meta: { tags: string[]; score: number; nested: { a: T; b: readonly T[] } };
}

export type Mapped061_5<T> = { readonly [K in keyof Shape061_5<T>]-?: Shape061_5<T>[K] };

export type Paths061_5<T> = T extends object
  ? { [K in keyof T & string]: K | `${K}.${Paths061_5<T[K]> & string}` }[keyof T & string]
  : never;

export function build061_5<T extends { id: string }>(items: readonly T[]) {
  return items
    .map((item, index) => ({ ...item, index, key: `${item.id}:${index}` }))
    .filter((item) => item.index % 2 === 0)
    .reduce<Record<string, (typeof items)[number] & { index: number }>>((acc, item) => {
      acc[item.key] = item;
      return acc;
    }, {});
}

export function compose061_5<A, B, C, D>(
  f: (a: A) => B,
  g: (b: B) => C,
  h: (c: C) => D
): (a: A) => D {
  return (a) => h(g(f(a)));
}

export const wired061_5 = compose061_5(
  (x: number) => ({ n: x }),
  (x) => ({ ...x, s: String(x.n) }),
  (x) => ({ ...x, ok: x.s.length > 0 })
);

export class Store061_5<T extends { id: string }> {
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

  snapshot(): Mapped061_5<T>[] {
    return [] as never;
  }
}

export const label061_5 = 'lib-04/module-061/block-5';

export interface Shape061_6<T> {
  id: string;
  value: T;
  meta: { tags: string[]; score: number; nested: { a: T; b: readonly T[] } };
}

export type Mapped061_6<T> = { readonly [K in keyof Shape061_6<T>]-?: Shape061_6<T>[K] };

export type Paths061_6<T> = T extends object
  ? { [K in keyof T & string]: K | `${K}.${Paths061_6<T[K]> & string}` }[keyof T & string]
  : never;

export function build061_6<T extends { id: string }>(items: readonly T[]) {
  return items
    .map((item, index) => ({ ...item, index, key: `${item.id}:${index}` }))
    .filter((item) => item.index % 2 === 0)
    .reduce<Record<string, (typeof items)[number] & { index: number }>>((acc, item) => {
      acc[item.key] = item;
      return acc;
    }, {});
}

export function compose061_6<A, B, C, D>(
  f: (a: A) => B,
  g: (b: B) => C,
  h: (c: C) => D
): (a: A) => D {
  return (a) => h(g(f(a)));
}

export const wired061_6 = compose061_6(
  (x: number) => ({ n: x }),
  (x) => ({ ...x, s: String(x.n) }),
  (x) => ({ ...x, ok: x.s.length > 0 })
);

export class Store061_6<T extends { id: string }> {
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

  snapshot(): Mapped061_6<T>[] {
    return [] as never;
  }
}

export const label061_6 = 'lib-04/module-061/block-6';

export interface Shape061_7<T> {
  id: string;
  value: T;
  meta: { tags: string[]; score: number; nested: { a: T; b: readonly T[] } };
}

export type Mapped061_7<T> = { readonly [K in keyof Shape061_7<T>]-?: Shape061_7<T>[K] };

export type Paths061_7<T> = T extends object
  ? { [K in keyof T & string]: K | `${K}.${Paths061_7<T[K]> & string}` }[keyof T & string]
  : never;

export function build061_7<T extends { id: string }>(items: readonly T[]) {
  return items
    .map((item, index) => ({ ...item, index, key: `${item.id}:${index}` }))
    .filter((item) => item.index % 2 === 0)
    .reduce<Record<string, (typeof items)[number] & { index: number }>>((acc, item) => {
      acc[item.key] = item;
      return acc;
    }, {});
}

export function compose061_7<A, B, C, D>(
  f: (a: A) => B,
  g: (b: B) => C,
  h: (c: C) => D
): (a: A) => D {
  return (a) => h(g(f(a)));
}

export const wired061_7 = compose061_7(
  (x: number) => ({ n: x }),
  (x) => ({ ...x, s: String(x.n) }),
  (x) => ({ ...x, ok: x.s.length > 0 })
);

export class Store061_7<T extends { id: string }> {
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

  snapshot(): Mapped061_7<T>[] {
    return [] as never;
  }
}

export const label061_7 = 'lib-04/module-061/block-7';

export interface Shape061_8<T> {
  id: string;
  value: T;
  meta: { tags: string[]; score: number; nested: { a: T; b: readonly T[] } };
}

export type Mapped061_8<T> = { readonly [K in keyof Shape061_8<T>]-?: Shape061_8<T>[K] };

export type Paths061_8<T> = T extends object
  ? { [K in keyof T & string]: K | `${K}.${Paths061_8<T[K]> & string}` }[keyof T & string]
  : never;

export function build061_8<T extends { id: string }>(items: readonly T[]) {
  return items
    .map((item, index) => ({ ...item, index, key: `${item.id}:${index}` }))
    .filter((item) => item.index % 2 === 0)
    .reduce<Record<string, (typeof items)[number] & { index: number }>>((acc, item) => {
      acc[item.key] = item;
      return acc;
    }, {});
}

export function compose061_8<A, B, C, D>(
  f: (a: A) => B,
  g: (b: B) => C,
  h: (c: C) => D
): (a: A) => D {
  return (a) => h(g(f(a)));
}

export const wired061_8 = compose061_8(
  (x: number) => ({ n: x }),
  (x) => ({ ...x, s: String(x.n) }),
  (x) => ({ ...x, ok: x.s.length > 0 })
);

export class Store061_8<T extends { id: string }> {
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

  snapshot(): Mapped061_8<T>[] {
    return [] as never;
  }
}

export const label061_8 = 'lib-04/module-061/block-8';

export interface Shape061_9<T> {
  id: string;
  value: T;
  meta: { tags: string[]; score: number; nested: { a: T; b: readonly T[] } };
}

export type Mapped061_9<T> = { readonly [K in keyof Shape061_9<T>]-?: Shape061_9<T>[K] };

export type Paths061_9<T> = T extends object
  ? { [K in keyof T & string]: K | `${K}.${Paths061_9<T[K]> & string}` }[keyof T & string]
  : never;

export function build061_9<T extends { id: string }>(items: readonly T[]) {
  return items
    .map((item, index) => ({ ...item, index, key: `${item.id}:${index}` }))
    .filter((item) => item.index % 2 === 0)
    .reduce<Record<string, (typeof items)[number] & { index: number }>>((acc, item) => {
      acc[item.key] = item;
      return acc;
    }, {});
}

export function compose061_9<A, B, C, D>(
  f: (a: A) => B,
  g: (b: B) => C,
  h: (c: C) => D
): (a: A) => D {
  return (a) => h(g(f(a)));
}

export const wired061_9 = compose061_9(
  (x: number) => ({ n: x }),
  (x) => ({ ...x, s: String(x.n) }),
  (x) => ({ ...x, ok: x.s.length > 0 })
);

export class Store061_9<T extends { id: string }> {
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

  snapshot(): Mapped061_9<T>[] {
    return [] as never;
  }
}

export const label061_9 = 'lib-04/module-061/block-9';

export interface Shape061_10<T> {
  id: string;
  value: T;
  meta: { tags: string[]; score: number; nested: { a: T; b: readonly T[] } };
}

export type Mapped061_10<T> = { readonly [K in keyof Shape061_10<T>]-?: Shape061_10<T>[K] };

export type Paths061_10<T> = T extends object
  ? { [K in keyof T & string]: K | `${K}.${Paths061_10<T[K]> & string}` }[keyof T & string]
  : never;

export function build061_10<T extends { id: string }>(items: readonly T[]) {
  return items
    .map((item, index) => ({ ...item, index, key: `${item.id}:${index}` }))
    .filter((item) => item.index % 2 === 0)
    .reduce<Record<string, (typeof items)[number] & { index: number }>>((acc, item) => {
      acc[item.key] = item;
      return acc;
    }, {});
}

export function compose061_10<A, B, C, D>(
  f: (a: A) => B,
  g: (b: B) => C,
  h: (c: C) => D
): (a: A) => D {
  return (a) => h(g(f(a)));
}

export const wired061_10 = compose061_10(
  (x: number) => ({ n: x }),
  (x) => ({ ...x, s: String(x.n) }),
  (x) => ({ ...x, ok: x.s.length > 0 })
);

export class Store061_10<T extends { id: string }> {
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

  snapshot(): Mapped061_10<T>[] {
    return [] as never;
  }
}

export const label061_10 = 'lib-04/module-061/block-10';
