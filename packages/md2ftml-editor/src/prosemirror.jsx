import { EditorState } from 'prosemirror-state';
import { schema } from 'prosemirror-schema-basic';
import { ProseMirror } from '@nytimes/react-prosemirror';
import { useState } from 'react';

const defaultState = EditorState.create({ schema });
export function ProseMirrorEditor() {
  const [mount, setMount] = useState();

  return (
    <ProseMirror mount={mount} defaultState={defaultState}>
      <div ref={setMount} />
    </ProseMirror>
  );
}
