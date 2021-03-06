import babel from 'rollup-plugin-babel';
import localResolve from 'rollup-plugin-local-resolve';

export default {
  input: 'src/index.js',
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
    localResolve(),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};
