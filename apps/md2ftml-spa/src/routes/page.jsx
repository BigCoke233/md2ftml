import './index.css';
import { md2ftml } from '@md2ftml/parser';
import Editor from '@md2ftml/editor';

const Index = () => {
  return (
    <div className="container-box">
      <main>{md2ftml.parse('# test')}</main>
      <Editor />
    </div>
  );
};

export default Index;
