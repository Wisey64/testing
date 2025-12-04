const path = require('path');

module.exports = {
  entry: './src/index.js', // starting point of your app
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // clears old builds
  },
  mode: 'development', // or 'production' for final build
  devServer: {
    static: './dist',
  },
};
