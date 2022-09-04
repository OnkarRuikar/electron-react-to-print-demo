const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

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
    publicPath: "./",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader",
        }),
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
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  plugins: [new HtmlWebpackPlugin(), new ExtractTextPlugin("bundle.css")],
  mode: "production",
  node: {global: true},
  stats: {
    colors: true,
    children: false,
    chunks: false,
    modules: false,
  },
};
