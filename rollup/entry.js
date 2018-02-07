import babel from 'rollup-plugin-babel';
import localResolve from 'rollup-plugin-local-resolve';
import memory from 'rollup-plugin-memory';

export default {
  // input: 'main.js',
  input: 'main.js',
  output: [
    {
      file: 'dist/es/react-heading-section.js',
      format: 'es',
    },
    {
      file: 'dist/cjs/react-heading-section.js',
      format: 'cjs',
    },
  ],
  plugins: [
    memory({
      path: 'main.js',
      contents: `
// @flow
if (process.env.NODE_ENV === 'production') {
module.exports = require('./react-heading-section.production.js');
} else {
module.exports = require('./react-heading-section.development.js');
}`,
    }),
    // localResolve(),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};
