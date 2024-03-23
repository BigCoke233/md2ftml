import { md2ftml } from '@md2ftml/parser';

export default function () {
  return (
    <div id={`md2ftml-editor`}>
      <p>{md2ftml.parse('## placeholder')}</p>
    </div>
  );
}
