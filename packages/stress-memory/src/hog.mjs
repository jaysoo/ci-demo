// Ramps RSS up to TARGET_MB, holds, then releases - gives the agent's memory chart
// a visible climb/plateau/drop instead of a flat line. Sized under the 7 GB
// linux-medium-js agent so it never trips the OOM killer.
const TARGET_MB = Number(process.env.STRESS_MEM_MB ?? 4500);
const RAMP_MS = Number(process.env.STRESS_MEM_RAMP_MS ?? 45_000);
const HOLD_MS = Number(process.env.STRESS_MEM_HOLD_MS ?? 30_000);

const CHUNK_MB = 64;
const chunks = [];
const chunkCount = Math.floor(TARGET_MB / CHUNK_MB);
const stepMs = Math.floor(RAMP_MS / chunkCount);

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

console.log(
  `stress-memory: ramping to ${TARGET_MB} MB over ${RAMP_MS / 1000}s`,
);

for (let i = 0; i < chunkCount; i++) {
  // Buffers live outside the V8 heap, so no --max-old-space-size tuning needed.
  const chunk = Buffer.allocUnsafe(CHUNK_MB * 1024 * 1024);
  // Touch every page - untouched pages are never committed and RSS stays flat.
  chunk.fill(i % 256);
  chunks.push(chunk);
  await sleep(stepMs);
}

console.log(
  `stress-memory: holding ${chunks.length * CHUNK_MB} MB for ${HOLD_MS / 1000}s`,
);
await sleep(HOLD_MS);

chunks.length = 0;
global.gc?.();
console.log('stress-memory: released');
