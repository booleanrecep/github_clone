const path = require("path");
const HTMLWebpackPlugiin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
module.exports = {
  // target:"web",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.(s[ac]ss)$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                // indentWidth: 4,
                // outputStyle: "compressed",
                // name: "[path][name][hash].[ext]",
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name][hash].[ext]",
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HTMLWebpackPlugiin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
  ],

  // devtool:"cheap-module-source-map",

  devServer: {
    contentBase: path.join(__dirname, "public"),
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
};
