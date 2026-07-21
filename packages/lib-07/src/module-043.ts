// Generated fixture source - exists to give tsc real work to do in CI demos.

export interface Shape043_1<T> {
  id: string;
  value: T;
  meta: { tags: string[]; score: number; nested: { a: T; b: readonly T[] } };
}

export type Mapped043_1<T> = { readonly [K in keyof Shape043_1<T>]-?: Shape043_1<T>[K] };

export type Paths043_1<T> = T extends object
  ? { [K in keyof T & string]: K | `${K}.${Paths043_1<T[K]> & string}` }[keyof T & string]
  : never;

export function build043_1<T extends { id: string }>(items: readonly T[]) {
  return items
    .map((item, index) => ({ ...item, index, key: `${item.id}:${index}` }))
    .filter((item) => item.index % 2 === 0)
    .reduce<Record<string, (typeof items)[number] & { index: number }>>((acc, item) => {
      acc[item.key] = item;
      return acc;
    }, {});
}

export function compose043_1<A, B, C, D>(
  f: (a: A) => B,
  g: (b: B) => C,
  h: (c: C) => D
): (a: A) => D {
  return (a) => h(g(f(a)));
}

export const wired043_1 = compose043_1(
  (x: number) => ({ n: x }),
  (x) => ({ ...x, s: String(x.n) }),
  (x) => ({ ...x, ok: x.s.length > 0 })
);

export class Store043_1<T extends { id: string }> {
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

  snapshot(): Mapped043_1<T>[] {
    return [] as never;
  }
}

export const label043_1 = 'lib-07/module-043/block-1';

export interface Shape043_2<T> {
  id: string;
  value: T;
  meta: { tags: string[]; score: number; nested: { a: T; b: readonly T[] } };
}

export type Mapped043_2<T> = { readonly [K in keyof Shape043_2<T>]-?: Shape043_2<T>[K] };

export type Paths043_2<T> = T extends object
  ? { [K in keyof T & string]: K | `${K}.${Paths043_2<T[K]> & string}` }[keyof T & string]
  : never;

export function build043_2<T extends { id: string }>(items: readonly T[]) {
  return items
    .map((item, index) => ({ ...item, index, key: `${item.id}:${index}` }))
    .filter((item) => item.index % 2 === 0)
    .reduce<Record<string, (typeof items)[number] & { index: number }>>((acc, item) => {
      acc[item.key] = item;
      return acc;
    }, {});
}

export function compose043_2<A, B, C, D>(
  f: (a: A) => B,
  g: (b: B) => C,
  h: (c: C) => D
): (a: A) => D {
  return (a) => h(g(f(a)));
}

export const wired043_2 = compose043_2(
  (x: number) => ({ n: x }),
  (x) => ({ ...x, s: String(x.n) }),
  (x) => ({ ...x, ok: x.s.length > 0 })
);

export class Store043_2<T extends { id: string }> {
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

  snapshot(): Mapped043_2<T>[] {
    return [] as never;
  }
}

export const label043_2 = 'lib-07/module-043/block-2';

export interface Shape043_3<T> {
  id: string;
  value: T;
  meta: { tags: string[]; score: number; nested: { a: T; b: readonly T[] } };
}

export type Mapped043_3<T> = { readonly [K in keyof Shape043_3<T>]-?: Shape043_3<T>[K] };

export type Paths043_3<T> = T extends object
  ? { [K in keyof T & string]: K | `${K}.${Paths043_3<T[K]> & string}` }[keyof T & string]
  : never;

export function build043_3<T extends { id: string }>(items: readonly T[]) {
  return items
    .map((item, index) => ({ ...item, index, key: `${item.id}:${index}` }))
    .filter((item) => item.index % 2 === 0)
    .reduce<Record<string, (typeof items)[number] & { index: number }>>((acc, item) => {
      acc[item.key] = item;
      return acc;
    }, {});
}

export function compose043_3<A, B, C, D>(
  f: (a: A) => B,
  g: (b: B) => C,
  h: (c: C) => D
): (a: A) => D {
  return (a) => h(g(f(a)));
}

export const wired043_3 = compose043_3(
  (x: number) => ({ n: x }),
  (x) => ({ ...x, s: String(x.n) }),
  (x) => ({ ...x, ok: x.s.length > 0 })
);

export class Store043_3<T extends { id: string }> {
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

  snapshot(): Mapped043_3<T>[] {
    return [] as never;
  }
}

export const label043_3 = 'lib-07/module-043/block-3';

export interface Shape043_4<T> {
  id: string;
  value: T;
  meta: { tags: string[]; score: number; nested: { a: T; b: readonly T[] } };
}

export type Mapped043_4<T> = { readonly [K in keyof Shape043_4<T>]-?: Shape043_4<T>[K] };

export type Paths043_4<T> = T extends object
  ? { [K in keyof T & string]: K | `${K}.${Paths043_4<T[K]> & string}` }[keyof T & string]
  : never;

