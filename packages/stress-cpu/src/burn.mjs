// Saturates every core for DURATION_MS so the agent's CPU chart shows a sustained
// plateau near capacity (200% on a 2-core linux-medium-js agent).
import { availableParallelism } from 'node:os';
import { Worker, isMainThread } from 'node:worker_threads';
import { fileURLToPath } from 'node:url';

const DURATION_MS = Number(process.env.STRESS_CPU_MS ?? 90_000);

function burn(until) {
  let acc = 0;
  while (Date.now() < until) {
    // Tight float math loop - no allocation, so this stays CPU-bound.
    for (let i = 0; i < 5_000_000; i++) {
      acc += Math.sqrt(i) * Math.sin(i);
    }
  }
  return acc;
}

if (isMainThread) {
  const workers = availableParallelism();
  const until = Date.now() + DURATION_MS;
  console.log(
    `stress-cpu: saturating ${workers} cores for ${DURATION_MS / 1000}s`,
  );

  const self = fileURLToPath(import.meta.url);
  for (let i = 1; i < workers; i++) {
    new Worker(self);
  }
  burn(until);
  console.log('stress-cpu: done');
} else {
  burn(Date.now() + DURATION_MS);
}
