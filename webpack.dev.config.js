const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const helpers = require("./config/helpers");

// Config directories
const SRC_DIR = path.resolve(__dirname, "src");
const OUTPUT_DIR = path.resolve(__dirname, "dist");

// Any directories you will be adding code/files into, need to be added to this
// array so webpack will pick them up
const defaultInclude = [SRC_DIR];

module.exports = {
  entry: SRC_DIR + "/index.js",
  output: {
    path: OUTPUT_DIR,
    publicPath: "/",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{loader: "style-loader"}, {loader: "css-loader"}],
        include: defaultInclude,
      },
      {
        test: /\.jsx?$/,
        use: [{loader: "babel-loader"}],
        include: defaultInclude,
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [{loader: "file-loader?name=img/[name]__[hash:base64:5].[ext]"}],
        include: defaultInclude,
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [{loader: "file-loader?name=font/[name]__[hash:base64:5].[ext]"}],
        include: defaultInclude,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: helpers.root("public/index.html"),
      inject: "body",
    }),
  ],
  mode: "development",
  node: {global: true},
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, OUTPUT_DIR),
    },
    compress: true,
    open: false,
    port: 9000,
    client: {
      overlay: true,
    },
  },
};
