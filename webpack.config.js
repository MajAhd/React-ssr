const path = require("path");
const commonConfig = {
  mode: "development",
  devtool: "source-maps",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};

const clientConfig = {
  ...commonConfig,
  name: "src",
  entry: path.join(__dirname, "src"),
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js"
  }
};

module.exports = clientConfig;
