const path = require("path");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");
const WorkboxPlugin = require("workbox-webpack-plugin");

const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "production",
  entry: "./src/client/index.js",
  output: {
    libraryTarget: "var",
    library: "Client",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/client/views/index.html",
      filename: "./index.html",
    }),
    new Dotenv({
      path: "./.env", // Path to your .env file
      systemvars: true, // Load system variables as well
    }),
    new WorkboxPlugin.GenerateSW(),
  ],
  output: {
    libraryTarget: "var",
    library: "Client",
  },
};
