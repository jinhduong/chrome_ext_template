const path = require('path');
const Visualizer = require('webpack-visualizer-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: {
    background: './src/background.ts',
    content: './src/content.ts'
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
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.scss|svg$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /.png$/,
        loader: 'url-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      vue: 'vue/dist/vue.js'
      // jquery: 'jquery/src/jquery'
    }
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',
  plugins: [
    new VueLoaderPlugin(),
    new Visualizer({
      filename: './statistics.html'
    })
  ]
};
