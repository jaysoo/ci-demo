import { createFileRoute } from '@tanstack/react-router';
import { highlight } from '../../components/generated/highlight';
import { Stream431 } from '../../components/generated/widget-431';
import { Panel432 } from '../../components/generated/widget-432';
import { Board433 } from '../../components/generated/widget-433';
import { Orbit434 } from '../../components/generated/widget-434';
import { Stream435 } from '../../components/generated/widget-435';
import { Panel436 } from '../../components/generated/widget-436';
import { Board437 } from '../../components/generated/widget-437';
import { Orbit438 } from '../../components/generated/widget-438';
import { Stream439 } from '../../components/generated/widget-439';
import { Panel440 } from '../../components/generated/widget-440';

const SAMPLE = `export const panel = 44;`;

export const Route = createFileRoute('/demo/panel-44')({
  loader: async () => ({ code: await highlight(SAMPLE, 44) }),
  component: Demo44,
});

function Demo44() {
  const { code } = Route.useLoaderData();

  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="display-title mb-6 text-3xl font-bold">Demo panel 44</h1>
      <div className="mb-6 overflow-x-auto rounded-xl border border-black/5 p-3 text-xs">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="grid gap-4">
        <Stream431 />
        <Panel432 />
        <Board433 />
        <Orbit434 />
        <Stream435 />
        <Panel436 />
        <Board437 />
        <Orbit438 />
        <Stream439 />
        <Panel440 />
      </div>
    </main>
  );
}
