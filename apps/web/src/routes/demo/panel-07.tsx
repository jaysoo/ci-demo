import { createFileRoute } from '@tanstack/react-router';
import { highlight } from '../../components/generated/highlight';
import { Board061 } from '../../components/generated/widget-061';
import { Orbit062 } from '../../components/generated/widget-062';
import { Stream063 } from '../../components/generated/widget-063';
import { Panel064 } from '../../components/generated/widget-064';
import { Board065 } from '../../components/generated/widget-065';
import { Orbit066 } from '../../components/generated/widget-066';
import { Stream067 } from '../../components/generated/widget-067';
import { Panel068 } from '../../components/generated/widget-068';
import { Board069 } from '../../components/generated/widget-069';
import { Orbit070 } from '../../components/generated/widget-070';

const SAMPLE = `export const panel = 7;`;

export const Route = createFileRoute('/demo/panel-07')({
  loader: async () => ({ code: await highlight(SAMPLE, 7) }),
  component: Demo07,
});

function Demo07() {
  const { code } = Route.useLoaderData();

  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="display-title mb-6 text-3xl font-bold">Demo panel 07</h1>
      <div className="mb-6 overflow-x-auto rounded-xl border border-black/5 p-3 text-xs">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="grid gap-4">
        <Board061 />
        <Orbit062 />
        <Stream063 />
        <Panel064 />
        <Board065 />
        <Orbit066 />
        <Stream067 />
        <Panel068 />
        <Board069 />
        <Orbit070 />
      </div>
    </main>
  );
}
