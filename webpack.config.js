const path = require('path');
const webpack = require('webpack');
const fs = require('fs');

const dev_path = path.join(__dirname, "./src/"); //develop目录路径，暂时只支持监听子集层
const build_path = path.join(__dirname, "./build"); //distribution目录路径
const static_path = './static/'; //distribution目录路径

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const entryList = {
    'index': './src/index.js'
};
const pluginsList = [];

pluginsList.push(
    new MiniCssExtractPlugin({
        //filename: "[name].[chunkhash:8].css",
        filename: "css/[name].css",
        chunkFilename: "[id].css"
    })
)

let htmlPluginsList = (path) => {
    let files = fs.readdirSync(path);
    files.forEach((item, index) => {
        //let stat = fs.statSync(path + item);
        let arr = []; //定义一个对象存放文件的路径和名字
        if ((/(\.html)$/).test(item)) {
            //'modules/'+item.match(/(.[^\.]+)\.html/)[1]
            let pageJs = item.match(/(.[^\.]+)\.html/).length ? 'pages/' + item.match(/(.[^\.]+)\.html/)[1] : '';
            //console.log('9899'+pageJs);
            let htmlItem = new HtmlWebpackPlugin({
                //template: './DEV/' + item,
                template: 'html-withimg-loader!' + dev_path + item,
                filename: './page/' + item,
                inject: 'body',
                chunks: [pageJs], //'modules/'+item.match(/(.[^\.]+)\.html/)[1]
                chunksSortMode: "manual"
                //参考排序：https://segmentfault.com/q/1010000008621650?_ea=1700642
                //参考排序：https://segmentfault.com/a/1190000007294861
            })
            console.log(item);
            pluginsList.push(htmlItem);
        }
    })
}
htmlPluginsList(dev_path);

module.exports = {
    mode: 'development',
    entry: entryList,
    //extensions: ['.js', '.json', '.css', 'sass', '.less'],
    output: {
        path: build_path, //打包后的文件存放的地方
        filename: "js/[name].js", //打包后输出文件的文件名
        publicPath: "/api/", 
    },
    //devtool: 'eval-source-map', // 指定加source-map的方式
    devServer: {
        //参考：https://juejin.im/post/5bafc2556fb9a05cf3713d74
        //https://www.cnblogs.com/penghuwan/p/6941616.html
        proxy: { // proxy URLs to backend development server
            '/api': 'http://localhost:9090'
        },
        contentBase: build_path, //静态文件根目录
        port: 9091, // 端口
        host: '0.0.0.0',
        hot: true,
        overlay: true,//在编译出错的时候，在浏览器页面上显示错误
        //   historyApiFallback: true, // true for index.html upon 404, object for multiple paths  返回404页面时定向到特定页面
        //   https: false, // true for self-signed, object for cert authority
        //   noInfo: true, // only errors & warns on hot reload
        compress: false, // 服务器返回浏览器的时候是否启动gzip压缩
        stats: 'errors-only',//控制编译的时候shell上的输出内容 "minimal"，"normal"，"verbose", errors-only
        quiet: false, //当它被设置为true的时候，控制台只输出第一次编译的信息，当你保存后再次编译的时候不会输出任何内容，包括错误和警告
    },
    watch: false, // 开启监听文件更改，自动刷新
    watchOptions: {
        ignored: /node_modules/, //忽略不用监听变更的目录
        aggregateTimeout: 500, //防止重复保存频繁重新编译,500毫秒内重复保存不打包
        poll: 1000 //每秒询问的文件变更的次数
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    cacheDirectory: true,
                    presets: ["@babel/preset-env"],
                    //https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy
                    // plugins: [
                    // ["@babel/plugin-proposal-decorators", { "legacy": true }],
                    //https://babeljs.io/docs/en/babel-plugin-transform-class-properties/
                    // ["transform-class-properties", { "spec": true }]
                    // ]
                }
            },
            {
                test: /\.(png|jpg|gif|woff|svg|eot|ttf)$/,
                loader: "url-loader",
                options: {
                    limit: 8192,
                    outputPath: 'images/'
                }
            },
            {
                test: /\.(css|sass|scss)$/,
                use: [
                    'css-hot-loader',
                    MiniCssExtractPlugin.loader,
                    // "style-loader",
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ]
            }
        ]
    },
    externals: {
        // 'jquery':'window.jQuery'
    },
    plugins: pluginsList,
    // plugins: [
    //     　　  new MiniCssExtractPlugin({
    //     //   　　  filename: "[name].[chunkhash:8].css",
    //       　　  filename: "css/[name].css",
    //      　　   chunkFilename: "[id].css"
    //    　　   })
    // ]
};