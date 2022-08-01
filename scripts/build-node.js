require('esbuild-wasm').build({
  entryPoints: ['app.js'],
  bundle: true,
  platform: 'node',
  target: ['node10.4'],
  outfile: 'out.js',
}).catch(() => process.exit(1))
