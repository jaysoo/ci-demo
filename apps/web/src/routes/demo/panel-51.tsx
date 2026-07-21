import { createFileRoute } from '@tanstack/react-router';
import { highlight } from '../../components/generated/highlight';
import { Board501 } from '../../components/generated/widget-501';
import { Orbit502 } from '../../components/generated/widget-502';
import { Stream503 } from '../../components/generated/widget-503';
import { Panel504 } from '../../components/generated/widget-504';
import { Board505 } from '../../components/generated/widget-505';
import { Orbit506 } from '../../components/generated/widget-506';
import { Stream507 } from '../../components/generated/widget-507';
import { Panel508 } from '../../components/generated/widget-508';
import { Board509 } from '../../components/generated/widget-509';
import { Orbit510 } from '../../components/generated/widget-510';

const SAMPLE = `export const panel = 51;`;

export const Route = createFileRoute('/demo/panel-51')({
  loader: async () => ({ code: await highlight(SAMPLE, 51) }),
  component: Demo51,
});

function Demo51() {
  const { code } = Route.useLoaderData();

  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="display-title mb-6 text-3xl font-bold">Demo panel 51</h1>
      <div className="mb-6 overflow-x-auto rounded-xl border border-black/5 p-3 text-xs">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="grid gap-4">
        <Board501 />
        <Orbit502 />
        <Stream503 />
        <Panel504 />
        <Board505 />
        <Orbit506 />
        <Stream507 />
        <Panel508 />
        <Board509 />
        <Orbit510 />
      </div>
    </main>
  );
}