export function build043_4<T extends { id: string }>(items: readonly T[]) {
  return items
    .map((item, index) => ({ ...item, index, key: `${item.id}:${index}` }))
    .filter((item) => item.index % 2 === 0)
    .reduce<Record<string, (typeof items)[number] & { index: number }>>((acc, item) => {
      acc[item.key] = item;
      return acc;
    }, {});
}

export function compose043_4<A, B, C, D>(
  f: (a: A) => B,
  g: (b: B) => C,
  h: (c: C) => D
): (a: A) => D {
  return (a) => h(g(f(a)));
}

export const wired043_4 = compose043_4(
  (x: number) => ({ n: x }),
  (x) => ({ ...x, s: String(x.n) }),
  (x) => ({ ...x, ok: x.s.length > 0 })
);

export class Store043_4<T extends { id: string }> {
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

  snapshot(): Mapped043_4<T>[] {
    return [] as never;
  }
}

export const label043_4 = 'lib-07/module-043/block-4';

export interface Shape043_5<T> {
  id: string;
  value: T;
  meta: { tags: string[]; score: number; nested: { a: T; b: readonly T[] } };
}

export type Mapped043_5<T> = { readonly [K in keyof Shape043_5<T>]-?: Shape043_5<T>[K] };

export type Paths043_5<T> = T extends object
  ? { [K in keyof T & string]: K | `${K}.${Paths043_5<T[K]> & string}` }[keyof T & string]
  : never;

export function build043_5<T extends { id: string }>(items: readonly T[]) {
  return items
    .map((item, index) => ({ ...item, index, key: `${item.id}:${index}` }))
    .filter((item) => item.index % 2 === 0)
    .reduce<Record<string, (typeof items)[number] & { index: number }>>((acc, item) => {
      acc[item.key] = item;
      return acc;
    }, {});
}

export function compose043_5<A, B, C, D>(
  f: (a: A) => B,
  g: (b: B) => C,
  h: (c: C) => D
): (a: A) => D {
  return (a) => h(g(f(a)));
}

export const wired043_5 = compose043_5(
  (x: number) => ({ n: x }),
  (x) => ({ ...x, s: String(x.n) }),
  (x) => ({ ...x, ok: x.s.length > 0 })
);

export class Store043_5<T extends { id: string }> {
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

  snapshot(): Mapped043_5<T>[] {
    return [] as never;
  }
}

export const label043_5 = 'lib-07/module-043/block-5';

export interface Shape043_6<T> {
  id: string;
  value: T;
  meta: { tags: string[]; score: number; nested: { a: T; b: readonly T[] } };
}

export type Mapped043_6<T> = { readonly [K in keyof Shape043_6<T>]-?: Shape043_6<T>[K] };

export type Paths043_6<T> = T extends object
  ? { [K in keyof T & string]: K | `${K}.${Paths043_6<T[K]> & string}` }[keyof T & string]
  : never;

export function build043_6<T extends { id: string }>(items: readonly T[]) {
  return items
    .map((item, index) => ({ ...item, index, key: `${item.id}:${index}` }))
    .filter((item) => item.index % 2 === 0)
    .reduce<Record<string, (typeof items)[number] & { index: number }>>((acc, item) => {
      acc[item.key] = item;
      return acc;
    }, {});
}

export function compose043_6<A, B, C, D>(
  f: (a: A) => B,
  g: (b: B) => C,
  h: (c: C) => D
): (a: A) => D {
  return (a) => h(g(f(a)));
}

export const wired043_6 = compose043_6(
  (x: number) => ({ n: x }),
  (x) => ({ ...x, s: String(x.n) }),
  (x) => ({ ...x, ok: x.s.length > 0 })
);

export class Store043_6<T extends { id: string }> {
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

  snapshot(): Mapped043_6<T>[] {
    return [] as never;
  }
}

export const label043_6 = 'lib-07/module-043/block-6';

export interface Shape043_7<T> {
  id: string;
  value: T;
  meta: { tags: string[]; score: number; nested: { a: T; b: readonly T[] } };
}

export type Mapped043_7<T> = { readonly [K in keyof Shape043_7<T>]-?: Shape043_7<T>[K] };

export type Paths043_7<T> = T extends object
  ? { [K in keyof T & string]: K | `${K}.${Paths043_7<T[K]> & string}` }[keyof T & string]
  : never;

export function build043_7<T extends { id: string }>(items: readonly T[]) {
  return items
    .map((item, index) => ({ ...item, index, key: `${item.id}:${index}` }))
    .filter((item) => item.index % 2 === 0)
    .reduce<Record<string, (typeof items)[number] & { index: number }>>((acc, item) => {
      acc[item.key] = item;
      return acc;
    }, {});
}

