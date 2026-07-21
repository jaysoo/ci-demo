import { createFileRoute } from '@tanstack/react-router';
import { highlight } from '../../components/generated/highlight';
import { Stream071 } from '../../components/generated/widget-071';
import { Panel072 } from '../../components/generated/widget-072';
import { Board073 } from '../../components/generated/widget-073';
import { Orbit074 } from '../../components/generated/widget-074';
import { Stream075 } from '../../components/generated/widget-075';
import { Panel076 } from '../../components/generated/widget-076';
import { Board077 } from '../../components/generated/widget-077';
import { Orbit078 } from '../../components/generated/widget-078';
import { Stream079 } from '../../components/generated/widget-079';
import { Panel080 } from '../../components/generated/widget-080';

const SAMPLE = `export const panel = 8;`;

export const Route = createFileRoute('/demo/panel-08')({
  loader: async () => ({ code: await highlight(SAMPLE, 8) }),
  component: Demo08,
});

function Demo08() {
  const { code } = Route.useLoaderData();

  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="display-title mb-6 text-3xl font-bold">Demo panel 08</h1>
      <div className="mb-6 overflow-x-auto rounded-xl border border-black/5 p-3 text-xs">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="grid gap-4">
        <Stream071 />
        <Panel072 />
        <Board073 />
        <Orbit074 />
        <Stream075 />
        <Panel076 />
        <Board077 />
        <Orbit078 />
        <Stream079 />
        <Panel080 />
      </div>
    </main>
  );
}
