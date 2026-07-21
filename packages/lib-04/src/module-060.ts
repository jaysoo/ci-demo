// Generated fixture source - exists to give tsc real work to do in CI demos.

export interface Shape060_1<T> {
  id: string;
  value: T;
  meta: { tags: string[]; score: number; nested: { a: T; b: readonly T[] } };
}

export type Mapped060_1<T> = { readonly [K in keyof Shape060_1<T>]-?: Shape060_1<T>[K] };

export type Paths060_1<T> = T extends object
  ? { [K in keyof T & string]: K | `${K}.${Paths060_1<T[K]> & string}` }[keyof T & string]
  : never;

export function build060_1<T extends { id: string }>(items: readonly T[]) {
  return items
    .map((item, index) => ({ ...item, index, key: `${item.id}:${index}` }))
    .filter((item) => item.index % 2 === 0)
    .reduce<Record<string, (typeof items)[number] & { index: number }>>((acc, item) => {
      acc[item.key] = item;
      return acc;
    }, {});
}

export function compose060_1<A, B, C, D>(
  f: (a: A) => B,
  g: (b: B) => C,
  h: (c: C) => D
): (a: A) => D {
  return (a) => h(g(f(a)));
}

export const wired060_1 = compose060_1(
  (x: number) => ({ n: x }),
  (x) => ({ ...x, s: String(x.n) }),
  (x) => ({ ...x, ok: x.s.length > 0 })
);

export class Store060_1<T extends { id: string }> {
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

  snapshot(): Mapped060_1<T>[] {
    return [] as never;
  }
}

export const label060_1 = 'lib-04/module-060/block-1';

export interface Shape060_2<T> {
  id: string;
  value: T;
  meta: { tags: string[]; score: number; nested: { a: T; b: readonly T[] } };
}

export type Mapped060_2<T> = { readonly [K in keyof Shape060_2<T>]-?: Shape060_2<T>[K] };

export type Paths060_2<T> = T extends object
  ? { [K in keyof T & string]: K | `${K}.${Paths060_2<T[K]> & string}` }[keyof T & string]
  : never;

export function build060_2<T extends { id: string }>(items: readonly T[]) {
  return items
    .map((item, index) => ({ ...item, index, key: `${item.id}:${index}` }))
    .filter((item) => item.index % 2 === 0)
    .reduce<Record<string, (typeof items)[number] & { index: number }>>((acc, item) => {
      acc[item.key] = item;
      return acc;
    }, {});
}

export function compose060_2<A, B, C, D>(
  f: (a: A) => B,
  g: (b: B) => C,
  h: (c: C) => D
): (a: A) => D {
  return (a) => h(g(f(a)));
}

export const wired060_2 = compose060_2(
  (x: number) => ({ n: x }),
  (x) => ({ ...x, s: String(x.n) }),
  (x) => ({ ...x, ok: x.s.length > 0 })
);

export class Store060_2<T extends { id: string }> {
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

  snapshot(): Mapped060_2<T>[] {
    return [] as never;
  }
}

export const label060_2 = 'lib-04/module-060/block-2';

export interface Shape060_3<T> {
  id: string;
  value: T;
  meta: { tags: string[]; score: number; nested: { a: T; b: readonly T[] } };
}

export type Mapped060_3<T> = { readonly [K in keyof Shape060_3<T>]-?: Shape060_3<T>[K] };

export type Paths060_3<T> = T extends object
  ? { [K in keyof T & string]: K | `${K}.${Paths060_3<T[K]> & string}` }[keyof T & string]
  : never;

export function build060_3<T extends { id: string }>(items: readonly T[]) {
  return items
    .map((item, index) => ({ ...item, index, key: `${item.id}:${index}` }))
    .filter((item) => item.index % 2 === 0)
    .reduce<Record<string, (typeof items)[number] & { index: number }>>((acc, item) => {
      acc[item.key] = item;
      return acc;
    }, {});
}

export function compose060_3<A, B, C, D>(
  f: (a: A) => B,
  g: (b: B) => C,
  h: (c: C) => D
): (a: A) => D {
  return (a) => h(g(f(a)));
}

export const wired060_3 = compose060_3(
  (x: number) => ({ n: x }),
  (x) => ({ ...x, s: String(x.n) }),
  (x) => ({ ...x, ok: x.s.length > 0 })
);

export class Store060_3<T extends { id: string }> {
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

  snapshot(): Mapped060_3<T>[] {
    return [] as never;
  }
}

export const label060_3 = 'lib-04/module-060/block-3';

export interface Shape060_4<T> {
  id: string;
  value: T;
  meta: { tags: string[]; score: number; nested: { a: T; b: readonly T[] } };
}

export type Mapped060_4<T> = { readonly [K in keyof Shape060_4<T>]-?: Shape060_4<T>[K] };

