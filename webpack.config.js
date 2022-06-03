/* global require, __dirname, module */
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html',
});

module.exports = (env, argv) => {
  const isDevMode = argv.mode === 'development';
  const config = {
    entry: ['./src/index.tsx'],
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].js',
    },
    plugins: [htmlPlugin, new ESLintPlugin({})],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.less$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                sourceMap: isDevMode,
              },
            },
            {
              loader: 'less-loader',
              options: {
                sourceMap: isDevMode,
              },
            },
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|ttf|otf|woff|eot)$/,
          loader: 'file-loader',
          options: { name: '/static/[name].[ext]' },
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
  };
  if (isDevMode) {
    config.devtool = 'eval-source-map';
  }
  return config;
};
