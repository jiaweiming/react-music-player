const path = require('path');
const uglify = require('uglifyjs-webpack-plugin');
const htmlWebpackPlugin = require("html-webpack-plugin");
const extractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    main: "./src/main.jsx"
  },
  output: {
    path: path.resolve(__dirname, "../prod"),
    filename: "bundle.js",
    publicPath: "./"
  },
  module: {
    rules: [
      {test: /\.less$/, use:extractTextPlugin.extract({  //css分离
          fallback:"style-loader",
          use:[{loader:"css-loader"},{loader:"postcss-loader"},{loader:"less-loader"}]
        })},
      {test: /\.css$/,use:[{loader:"style-loader"},{loader: "css-loader"}]},
      {test: /\.(png|jpg|gif|jpeg|ico|svg)/, use: [{loader: "url-loader", options: {limit: 500,outputPath: "images/"}}]},
      {test: /\.(htm|html)$i/, use: ["html-withimg-loader"]},
      {test: /\.(js|jsx)$/,use:{loader: "babel-loader", options: {
            presets:['env','react'],
            "plugins":[ ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]]}}, //按需加载
        exclude:/node_modules/
      },
    ]
  },
  plugins: [
    new uglify(),  //gzip压缩
    new htmlWebpackPlugin({   //HTML模板
      minify: {removeAttributeQuotes: true},
      hash: true,
      template: "./src/index.html"
    }),
    new extractTextPlugin("bundle.css"),   //单独分离到css文件夹下
  ]
};