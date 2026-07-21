import { createFileRoute } from '@tanstack/react-router';
import { highlight } from '../../components/generated/highlight';
import { Stream091 } from '../../components/generated/widget-091';
import { Panel092 } from '../../components/generated/widget-092';
import { Board093 } from '../../components/generated/widget-093';
import { Orbit094 } from '../../components/generated/widget-094';
import { Stream095 } from '../../components/generated/widget-095';
import { Panel096 } from '../../components/generated/widget-096';
import { Board097 } from '../../components/generated/widget-097';
import { Orbit098 } from '../../components/generated/widget-098';
import { Stream099 } from '../../components/generated/widget-099';
import { Panel100 } from '../../components/generated/widget-100';

const SAMPLE = `export const panel = 10;`;

export const Route = createFileRoute('/demo/panel-10')({
  loader: async () => ({ code: await highlight(SAMPLE, 10) }),
  component: Demo10,
});

function Demo10() {
  const { code } = Route.useLoaderData();

  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="display-title mb-6 text-3xl font-bold">Demo panel 10</h1>
      <div className="mb-6 overflow-x-auto rounded-xl border border-black/5 p-3 text-xs">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="grid gap-4">
        <Stream091 />
        <Panel092 />
        <Board093 />
        <Orbit094 />
        <Stream095 />
        <Panel096 />
        <Board097 />
        <Orbit098 />
        <Stream099 />
        <Panel100 />
      </div>
    </main>
  );
}
