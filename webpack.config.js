const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: ['babel-polyfill', 'react-hot-loader/patch', './js/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  context: path.resolve(__dirname, './src'),
  performance: {
    hints: false
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.mjs']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        IS_ADULT: process.env.IS_ADULT,
        development: "'development'"
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'dynamic import example',
      template: path.join(__dirname, './src/index.ejs')
    })
  ],
  cache: true,
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader?cacheDirectory'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: false,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => {
                return [require('autoprefixer')];
              }
            }
          }
        ]
      }
    ]
  }
};
