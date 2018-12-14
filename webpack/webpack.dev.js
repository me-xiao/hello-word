/*
 * Webpack Dev Config
 * @author: weijialu(wjl152856@alibaba-inc.com)
 * @since: 2018/12/10
*/
const config = require("./base.config"),
    webpack = require("webpack"),
    path = require('path');
    HTMLWebpackPlugin = require('html-webpack-plugin');
    const fs = require('fs');
    const HtmlWebpackPlugin = require('html-webpack-plugin');

    const dev_path = path.join(__dirname, "../src/"); //

    config.devtool =  'cheap-source-map';//cheap-module-eval-source-map/cheap-source-map



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
                    chunks: [ pageJs ], //'modules/'+item.match(/(.[^\.]+)\.html/)[1]
                    chunksSortMode: "manual"
                    //参考排序：https://segmentfault.com/q/1010000008621650?_ea=1700642
                    //参考排序：https://segmentfault.com/a/1190000007294861
                })
                pluginsList.push(htmlItem);
            }
        })
    }
    htmlPluginsList( path.join(dev_path, "pages/" ));
console.log( path.join(dev_path, "pages/" ));



    const entryList = {};
    let getEntryList = path => {
        let files = fs.readdirSync(path);
        files.forEach((item, index) => {
            //let stat = fs.statSync(path + item);
            let arr = []; //定义一个对象存放文件的路径和名字
            if ((/(\.js)$/).test(item)) {
                let pageJs = item.match(/(.+)(\.js)$/).length ? item.match(/(.+)(\.js)$/)[1] : '';
                console.log('7899'+pageJs);
                entryList[ pageJs ] = `./src/pages/js/${item}`;
            }
        })

    }
    getEntryList( path.join(__dirname, "../src/pages/js") );
    console.log( entryList );


    config.entry = entryList;

    for (const key in config.entry){
        let value = config.entry[ key ];
        if(!Array.isArray( value )){
            value = [value]
        }
        value.unshift('webpack-dev-server/client?http://localhost:9090',
        'webpack/hot/dev-server');
        config.entry[ key ] = value;
    }

// config.output['publicPath'] = 'http://localhost:4000/static/';


config.mode = 'development';

pluginsList.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
        debug: true
    })
);

config.plugins = pluginsList;

module.exports = config;