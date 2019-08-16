const webpack = require("webpack");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");

const { resolveCwd } = require("./lib/utils");
const config = require("./config").dev;
const baseWebpackConfig = require("./webpack.base")(config);
const hotReload = require("path").resolve(
  __dirname,
  "../node_modules/webpack-hot-middleware/client?reload=true&quiet=true"
);

Object.keys(baseWebpackConfig.entry).forEach(name => {
  baseWebpackConfig.entry[name] = [hotReload].concat(baseWebpackConfig.entry[name]);
});

module.exports = merge(baseWebpackConfig, {
  devtool: "eval-source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env": config.env
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: require(resolveCwd(".th3config/config")).title,
      template: "template.html",
      inject: true
    }),
    new FriendlyErrorsPlugin()
    // Scope Hoisting  webpack 3.4 support
    //  new webpack.optimize.ModuleConcatenationPlugin()
  ]
});
