import { createFileRoute } from '@tanstack/react-router';
import { highlight } from '../../components/generated/highlight';
import { Board081 } from '../../components/generated/widget-081';
import { Orbit082 } from '../../components/generated/widget-082';
import { Stream083 } from '../../components/generated/widget-083';
import { Panel084 } from '../../components/generated/widget-084';
import { Board085 } from '../../components/generated/widget-085';
import { Orbit086 } from '../../components/generated/widget-086';
import { Stream087 } from '../../components/generated/widget-087';
import { Panel088 } from '../../components/generated/widget-088';
import { Board089 } from '../../components/generated/widget-089';
import { Orbit090 } from '../../components/generated/widget-090';

const SAMPLE = `export const panel = 9;`;

export const Route = createFileRoute('/demo/panel-09')({
  loader: async () => ({ code: await highlight(SAMPLE, 9) }),
  component: Demo09,
});

function Demo09() {
  const { code } = Route.useLoaderData();

  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="display-title mb-6 text-3xl font-bold">Demo panel 09</h1>
      <div className="mb-6 overflow-x-auto rounded-xl border border-black/5 p-3 text-xs">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <div className="grid gap-4">
        <Board081 />
        <Orbit082 />
        <Stream083 />
        <Panel084 />
        <Board085 />
        <Orbit086 />
        <Stream087 />
        <Panel088 />
        <Board089 />
        <Orbit090 />
      </div>
    </main>
  );
}
