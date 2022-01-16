import pkg from './package.json';

export default [
  // Browser-Friendly
  {
    input: 'src/__init__.js',
    output: {
      name: 'graphdj',
      format: 'iife',
      file: pkg.browser,
    },
  },
  // ESM (ECMAScript — Module)
  {
    input: 'src/__init__.js',
    output: [{
      format: 'esm',
      file: pkg.module,
    }],
  },
];
