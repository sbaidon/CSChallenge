const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const vue = {
  test: /\.(vue)$/,
  loader: 'vue-loader',
  exclude: /node_modules/
};

const javascript = {
  test: /\.(js)$/,
  loader: 'babel-loader',
  exclude: /node_modules/
};

const config = {
  entry: {
    app: './src/client/index.js'
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'src', 'server', 'static'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [vue, javascript]
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    },
    extensions: ['.js', '.vue']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Challenge App',
      template: './src/client/index.template.html'
    })
  ]
};

module.exports = config;