export type Paths060_4<T> = T extends object
  ? { [K in keyof T & string]: K | `${K}.${Paths060_4<T[K]> & string}` }[keyof T & string]
  : never;

export function build060_4<T extends { id: string }>(items: readonly T[]) {
  return items
    .map((item, index) => ({ ...item, index, key: `${item.id}:${index}` }))
    .filter((item) => item.index % 2 === 0)
    .reduce<Record<string, (typeof items)[number] & { index: number }>>((acc, item) => {
      acc[item.key] = item;
      return acc;
    }, {});
}

export function compose060_4<A, B, C, D>(
  f: (a: A) => B,
  g: (b: B) => C,
  h: (c: C) => D
): (a: A) => D {
  return (a) => h(g(f(a)));
}

export const wired060_4 = compose060_4(
  (x: number) => ({ n: x }),
  (x) => ({ ...x, s: String(x.n) }),
  (x) => ({ ...x, ok: x.s.length > 0 })
);

export class Store060_4<T extends { id: string }> {
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

  snapshot(): Mapped060_4<T>[] {
    return [] as never;
  }
}

export const label060_4 = 'lib-04/module-060/block-4';

export interface Shape060_5<T> {
  id: string;
  value: T;
  meta: { tags: string[]; score: number; nested: { a: T; b: readonly T[] } };
}

export type Mapped060_5<T> = { readonly [K in keyof Shape060_5<T>]-?: Shape060_5<T>[K] };

export type Paths060_5<T> = T extends object
  ? { [K in keyof T & string]: K | `${K}.${Paths060_5<T[K]> & string}` }[keyof T & string]
  : never;

export function build060_5<T extends { id: string }>(items: readonly T[]) {
  return items
    .map((item, index) => ({ ...item, index, key: `${item.id}:${index}` }))
    .filter((item) => item.index % 2 === 0)
    .reduce<Record<string, (typeof items)[number] & { index: number }>>((acc, item) => {
      acc[item.key] = item;
      return acc;
    }, {});
}

export function compose060_5<A, B, C, D>(
  f: (a: A) => B,
  g: (b: B) => C,
  h: (c: C) => D
): (a: A) => D {
  return (a) => h(g(f(a)));
}

export const wired060_5 = compose060_5(
  (x: number) => ({ n: x }),
  (x) => ({ ...x, s: String(x.n) }),
  (x) => ({ ...x, ok: x.s.length > 0 })
);

export class Store060_5<T extends { id: string }> {
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

  snapshot(): Mapped060_5<T>[] {
    return [] as never;
  }
}

export const label060_5 = 'lib-04/module-060/block-5';

export interface Shape060_6<T> {
  id: string;
  value: T;
  meta: { tags: string[]; score: number; nested: { a: T; b: readonly T[] } };
}

export type Mapped060_6<T> = { readonly [K in keyof Shape060_6<T>]-?: Shape060_6<T>[K] };

export type Paths060_6<T> = T extends object
  ? { [K in keyof T & string]: K | `${K}.${Paths060_6<T[K]> & string}` }[keyof T & string]
  : never;

export function build060_6<T extends { id: string }>(items: readonly T[]) {
  return items
    .map((item, index) => ({ ...item, index, key: `${item.id}:${index}` }))
    .filter((item) => item.index % 2 === 0)
    .reduce<Record<string, (typeof items)[number] & { index: number }>>((acc, item) => {
      acc[item.key] = item;
      return acc;
    }, {});
}

export function compose060_6<A, B, C, D>(
  f: (a: A) => B,
  g: (b: B) => C,
  h: (c: C) => D
): (a: A) => D {
  return (a) => h(g(f(a)));
}

export const wired060_6 = compose060_6(
  (x: number) => ({ n: x }),
  (x) => ({ ...x, s: String(x.n) }),
  (x) => ({ ...x, ok: x.s.length > 0 })
);

export class Store060_6<T extends { id: string }> {
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

  snapshot(): Mapped060_6<T>[] {
    return [] as never;
  }
}

export const label060_6 = 'lib-04/module-060/block-6';

export interface Shape060_7<T> {
  id: string;
  value: T;
  meta: { tags: string[]; score: number; nested: { a: T; b: readonly T[] } };
}

export type Mapped060_7<T> = { readonly [K in keyof Shape060_7<T>]-?: Shape060_7<T>[K] };

export type Paths060_7<T> = T extends object
  ? { [K in keyof T & string]: K | `${K}.${Paths060_7<T[K]> & string}` }[keyof T & string]
  : never;

export function build060_7<T extends { id: string }>(items: readonly T[]) {
  return items
    .map((item, index) => ({ ...item, index, key: `${item.id}:${index}` }))
    .filter((item) => item.index % 2 === 0)
    .reduce<Record<string, (typeof items)[number] & { index: number }>>((acc, item) => {
      acc[item.key] = item;
      return acc;
    }, {});
}

