// Generated fixture source - exists to give tsc real work to do in CI demos.

export interface Shape059_1<T> {
  id: string;
  value: T;
  meta: { tags: string[]; score: number; nested: { a: T; b: readonly T[] } };
}

export type Mapped059_1<T> = { readonly [K in keyof Shape059_1<T>]-?: Shape059_1<T>[K] };

export type Paths059_1<T> = T extends object
  ? { [K in keyof T & string]: K | `${K}.${Paths059_1<T[K]> & string}` }[keyof T & string]
  : never;

export function build059_1<T extends { id: string }>(items: readonly T[]) {
  return items
    .map((item, index) => ({ ...item, index, key: `${item.id}:${index}` }))
    .filter((item) => item.index % 2 === 0)
    .reduce<Record<string, (typeof items)[number] & { index: number }>>((acc, item) => {
      acc[item.key] = item;
      return acc;
    }, {});
}

export function compose059_1<A, B, C, D>(
  f: (a: A) => B,
  g: (b: B) => C,
  h: (c: C) => D
): (a: A) => D {
  return (a) => h(g(f(a)));
}

export const wired059_1 = compose059_1(
  (x: number) => ({ n: x }),
  (x) => ({ ...x, s: String(x.n) }),
  (x) => ({ ...x, ok: x.s.length > 0 })
);

export class Store059_1<T extends { id: string }> {
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

  snapshot(): Mapped059_1<T>[] {
    return [] as never;
  }
}

export const label059_1 = 'lib-04/module-059/block-1';

export interface Shape059_2<T> {
  id: string;
  value: T;
  meta: { tags: string[]; score: number; nested: { a: T; b: readonly T[] } };
}

export type Mapped059_2<T> = { readonly [K in keyof Shape059_2<T>]-?: Shape059_2<T>[K] };

export type Paths059_2<T> = T extends object
  ? { [K in keyof T & string]: K | `${K}.${Paths059_2<T[K]> & string}` }[keyof T & string]
  : never;

export function build059_2<T extends { id: string }>(items: readonly T[]) {
  return items
    .map((item, index) => ({ ...item, index, key: `${item.id}:${index}` }))
    .filter((item) => item.index % 2 === 0)
    .reduce<Record<string, (typeof items)[number] & { index: number }>>((acc, item) => {
      acc[item.key] = item;
      return acc;
    }, {});
}

export function compose059_2<A, B, C, D>(
  f: (a: A) => B,
  g: (b: B) => C,
  h: (c: C) => D
): (a: A) => D {
  return (a) => h(g(f(a)));
}

export const wired059_2 = compose059_2(
  (x: number) => ({ n: x }),
  (x) => ({ ...x, s: String(x.n) }),
  (x) => ({ ...x, ok: x.s.length > 0 })
);

export class Store059_2<T extends { id: string }> {
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

  snapshot(): Mapped059_2<T>[] {
    return [] as never;
  }
}

export const label059_2 = 'lib-04/module-059/block-2';

export interface Shape059_3<T> {
  id: string;
  value: T;
  meta: { tags: string[]; score: number; nested: { a: T; b: readonly T[] } };
}

export type Mapped059_3<T> = { readonly [K in keyof Shape059_3<T>]-?: Shape059_3<T>[K] };

export type Paths059_3<T> = T extends object
  ? { [K in keyof T & string]: K | `${K}.${Paths059_3<T[K]> & string}` }[keyof T & string]
  : never;

export function build059_3<T extends { id: string }>(items: readonly T[]) {
  return items
    .map((item, index) => ({ ...item, index, key: `${item.id}:${index}` }))
    .filter((item) => item.index % 2 === 0)
    .reduce<Record<string, (typeof items)[number] & { index: number }>>((acc, item) => {
      acc[item.key] = item;
      return acc;
    }, {});
}

export function compose059_3<A, B, C, D>(
  f: (a: A) => B,
  g: (b: B) => C,
  h: (c: C) => D
): (a: A) => D {
  return (a) => h(g(f(a)));
}

export const wired059_3 = compose059_3(
  (x: number) => ({ n: x }),
  (x) => ({ ...x, s: String(x.n) }),
  (x) => ({ ...x, ok: x.s.length > 0 })
);

export class Store059_3<T extends { id: string }> {
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

  snapshot(): Mapped059_3<T>[] {
    return [] as never;
  }
}

export const label059_3 = 'lib-04/module-059/block-3';

export interface Shape059_4<T> {
  id: string;
  value: T;
  meta: { tags: string[]; score: number; nested: { a: T; b: readonly T[] } };
}

export type Mapped059_4<T> = { readonly [K in keyof Shape059_4<T>]-?: Shape059_4<T>[K] };

export type Paths059_4<T> = T extends object
  ? { [K in keyof T & string]: K | `${K}.${Paths059_4<T[K]> & string}` }[keyof T & string]
  : never;

