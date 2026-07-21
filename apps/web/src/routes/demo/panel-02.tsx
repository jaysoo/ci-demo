import { createFileRoute } from '@tanstack/react-router';
import { highlight } from '../../components/generated/highlight';
import { Stream011 } from '../../components/generated/widget-011';
import { Panel012 } from '../../components/generated/widget-012';
import { Board013 } from '../../components/generated/widget-013';
import { Orbit014 } from '../../components/generated/widget-014';
import { Stream015 } from '../../components/generated/widget-015';
import { Panel016 } from '../../components/generated/widget-016';
import { Board017 } from '../../components/generated/widget-017';
import { Orbit018 } from '../../components/generated/widget-018';
import { Stream019 } from '../../components/generated/widget-019';
import { Panel020 } from '../../components/generated/widget-020';

const SAMPLE = `export const panel = 2;`;

export const Route = createFileRoute('/demo/panel-02')({
  loader: async () => ({ code: await highlight(SAMPLE, 2) }),
  component: Demo02,
});

function Demo02() {
  const { code } = Route.useLoaderData();

  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="display-title mb-6 text-3xl font-bold">Demo panel 02</h1>
      <div className="mb-6 overflow-x-auto rounded-xl border border-black/5 p-3 text-xs">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="grid gap-4">
        <Stream011 />
        <Panel012 />
        <Board013 />
        <Orbit014 />
        <Stream015 />
        <Panel016 />
        <Board017 />
        <Orbit018 />
        <Stream019 />
        <Panel020 />
      </div>
    </main>
  );
}
