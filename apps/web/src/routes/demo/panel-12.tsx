import { createFileRoute } from '@tanstack/react-router';
import { highlight } from '../../components/generated/highlight';
import { Stream111 } from '../../components/generated/widget-111';
import { Panel112 } from '../../components/generated/widget-112';
import { Board113 } from '../../components/generated/widget-113';
import { Orbit114 } from '../../components/generated/widget-114';
import { Stream115 } from '../../components/generated/widget-115';
import { Panel116 } from '../../components/generated/widget-116';
import { Board117 } from '../../components/generated/widget-117';
import { Orbit118 } from '../../components/generated/widget-118';
import { Stream119 } from '../../components/generated/widget-119';
import { Panel120 } from '../../components/generated/widget-120';

const SAMPLE = `export const panel = 12;`;

export const Route = createFileRoute('/demo/panel-12')({
  loader: async () => ({ code: await highlight(SAMPLE, 12) }),
  component: Demo12,
});

function Demo12() {
  const { code } = Route.useLoaderData();

  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="display-title mb-6 text-3xl font-bold">Demo panel 12</h1>
      <div className="mb-6 overflow-x-auto rounded-xl border border-black/5 p-3 text-xs">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="grid gap-4">
        <Stream111 />
        <Panel112 />
        <Board113 />
        <Orbit114 />
        <Stream115 />
        <Panel116 />
        <Board117 />
        <Orbit118 />
        <Stream119 />
        <Panel120 />
      </div>
    </main>
  );
}
