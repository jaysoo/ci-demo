import { createFileRoute } from '@tanstack/react-router';
import { highlight } from '../../components/generated/highlight';
import { Stream151 } from '../../components/generated/widget-151';
import { Panel152 } from '../../components/generated/widget-152';
import { Board153 } from '../../components/generated/widget-153';
import { Orbit154 } from '../../components/generated/widget-154';
import { Stream155 } from '../../components/generated/widget-155';
import { Panel156 } from '../../components/generated/widget-156';
import { Board157 } from '../../components/generated/widget-157';
import { Orbit158 } from '../../components/generated/widget-158';
import { Stream159 } from '../../components/generated/widget-159';
import { Panel160 } from '../../components/generated/widget-160';

const SAMPLE = `export const panel = 16;`;

export const Route = createFileRoute('/demo/panel-16')({
  loader: async () => ({ code: await highlight(SAMPLE, 16) }),
  component: Demo16,
});

function Demo16() {
  const { code } = Route.useLoaderData();

  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="display-title mb-6 text-3xl font-bold">Demo panel 16</h1>
      <div className="mb-6 overflow-x-auto rounded-xl border border-black/5 p-3 text-xs">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="grid gap-4">
        <Stream151 />
        <Panel152 />
        <Board153 />
        <Orbit154 />
        <Stream155 />
        <Panel156 />
        <Board157 />
        <Orbit158 />
        <Stream159 />
        <Panel160 />
      </div>
    </main>
  );
}
