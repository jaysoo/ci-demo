import { createFileRoute } from '@tanstack/react-router';
import { highlight } from '../../components/generated/highlight';
import { Board401 } from '../../components/generated/widget-401';
import { Orbit402 } from '../../components/generated/widget-402';
import { Stream403 } from '../../components/generated/widget-403';
import { Panel404 } from '../../components/generated/widget-404';
import { Board405 } from '../../components/generated/widget-405';
import { Orbit406 } from '../../components/generated/widget-406';
import { Stream407 } from '../../components/generated/widget-407';
import { Panel408 } from '../../components/generated/widget-408';
import { Board409 } from '../../components/generated/widget-409';
import { Orbit410 } from '../../components/generated/widget-410';

const SAMPLE = `export const panel = 41;`;

export const Route = createFileRoute('/demo/panel-41')({
  loader: async () => ({ code: await highlight(SAMPLE, 41) }),
  component: Demo41,
});

function Demo41() {
  const { code } = Route.useLoaderData();

  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="display-title mb-6 text-3xl font-bold">Demo panel 41</h1>
      <div className="mb-6 overflow-x-auto rounded-xl border border-black/5 p-3 text-xs">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="grid gap-4">
        <Board401 />
        <Orbit402 />
        <Stream403 />
        <Panel404 />
        <Board405 />
        <Orbit406 />
        <Stream407 />
        <Panel408 />
        <Board409 />
        <Orbit410 />
      </div>
    </main>
  );
}
