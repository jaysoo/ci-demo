import { createFileRoute } from '@tanstack/react-router';
import { highlight } from '../../components/generated/highlight';
import { Board001 } from '../../components/generated/widget-001';
import { Orbit002 } from '../../components/generated/widget-002';
import { Stream003 } from '../../components/generated/widget-003';
import { Panel004 } from '../../components/generated/widget-004';
import { Board005 } from '../../components/generated/widget-005';
import { Orbit006 } from '../../components/generated/widget-006';
import { Stream007 } from '../../components/generated/widget-007';
import { Panel008 } from '../../components/generated/widget-008';
import { Board009 } from '../../components/generated/widget-009';
import { Orbit010 } from '../../components/generated/widget-010';

const SAMPLE = `export const panel = 1;`;

export const Route = createFileRoute('/demo/panel-01')({
  loader: async () => ({ code: await highlight(SAMPLE, 1) }),
  component: Demo01,
});

function Demo01() {
  const { code } = Route.useLoaderData();

  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="display-title mb-6 text-3xl font-bold">Demo panel 01</h1>
      <div className="mb-6 overflow-x-auto rounded-xl border border-black/5 p-3 text-xs">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="grid gap-4">
        <Board001 />
        <Orbit002 />
        <Stream003 />
        <Panel004 />
        <Board005 />
        <Orbit006 />
        <Stream007 />
        <Panel008 />
        <Board009 />
        <Orbit010 />
      </div>
    </main>
  );
}