export function build059_4<T extends { id: string }>(items: readonly T[]) {
  return items
    .map((item, index) => ({ ...item, index, key: `${item.id}:${index}` }))
    .filter((item) => item.index % 2 === 0)
    .reduce<Record<string, (typeof items)[number] & { index: number }>>((acc, item) => {
      acc[item.key] = item;
      return acc;
    }, {});
}

export function compose059_4<A, B, C, D>(
  f: (a: A) => B,
  g: (b: B) => C,
  h: (c: C) => D
): (a: A) => D {
  return (a) => h(g(f(a)));
}

export const wired059_4 = compose059_4(
  (x: number) => ({ n: x }),
  (x) => ({ ...x, s: String(x.n) }),
  (x) => ({ ...x, ok: x.s.length > 0 })
);

export class Store059_4<T extends { id: string }> {
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

  snapshot(): Mapped059_4<T>[] {
    return [] as never;
  }
}

export const label059_4 = 'lib-04/module-059/block-4';

export interface Shape059_5<T> {
  id: string;
  value: T;
  meta: { tags: string[]; score: number; nested: { a: T; b: readonly T[] } };
}

export type Mapped059_5<T> = { readonly [K in keyof Shape059_5<T>]-?: Shape059_5<T>[K] };

export type Paths059_5<T> = T extends object
  ? { [K in keyof T & string]: K | `${K}.${Paths059_5<T[K]> & string}` }[keyof T & string]
  : never;

export function build059_5<T extends { id: string }>(items: readonly T[]) {
  return items
    .map((item, index) => ({ ...item, index, key: `${item.id}:${index}` }))
    .filter((item) => item.index % 2 === 0)
    .reduce<Record<string, (typeof items)[number] & { index: number }>>((acc, item) => {
      acc[item.key] = item;
      return acc;
    }, {});
}

export function compose059_5<A, B, C, D>(
  f: (a: A) => B,
  g: (b: B) => C,
  h: (c: C) => D
): (a: A) => D {
  return (a) => h(g(f(a)));
}

export const wired059_5 = compose059_5(
  (x: number) => ({ n: x }),
  (x) => ({ ...x, s: String(x.n) }),
  (x) => ({ ...x, ok: x.s.length > 0 })
);

export class Store059_5<T extends { id: string }> {
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

  snapshot(): Mapped059_5<T>[] {
    return [] as never;
  }
}

export const label059_5 = 'lib-04/module-059/block-5';

export interface Shape059_6<T> {
  id: string;
  value: T;
  meta: { tags: string[]; score: number; nested: { a: T; b: readonly T[] } };
}

export type Mapped059_6<T> = { readonly [K in keyof Shape059_6<T>]-?: Shape059_6<T>[K] };

export type Paths059_6<T> = T extends object
  ? { [K in keyof T & string]: K | `${K}.${Paths059_6<T[K]> & string}` }[keyof T & string]
  : never;

export function build059_6<T extends { id: string }>(items: readonly T[]) {
  return items
    .map((item, index) => ({ ...item, index, key: `${item.id}:${index}` }))
    .filter((item) => item.index % 2 === 0)
    .reduce<Record<string, (typeof items)[number] & { index: number }>>((acc, item) => {
      acc[item.key] = item;
      return acc;
    }, {});
}

export function compose059_6<A, B, C, D>(
  f: (a: A) => B,
  g: (b: B) => C,
  h: (c: C) => D
): (a: A) => D {
  return (a) => h(g(f(a)));
}

export const wired059_6 = compose059_6(
  (x: number) => ({ n: x }),
  (x) => ({ ...x, s: String(x.n) }),
  (x) => ({ ...x, ok: x.s.length > 0 })
);

export class Store059_6<T extends { id: string }> {
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

  snapshot(): Mapped059_6<T>[] {
    return [] as never;
  }
}

export const label059_6 = 'lib-04/module-059/block-6';

export interface Shape059_7<T> {
  id: string;
  value: T;
  meta: { tags: string[]; score: number; nested: { a: T; b: readonly T[] } };
}

export type Mapped059_7<T> = { readonly [K in keyof Shape059_7<T>]-?: Shape059_7<T>[K] };

export type Paths059_7<T> = T extends object
  ? { [K in keyof T & string]: K | `${K}.${Paths059_7<T[K]> & string}` }[keyof T & string]
  : never;

export function build059_7<T extends { id: string }>(items: readonly T[]) {
  return items
    .map((item, index) => ({ ...item, index, key: `${item.id}:${index}` }))
    .filter((item) => item.index % 2 === 0)
    .reduce<Record<string, (typeof items)[number] & { index: number }>>((acc, item) => {
      acc[item.key] = item;
      return acc;
    }, {});
}

export function compose059_7<A, B, C, D>(
  f: (a: A) => B,
  g: (b: B) => C,
  h: (c: C) => D
): (a: A) => D {
  return (a) => h(g(f(a)));
}

