import { createFileRoute } from '@tanstack/react-router';
import { highlight } from '../../components/generated/highlight';
import { Board381 } from '../../components/generated/widget-381';
import { Orbit382 } from '../../components/generated/widget-382';
import { Stream383 } from '../../components/generated/widget-383';
import { Panel384 } from '../../components/generated/widget-384';
import { Board385 } from '../../components/generated/widget-385';
import { Orbit386 } from '../../components/generated/widget-386';
import { Stream387 } from '../../components/generated/widget-387';
import { Panel388 } from '../../components/generated/widget-388';
import { Board389 } from '../../components/generated/widget-389';
import { Orbit390 } from '../../components/generated/widget-390';

const SAMPLE = `export const panel = 39;`;

export const Route = createFileRoute('/demo/panel-39')({
  loader: async () => ({ code: await highlight(SAMPLE, 39) }),
  component: Demo39,
});

function Demo39() {
  const { code } = Route.useLoaderData();

  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="display-title mb-6 text-3xl font-bold">Demo panel 39</h1>
      <div className="mb-6 overflow-x-auto rounded-xl border border-black/5 p-3 text-xs">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="grid gap-4">
        <Board381 />
        <Orbit382 />
        <Stream383 />
        <Panel384 />
        <Board385 />
        <Orbit386 />
        <Stream387 />
        <Panel388 />
        <Board389 />
        <Orbit390 />
      </div>
    </main>
  );
}
