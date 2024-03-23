import { moduleTools } from '@modern-js/module-tools';
import { tailwindcssPlugin } from '@modern-js/plugin-tailwindcss';

export default {
  plugins: [moduleTools(), tailwindcssPlugin()],
  buildPreset: 'npm-library',
};
