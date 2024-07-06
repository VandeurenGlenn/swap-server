import typescript from '@rollup/plugin-typescript'
export default [
  {
    input: ['src/server.ts'],
    output: {
      format: 'es',
      dir: 'dist'
    },
    plugins: [typescript()]
  }
]
