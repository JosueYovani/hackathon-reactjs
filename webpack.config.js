const HtmlPlugin = require('html-webpack-plugin');

const { resolve } = require('path');

const context = resolve(__dirname, 'src');

module.exports = {
  entry: './src/index.js',
  output: {
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: context,
        options: {
          presets: [
            [
              '@babel/preset-react',
              {
                runtime: 'automatic',
              },
            ],
          ],
        },
      },
      {
        test: /\.scss$/i,
        loader: 'sass-loader',
      },
      {
        test: /\.svg$/,
        loader: '@svgr/webpack',
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },

  plugins: [
    new HtmlPlugin({
      template: './public/index.html',
      title: 'React, Tailwind and Webpack 5 Boilerplate',
      favicon: './src/assets/favicon.svg',
    }),
  ],
};
