/*
 * Webpack main Config
 * @author: weijialu(wjl152856@alibaba-inc.com)
 * @since: 2018/12/29
 */
const path = require('path');
const webpack = require('webpack');
const lodash = require("lodash");
const build_path = path.join(__dirname, "../build"); //distribution目录路径
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const config = lodash.cloneDeep( require("./base.config") );
const pluginsList = [];
config.entry = {
    index: './src/main/index.js'
};
// for (const key in config.entry) {
//     let value = config.entry[key];
//     if (!Array.isArray(value)) {
//         value = [value]
//     }
//     value.unshift('webpack-dev-server/client?http://localhost:9090','webpack/hot/dev-server');
//     config.entry[key] = value;
// }
config.output = {
    path: build_path, //打包后的文件存放的地方
    filename: "main/[name].js", //打包后输出文件的文件名
    publicPath: "/",
    library: 'Point',
    libraryTarget: 'umd',
    libraryExport: 'default'
};
// config.devtool = 'cheap-module-source-map'; //cheap-module-eval-source-map / cheap-source-map
config.mode = 'production';
pluginsList.push(
    new UglifyJsPlugin({
        sourceMap: false,
        parallel: true,
        //minimize: true, //貌似已经废弃
        cache: true,
        uglifyOptions: {
            output: {
                comments: false
            },
            compress: {
                drop_debugger: true,
                warnings: false,
                drop_console: true
            }
        }
    })
);
pluginsList.push(
    new MiniCssExtractPlugin({
        //filename: "[name].[chunkhash:8].css",
        filename: "main/[name].css",
        chunkFilename: "[id].css"
    })
)
// pluginsList.push(
//     new webpack.HotModuleReplacementPlugin(),
//     new webpack.NoEmitOnErrorsPlugin(),
//     new webpack.LoaderOptionsPlugin({
//         debug: true
//     })
// );
config.plugins = pluginsList;
console.log(config);
module.exports = config;