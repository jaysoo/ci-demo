import { createFileRoute } from '@tanstack/react-router';
import { highlight } from '../../components/generated/highlight';
import { Stream051 } from '../../components/generated/widget-051';
import { Panel052 } from '../../components/generated/widget-052';
import { Board053 } from '../../components/generated/widget-053';
import { Orbit054 } from '../../components/generated/widget-054';
import { Stream055 } from '../../components/generated/widget-055';
import { Panel056 } from '../../components/generated/widget-056';
import { Board057 } from '../../components/generated/widget-057';
import { Orbit058 } from '../../components/generated/widget-058';
import { Stream059 } from '../../components/generated/widget-059';
import { Panel060 } from '../../components/generated/widget-060';

const SAMPLE = `export const panel = 6;`;

export const Route = createFileRoute('/demo/panel-06')({
  loader: async () => ({ code: await highlight(SAMPLE, 6) }),
  component: Demo06,
});

function Demo06() {
  const { code } = Route.useLoaderData();

  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="display-title mb-6 text-3xl font-bold">Demo panel 06</h1>
      <div className="mb-6 overflow-x-auto rounded-xl border border-black/5 p-3 text-xs">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="grid gap-4">
        <Stream051 />
        <Panel052 />
        <Board053 />
        <Orbit054 />
        <Stream055 />
        <Panel056 />
        <Board057 />
        <Orbit058 />
        <Stream059 />
        <Panel060 />
      </div>
    </main>
  );
}
