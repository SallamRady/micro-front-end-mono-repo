const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const federaionModule = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require('../package.json')

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: "production",
  output:{
    filename:'[name].[contenthash].js',
    publicPath:'/marketing/latest/'
  },
  plugins: [
    new federaionModule({
      name: "marketing",
      filename: "remoteEntry.js",
      exposes: {
        "./MarketingApp": "./src/bootstrap.js",
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