export const wired059_7 = compose059_7(
  (x: number) => ({ n: x }),
  (x) => ({ ...x, s: String(x.n) }),
  (x) => ({ ...x, ok: x.s.length > 0 })
);

export class Store059_7<T extends { id: string }> {
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

  snapshot(): Mapped059_7<T>[] {
    return [] as never;
  }
}

export const label059_7 = 'lib-04/module-059/block-7';

export interface Shape059_8<T> {
  id: string;
  value: T;
  meta: { tags: string[]; score: number; nested: { a: T; b: readonly T[] } };
}

export type Mapped059_8<T> = { readonly [K in keyof Shape059_8<T>]-?: Shape059_8<T>[K] };

export type Paths059_8<T> = T extends object
  ? { [K in keyof T & string]: K | `${K}.${Paths059_8<T[K]> & string}` }[keyof T & string]
  : never;

export function build059_8<T extends { id: string }>(items: readonly T[]) {
  return items
    .map((item, index) => ({ ...item, index, key: `${item.id}:${index}` }))
    .filter((item) => item.index % 2 === 0)
    .reduce<Record<string, (typeof items)[number] & { index: number }>>((acc, item) => {
      acc[item.key] = item;
      return acc;
    }, {});
}

export function compose059_8<A, B, C, D>(
  f: (a: A) => B,
  g: (b: B) => C,
  h: (c: C) => D
): (a: A) => D {
  return (a) => h(g(f(a)));
}

export const wired059_8 = compose059_8(
  (x: number) => ({ n: x }),
  (x) => ({ ...x, s: String(x.n) }),
  (x) => ({ ...x, ok: x.s.length > 0 })
);

export class Store059_8<T extends { id: string }> {
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

  snapshot(): Mapped059_8<T>[] {
    return [] as never;
  }
}

export const label059_8 = 'lib-04/module-059/block-8';

export interface Shape059_9<T> {
  id: string;
  value: T;
  meta: { tags: string[]; score: number; nested: { a: T; b: readonly T[] } };
}

export type Mapped059_9<T> = { readonly [K in keyof Shape059_9<T>]-?: Shape059_9<T>[K] };

export type Paths059_9<T> = T extends object
  ? { [K in keyof T & string]: K | `${K}.${Paths059_9<T[K]> & string}` }[keyof T & string]
  : never;

export function build059_9<T extends { id: string }>(items: readonly T[]) {
  return items
    .map((item, index) => ({ ...item, index, key: `${item.id}:${index}` }))
    .filter((item) => item.index % 2 === 0)
    .reduce<Record<string, (typeof items)[number] & { index: number }>>((acc, item) => {
      acc[item.key] = item;
      return acc;
    }, {});
}

export function compose059_9<A, B, C, D>(
  f: (a: A) => B,
  g: (b: B) => C,
  h: (c: C) => D
): (a: A) => D {
  return (a) => h(g(f(a)));
}

export const wired059_9 = compose059_9(
  (x: number) => ({ n: x }),
  (x) => ({ ...x, s: String(x.n) }),
  (x) => ({ ...x, ok: x.s.length > 0 })
);

export class Store059_9<T extends { id: string }> {
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

  snapshot(): Mapped059_9<T>[] {
    return [] as never;
  }
}

export const label059_9 = 'lib-04/module-059/block-9';

export interface Shape059_10<T> {
  id: string;
  value: T;
  meta: { tags: string[]; score: number; nested: { a: T; b: readonly T[] } };
}

export type Mapped059_10<T> = { readonly [K in keyof Shape059_10<T>]-?: Shape059_10<T>[K] };

export type Paths059_10<T> = T extends object
  ? { [K in keyof T & string]: K | `${K}.${Paths059_10<T[K]> & string}` }[keyof T & string]
  : never;

export function build059_10<T extends { id: string }>(items: readonly T[]) {
  return items
    .map((item, index) => ({ ...item, index, key: `${item.id}:${index}` }))
    .filter((item) => item.index % 2 === 0)
    .reduce<Record<string, (typeof items)[number] & { index: number }>>((acc, item) => {
      acc[item.key] = item;
      return acc;
    }, {});
}

export function compose059_10<A, B, C, D>(
  f: (a: A) => B,
  g: (b: B) => C,
  h: (c: C) => D
): (a: A) => D {
  return (a) => h(g(f(a)));
}

export const wired059_10 = compose059_10(
  (x: number) => ({ n: x }),
  (x) => ({ ...x, s: String(x.n) }),
  (x) => ({ ...x, ok: x.s.length > 0 })
);

export class Store059_10<T extends { id: string }> {
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

  snapshot(): Mapped059_10<T>[] {
    return [] as never;
  }
}

export const label059_10 = 'lib-04/module-059/block-10';
