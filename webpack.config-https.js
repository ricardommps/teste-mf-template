const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "collabra-mf",
    projectName: "template",
    webpackConfigEnv,
    output: {
      assetModuleFilename: "images/[hash][ext][query]",
    },
    argv,
  });

  return merge(defaultConfig, {
    resolve: {
      alias: {
        components: path.resolve(__dirname, "./src/components"),
        utils: path.resolve(__dirname, "./src/utils"),
        assets: path.resolve(__dirname, "./src/assets"),
        api: path.resolve(__dirname, "./src/api"),
        pages: path.resolve(__dirname, "./src/pages"),
        theme: path.resolve(__dirname, "./src/theme"),
      },
    },
    module: {
      rules: [
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
        },
        {
          // JSX and JS are all .js
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
      ],
    },
    plugins: [new CleanWebpackPlugin(), new Dotenv({ systemvars: true })],
    devServer: {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
          "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers":
          "X-Requested-With, content-type, Authorization",
      },
      historyApiFallback: true,
      port: 8000,
      https: true,
    },
    output: {
      publicPath: "/",
    },
  });
};
