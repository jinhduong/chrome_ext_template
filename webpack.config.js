const path = require('path');
const Visualizer = require('webpack-visualizer-plugin');

module.exports = {
  entry: {
    background: './src/background.ts',
    content: './src/content.ts',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /.png$/,
        loader: 'url-loader'
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',
  plugins: [
    new Visualizer({
      filename: './statistics.html'
    })
  ]
};
