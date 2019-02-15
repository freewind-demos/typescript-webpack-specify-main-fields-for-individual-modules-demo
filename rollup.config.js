import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'main.ts',
  plugins: [typescript()],
  output: {
    file: 'bundle.js',
    format: 'cjs',
  },
  external: ['lodash']
}
