import { createFileRoute } from '@tanstack/react-router';
import { highlight } from '../../components/generated/highlight';
import { Board301 } from '../../components/generated/widget-301';
import { Orbit302 } from '../../components/generated/widget-302';
import { Stream303 } from '../../components/generated/widget-303';
import { Panel304 } from '../../components/generated/widget-304';
import { Board305 } from '../../components/generated/widget-305';
import { Orbit306 } from '../../components/generated/widget-306';
import { Stream307 } from '../../components/generated/widget-307';
import { Panel308 } from '../../components/generated/widget-308';
import { Board309 } from '../../components/generated/widget-309';
import { Orbit310 } from '../../components/generated/widget-310';

const SAMPLE = `export const panel = 31;`;

export const Route = createFileRoute('/demo/panel-31')({
  loader: async () => ({ code: await highlight(SAMPLE, 31) }),
  component: Demo31,
});

function Demo31() {
  const { code } = Route.useLoaderData();

  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="display-title mb-6 text-3xl font-bold">Demo panel 31</h1>
      <div className="mb-6 overflow-x-auto rounded-xl border border-black/5 p-3 text-xs">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="grid gap-4">
        <Board301 />
        <Orbit302 />
        <Stream303 />
        <Panel304 />
        <Board305 />
        <Orbit306 />
        <Stream307 />
        <Panel308 />
        <Board309 />
        <Orbit310 />
      </div>
    </main>
  );
}
