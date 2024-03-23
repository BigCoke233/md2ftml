import './index.css';
// import { md2ftml } from '@md2ftml/parser';
import React from 'react';
import rehypeSanitize from 'rehype-sanitize';
import MDEditor from '@uiw/react-md-editor';

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
    </div>
  );
}
