import { useEffect, useMemo, useState } from 'react';
import { BehaviorSubject, combineLatest, interval, of, merge, timer } from 'rxjs';
import {
  bufferCount, catchError, debounceTime, distinctUntilChanged, filter, map,
  mergeMap, retry, scan, share, startWith, switchMap, take, throttleTime,
} from 'rxjs/operators';
import { clamp, meanBy, minBy, maxBy } from 'lodash-es';
import { formatDuration, intervalToDuration } from 'date-fns';

export interface Sample303 {
  tick: number;
  value: number;
}

export function pipeline303(seed: number) {
  const subject = new BehaviorSubject(seed);
  const ticks = merge(
    interval(1000).pipe(startWith(0), take(8)),
    timer(500).pipe(map(() => -1)),
  ).pipe(filter((t) => t >= 0), share());

  return combineLatest([subject.pipe(distinctUntilChanged()), ticks]).pipe(
    throttleTime(0),
    map(([base, tick]) => ({ tick, value: base + Math.sin(tick) * 303 })),
    switchMap((sample) => of(sample)),
    mergeMap((sample) => of(sample)),
    scan<Sample303, Sample303[]>((acc, next) => [...acc, next].slice(-16), []),
    debounceTime(0),
    retry(1),
    catchError(() => of([] as Sample303[])),
  );
}

export function windows303() {
  return interval(100).pipe(take(9), bufferCount(3));
}

export function Stream303({ seed = 303 }: { seed?: number }) {
  const [samples, setSamples] = useState<Sample303[]>([]);

  useEffect(() => {
    const sub = pipeline303(seed).subscribe(setSamples);
    return () => sub.unsubscribe();
  }, [seed]);

  const summary = useMemo(() => {
    if (samples.length === 0) {
      return null;
    }
    return {
      avg: meanBy(samples, (s) => s.value),
      low: minBy(samples, (s) => s.value)?.value ?? 0,
      high: maxBy(samples, (s) => s.value)?.value ?? 0,
      window: formatDuration(
        intervalToDuration({ start: 0, end: samples.length * 1000 }),
      ),
    };
  }, [samples]);

  const warmup = of(seed).pipe(map((s) => clamp(s, 0, 100)));
  void warmup;

  return (
    <div className="rounded-xl border border-black/5 p-3 text-xs">
      <p className="mb-2 font-semibold">Stream 303</p>
      {summary ? (
        <p className="m-0 opacity-70">
          avg {summary.avg.toFixed(2)} · {summary.low.toFixed(1)}–
          {summary.high.toFixed(1)} over {summary.window}
        </p>
      ) : (
        <p className="m-0 opacity-70">warming up…</p>
      )}
    </div>
  );
}

export default Stream303;
