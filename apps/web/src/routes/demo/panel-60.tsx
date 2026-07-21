import { createFileRoute } from '@tanstack/react-router';
import { highlight } from '../../components/generated/highlight';
import { Stream591 } from '../../components/generated/widget-591';
import { Panel592 } from '../../components/generated/widget-592';
import { Board593 } from '../../components/generated/widget-593';
import { Orbit594 } from '../../components/generated/widget-594';
import { Stream595 } from '../../components/generated/widget-595';
import { Panel596 } from '../../components/generated/widget-596';
import { Board597 } from '../../components/generated/widget-597';
import { Orbit598 } from '../../components/generated/widget-598';
import { Stream599 } from '../../components/generated/widget-599';
import { Panel600 } from '../../components/generated/widget-600';

const SAMPLE = `export const panel = 60;`;

export const Route = createFileRoute('/demo/panel-60')({
  loader: async () => ({ code: await highlight(SAMPLE, 60) }),
  component: Demo60,
});

function Demo60() {
  const { code } = Route.useLoaderData();

  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="display-title mb-6 text-3xl font-bold">Demo panel 60</h1>
      <div className="mb-6 overflow-x-auto rounded-xl border border-black/5 p-3 text-xs">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="grid gap-4">
        <Stream591 />
        <Panel592 />
        <Board593 />
        <Orbit594 />
        <Stream595 />
        <Panel596 />
        <Board597 />
        <Orbit598 />
        <Stream599 />
        <Panel600 />
      </div>
    </main>
  );
}