export function compose043_7<A, B, C, D>(
  f: (a: A) => B,
  g: (b: B) => C,
  h: (c: C) => D
): (a: A) => D {
  return (a) => h(g(f(a)));
}

export const wired043_7 = compose043_7(
  (x: number) => ({ n: x }),
  (x) => ({ ...x, s: String(x.n) }),
  (x) => ({ ...x, ok: x.s.length > 0 })
);

export class Store043_7<T extends { id: string }> {
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

  snapshot(): Mapped043_7<T>[] {
    return [] as never;
  }
}

export const label043_7 = 'lib-07/module-043/block-7';

export interface Shape043_8<T> {
  id: string;
  value: T;
  meta: { tags: string[]; score: number; nested: { a: T; b: readonly T[] } };
}

export type Mapped043_8<T> = { readonly [K in keyof Shape043_8<T>]-?: Shape043_8<T>[K] };

export type Paths043_8<T> = T extends object
  ? { [K in keyof T & string]: K | `${K}.${Paths043_8<T[K]> & string}` }[keyof T & string]
  : never;

export function build043_8<T extends { id: string }>(items: readonly T[]) {
  return items
    .map((item, index) => ({ ...item, index, key: `${item.id}:${index}` }))
    .filter((item) => item.index % 2 === 0)
    .reduce<Record<string, (typeof items)[number] & { index: number }>>((acc, item) => {
      acc[item.key] = item;
      return acc;
    }, {});
}

export function compose043_8<A, B, C, D>(
  f: (a: A) => B,
  g: (b: B) => C,
  h: (c: C) => D
): (a: A) => D {
  return (a) => h(g(f(a)));
}

export const wired043_8 = compose043_8(
  (x: number) => ({ n: x }),
  (x) => ({ ...x, s: String(x.n) }),
  (x) => ({ ...x, ok: x.s.length > 0 })
);

export class Store043_8<T extends { id: string }> {
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

  snapshot(): Mapped043_8<T>[] {
    return [] as never;
  }
}

export const label043_8 = 'lib-07/module-043/block-8';

export interface Shape043_9<T> {
  id: string;
  value: T;
  meta: { tags: string[]; score: number; nested: { a: T; b: readonly T[] } };
}

export type Mapped043_9<T> = { readonly [K in keyof Shape043_9<T>]-?: Shape043_9<T>[K] };

export type Paths043_9<T> = T extends object
  ? { [K in keyof T & string]: K | `${K}.${Paths043_9<T[K]> & string}` }[keyof T & string]
  : never;

export function build043_9<T extends { id: string }>(items: readonly T[]) {
  return items
    .map((item, index) => ({ ...item, index, key: `${item.id}:${index}` }))
    .filter((item) => item.index % 2 === 0)
    .reduce<Record<string, (typeof items)[number] & { index: number }>>((acc, item) => {
      acc[item.key] = item;
      return acc;
    }, {});
}

export function compose043_9<A, B, C, D>(
  f: (a: A) => B,
  g: (b: B) => C,
  h: (c: C) => D
): (a: A) => D {
  return (a) => h(g(f(a)));
}

export const wired043_9 = compose043_9(
  (x: number) => ({ n: x }),
  (x) => ({ ...x, s: String(x.n) }),
  (x) => ({ ...x, ok: x.s.length > 0 })
);

export class Store043_9<T extends { id: string }> {
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

  snapshot(): Mapped043_9<T>[] {
    return [] as never;
  }
}

export const label043_9 = 'lib-07/module-043/block-9';

export interface Shape043_10<T> {
  id: string;
  value: T;
  meta: { tags: string[]; score: number; nested: { a: T; b: readonly T[] } };
}

export type Mapped043_10<T> = { readonly [K in keyof Shape043_10<T>]-?: Shape043_10<T>[K] };

export type Paths043_10<T> = T extends object
  ? { [K in keyof T & string]: K | `${K}.${Paths043_10<T[K]> & string}` }[keyof T & string]
  : never;

export function build043_10<T extends { id: string }>(items: readonly T[]) {
  return items
    .map((item, index) => ({ ...item, index, key: `${item.id}:${index}` }))
    .filter((item) => item.index % 2 === 0)
    .reduce<Record<string, (typeof items)[number] & { index: number }>>((acc, item) => {
      acc[item.key] = item;
      return acc;
    }, {});
}

export function compose043_10<A, B, C, D>(
  f: (a: A) => B,
  g: (b: B) => C,
  h: (c: C) => D
): (a: A) => D {
  return (a) => h(g(f(a)));
}

export const wired043_10 = compose043_10(
  (x: number) => ({ n: x }),
  (x) => ({ ...x, s: String(x.n) }),
  (x) => ({ ...x, ok: x.s.length > 0 })
);

export class Store043_10<T extends { id: string }> {
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

  snapshot(): Mapped043_10<T>[] {
    return [] as never;
  }
}

export const label043_10 = 'lib-07/module-043/block-10';
