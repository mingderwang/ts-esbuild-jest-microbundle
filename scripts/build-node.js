require('esbuild-wasm').build({
  entryPoints: ['app.js'],
  bundle: true,
  platform: 'node',
  target: ['node16.16'],
  outdir: 'dist',
}).catch(() => process.exit(1))
