/*
 * Webpack Dev Config
 * @author: weijialu(wjl152856@alibaba-inc.com)
 * @since: 2018/12/10
 */
const webpack = require("webpack");
const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const lodash = require("lodash");
const config = lodash.cloneDeep( require("./base.config") );
const dev_path = path.join(__dirname, "../src/"); //
config.devtool = 'cheap-module-eval-source-map/'; //cheap-module-eval-source-map/cheap-source-map
const pluginsList = config.plugins;
let htmlPluginsList = (path) => {
    let files = fs.readdirSync(path);
    files.forEach((item, index) => {
        //let stat = fs.statSync(path + item);
        let arr = []; //定义一个对象存放文件的路径和名字
        if ((/(\.html)$/).test(item)) {
            //'modules/'+item.match(/(.[^\.]+)\.html/)[1]
            let pageJs = item.match(/(.+)(\.html)$/).length ? item.match(/(.+)(\.html)$/)[1] : '';
            let htmlItem = new HtmlWebpackPlugin({
                //template: './DEV/' + item,
                template: 'html-withimg-loader!' + path + item,
                filename: './pages/' + item,
                inject: 'body',
                chunks: [pageJs], //'modules/'+item.match(/(.[^\.]+)\.html/)[1]
                chunksSortMode: "manual"
                //参考排序：https://segmentfault.com/q/1010000008621650?_ea=1700642
                //参考排序：https://segmentfault.com/a/1190000007294861
            })
            pluginsList.push(htmlItem);
        }
    })
}
htmlPluginsList(path.join(dev_path, "pages/"));
console.log(path.join(dev_path, "pages/"));
const entryList = {};
let getEntryList = path => {
    let files = fs.readdirSync(path);
    files.forEach((item, index) => {
        let arr = []; //定义一个对象存放文件的路径和名字
        if ((/(\.js)$/).test(item)) {
            let pageJs = item.match(/(.+)(\.js)$/).length ? item.match(/(.+)(\.js)$/)[1] : '';
            console.log('7899' + pageJs);
            entryList[pageJs] = `./src/pages/js/${item}`;
        }
    })
}
getEntryList(path.join(__dirname, "../src/pages/js"));
console.log(entryList);
config.entry = entryList;
// for (const key in config.entry) {
//     let value = config.entry[key];
//     if (!Array.isArray(value)) {
//         value = [value]
//     }
//     value.unshift('webpack-dev-server/client?http://localhost:9090',
//         'webpack/hot/dev-server');
//     config.entry[key] = value;
// }
// config.output['publicPath'] = 'http://localhost:4000/static/';
config.mode = 'development';
// pluginsList.push(
//     new webpack.HotModuleReplacementPlugin(),
//     new webpack.NoEmitOnErrorsPlugin(),
//     new webpack.LoaderOptionsPlugin({
//         debug: true
//     })
// );
config.plugins = pluginsList;
config.devtool = 'eval-source-map'; // 指定加source-map的方式
config.watch = false; // 开启监听文件更改，自动刷新
config.watchOptions = {
    ignored: /(node_modules|data)/, //忽略不用监听变更的目录
    aggregateTimeout: 500, //防止重复保存频繁重新编译,500毫秒内重复保存不打包
    poll: 1000 //每秒询问的文件变更的次数
};
module.exports = config;