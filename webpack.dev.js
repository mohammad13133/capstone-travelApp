const path = require("path");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");

const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
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
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
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
  ],
};
