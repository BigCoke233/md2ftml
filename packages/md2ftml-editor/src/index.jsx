import { ProseMirrorEditor } from './prosemirror';

export default function () {
  return (
    <div id={`md2ftml-editor`}>
      <ProseMirrorEditor />
      <textarea style={{ padding: '1rem' }} />
    </div>
  );
}
