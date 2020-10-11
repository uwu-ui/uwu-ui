const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    index: "./src/index.ts"
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
    library: "@uwu-ui/themes",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader", "eslint-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
    modules: ["node_modules"]
  }
};
