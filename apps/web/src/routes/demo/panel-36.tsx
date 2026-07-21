import { createFileRoute } from '@tanstack/react-router';
import { highlight } from '../../components/generated/highlight';
import { Stream351 } from '../../components/generated/widget-351';
import { Panel352 } from '../../components/generated/widget-352';
import { Board353 } from '../../components/generated/widget-353';
import { Orbit354 } from '../../components/generated/widget-354';
import { Stream355 } from '../../components/generated/widget-355';
import { Panel356 } from '../../components/generated/widget-356';
import { Board357 } from '../../components/generated/widget-357';
import { Orbit358 } from '../../components/generated/widget-358';
import { Stream359 } from '../../components/generated/widget-359';
import { Panel360 } from '../../components/generated/widget-360';

const SAMPLE = `export const panel = 36;`;

export const Route = createFileRoute('/demo/panel-36')({
  loader: async () => ({ code: await highlight(SAMPLE, 36) }),
  component: Demo36,
});

function Demo36() {
  const { code } = Route.useLoaderData();

  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="display-title mb-6 text-3xl font-bold">Demo panel 36</h1>
      <div className="mb-6 overflow-x-auto rounded-xl border border-black/5 p-3 text-xs">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="grid gap-4">
        <Stream351 />
        <Panel352 />
        <Board353 />
        <Orbit354 />
        <Stream355 />
        <Panel356 />
        <Board357 />
        <Orbit358 />
        <Stream359 />
        <Panel360 />
      </div>
    </main>
  );
}