export function compose060_7<A, B, C, D>(
  f: (a: A) => B,
  g: (b: B) => C,
  h: (c: C) => D
): (a: A) => D {
  return (a) => h(g(f(a)));
}

export const wired060_7 = compose060_7(
  (x: number) => ({ n: x }),
  (x) => ({ ...x, s: String(x.n) }),
  (x) => ({ ...x, ok: x.s.length > 0 })
);

export class Store060_7<T extends { id: string }> {
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

  snapshot(): Mapped060_7<T>[] {
    return [] as never;
  }
}

export const label060_7 = 'lib-04/module-060/block-7';

export interface Shape060_8<T> {
  id: string;
  value: T;
  meta: { tags: string[]; score: number; nested: { a: T; b: readonly T[] } };
}

export type Mapped060_8<T> = { readonly [K in keyof Shape060_8<T>]-?: Shape060_8<T>[K] };

export type Paths060_8<T> = T extends object
  ? { [K in keyof T & string]: K | `${K}.${Paths060_8<T[K]> & string}` }[keyof T & string]
  : never;

export function build060_8<T extends { id: string }>(items: readonly T[]) {
  return items
    .map((item, index) => ({ ...item, index, key: `${item.id}:${index}` }))
    .filter((item) => item.index % 2 === 0)
    .reduce<Record<string, (typeof items)[number] & { index: number }>>((acc, item) => {
      acc[item.key] = item;
      return acc;
    }, {});
}

export function compose060_8<A, B, C, D>(
  f: (a: A) => B,
  g: (b: B) => C,
  h: (c: C) => D
): (a: A) => D {
  return (a) => h(g(f(a)));
}

export const wired060_8 = compose060_8(
  (x: number) => ({ n: x }),
  (x) => ({ ...x, s: String(x.n) }),
  (x) => ({ ...x, ok: x.s.length > 0 })
);

export class Store060_8<T extends { id: string }> {
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

  snapshot(): Mapped060_8<T>[] {
    return [] as never;
  }
}

export const label060_8 = 'lib-04/module-060/block-8';

export interface Shape060_9<T> {
  id: string;
  value: T;
  meta: { tags: string[]; score: number; nested: { a: T; b: readonly T[] } };
}

export type Mapped060_9<T> = { readonly [K in keyof Shape060_9<T>]-?: Shape060_9<T>[K] };

export type Paths060_9<T> = T extends object
  ? { [K in keyof T & string]: K | `${K}.${Paths060_9<T[K]> & string}` }[keyof T & string]
  : never;

export function build060_9<T extends { id: string }>(items: readonly T[]) {
  return items
    .map((item, index) => ({ ...item, index, key: `${item.id}:${index}` }))
    .filter((item) => item.index % 2 === 0)
    .reduce<Record<string, (typeof items)[number] & { index: number }>>((acc, item) => {
      acc[item.key] = item;
      return acc;
    }, {});
}

export function compose060_9<A, B, C, D>(
  f: (a: A) => B,
  g: (b: B) => C,
  h: (c: C) => D
): (a: A) => D {
  return (a) => h(g(f(a)));
}

export const wired060_9 = compose060_9(
  (x: number) => ({ n: x }),
  (x) => ({ ...x, s: String(x.n) }),
  (x) => ({ ...x, ok: x.s.length > 0 })
);

export class Store060_9<T extends { id: string }> {
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

  snapshot(): Mapped060_9<T>[] {
    return [] as never;
  }
}

export const label060_9 = 'lib-04/module-060/block-9';

export interface Shape060_10<T> {
  id: string;
  value: T;
  meta: { tags: string[]; score: number; nested: { a: T; b: readonly T[] } };
}

export type Mapped060_10<T> = { readonly [K in keyof Shape060_10<T>]-?: Shape060_10<T>[K] };

export type Paths060_10<T> = T extends object
  ? { [K in keyof T & string]: K | `${K}.${Paths060_10<T[K]> & string}` }[keyof T & string]
  : never;

export function build060_10<T extends { id: string }>(items: readonly T[]) {
  return items
    .map((item, index) => ({ ...item, index, key: `${item.id}:${index}` }))
    .filter((item) => item.index % 2 === 0)
    .reduce<Record<string, (typeof items)[number] & { index: number }>>((acc, item) => {
      acc[item.key] = item;
      return acc;
    }, {});
}

export function compose060_10<A, B, C, D>(
  f: (a: A) => B,
  g: (b: B) => C,
  h: (c: C) => D
): (a: A) => D {
  return (a) => h(g(f(a)));
}

export const wired060_10 = compose060_10(
  (x: number) => ({ n: x }),
  (x) => ({ ...x, s: String(x.n) }),
  (x) => ({ ...x, ok: x.s.length > 0 })
);

export class Store060_10<T extends { id: string }> {
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

  snapshot(): Mapped060_10<T>[] {
    return [] as never;
  }
}

export const label060_10 = 'lib-04/module-060/block-10';
