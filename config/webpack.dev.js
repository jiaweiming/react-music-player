const path = require('path');
const uglify = require('uglifyjs-webpack-plugin');
const htmlWebpackPlugin = require("html-webpack-plugin");
const extractTextPlugin = require("extract-text-webpack-plugin");
const website = {publicPath: "http://localhost:8000/"};
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack'); //清除冗余的css

module.exports = {
	mode: "development",
	entry: {
		main: "./src/main.jsx"
	},
	output: {
		path: path.resolve(__dirname, "../dist"),
		filename: "bundle.js",
		publicPath: website.publicPath
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
		new extractTextPlugin("css/styles.css"),   //单独分离到css文件夹下
	],
	devServer: {   //开发模式启动本地服务器
		contentBase: path.resolve(__dirname, "../dist"),
		host: "localhost",
		port: 8000,
		compress: true,
		open:true
	}
};