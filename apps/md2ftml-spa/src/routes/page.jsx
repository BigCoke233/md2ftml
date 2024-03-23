import { Helmet } from '@modern-js/runtime/head';
import './index.css';
import { md2ftml } from '@md2ftml/parser';

const Index = () => {
  return (
    <div className="container-box">
      <Helmet>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfnupenuhf/favicon.ico"
        />
      </Helmet>
      <main>{md2ftml.parse('# test')}</main>
    </div>
  );
};

export default Index;
