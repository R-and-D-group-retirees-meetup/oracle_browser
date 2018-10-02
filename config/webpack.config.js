const path = require("path");

module.exports = {
  target: "node",
  entry: "./ts/index.ts",
  cache: true,
  devtool: "source-map",
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "index.js"
  },
  target: 'electron-main',
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: "ts-loader"
    }, {
      test: /\.tsx?$/,
      enforce: "pre",
      loader: "tslint-loader",
      options: {
        configFile: "./tslint.json",
        typeCheck: true,
      },
    }],
  },
  resolve: {
    extensions: [
      ".ts",
      ".tsx",
      ".js",
    ]
  },
};