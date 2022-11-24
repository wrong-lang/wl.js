// Import Terser so we can use it
const { minify } = require('terser');

// Import fs so we can read/write files
const fs = require('fs');

// Define the config for how Terser should minify the code
// This is set to how you currently have this web tool configured
const config = {
  compress: {
    dead_code: true,
    drop_console: false,
    drop_debugger: true,
    keep_classnames: false,
    keep_fargs: true,
    keep_fnames: false,
    keep_infinity: false
  },
  mangle: {
    eval: true,
    keep_classnames: false,
    keep_fnames: false,
    toplevel: true,
    safari10: true
  },
  module: true,
  sourceMap: {
    filename: 'index.min.js',
    url: 'index.min.js.map'
  },
  output: {
    comments: 'some'
  }
};

// Load in your code to minify
const code = fs.readFileSync('dist/index.js', 'utf8');

// Minify the code with Terser
minify(code, config).then((minified) => {
  // Save the code!
  fs.writeFileSync('dist/index.min.js', minified.code);

  // Save the generated sourcemap
  fs.writeFileSync('dist/index.min.js.map', minified.map);
})