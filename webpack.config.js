const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require('path');

// __dirname - путь до текущей директории
// path.resolve(__dirname, 'src') - конкатенируем текущую директорию с папкой с именем src
module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: [
      'core-js/stable',
      'regenerator-runtime/runtime',
      './index.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['.js', '.html'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@core': path.resolve(__dirname, 'src', 'core'),
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].bundle.css',
    }),
    new HtmlWebpackPlugin({
      template: "./index.html"
    }),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'src', 'favicon.ico'),
          to: path.resolve(__dirname, 'dist')
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ],
  },

}
