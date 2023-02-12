// rollup.config.js
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/bundle.js',
    // format: 'cjs',
  },
  external: ['library'],
  plugins: [
    typescript({
      tsconfig: 'tsconfig.json',
    }),
  ],
};
