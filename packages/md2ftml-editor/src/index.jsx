import './index.css';
import React from 'react';
import rehypeSanitize from 'rehype-sanitize';
import MDEditor from '@uiw/react-md-editor';
import { md2ftml } from '@md2ftml/parser';

export default function () {
  const [value, setValue] = React.useState('**Hello world!!!**');
  return (
    <div id={`md2ftml-editor`}>
      <MDEditor
        value={value}
        onChange={setValue}
        previewOptions={{
          rehypePlugins: [[rehypeSanitize]],
        }}
      />
      <textarea
        style={{ padding: '1rem', width: '100%', height: '400px' }}
        value={md2ftml.parse(value)}
      />
    </div>
  );
}
