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
    const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

    const dev_path = path.join(__dirname, "../src/"); //

    //参考：https://www.cnblogs.com/hhhyaaon/p/5657469.html
    //http://www.cnblogs.com/wangyingblog/p/7027540.html
    config.devtool =  'cheap-module-source-map';//cheap-source-map




    const skin_data = JSON.parse( fs.readFileSync( path.join(__dirname, "../src/data/skin.json") ) );
    const dom_data = JSON.parse( fs.readFileSync( path.join(__dirname, "../src/data/dom.json") ) );

    const js = `const dom = ${JSON.stringify( dom_data )};
        export default dom;
        `

    fs.writeFileSync( path.join(__dirname, "../src/data/dom.js"), js );

    console.log( dom_data[ skin_data.skin ] );

    const pluginsList = config.plugins;

    let htmlPluginsList = (path) => {
        let files = fs.readdirSync(path);
        files.forEach((item, index) => {
            //let stat = fs.statSync(path + item);
            let arr = []; //定义一个对象存放文件的路径和名字
            if ((/(\.html)$/).test(item)) {
                //'modules/'+item.match(/(.[^\.]+)\.html/)[1]
                let pageJs = item.match(/(.[^\.]+)\.html/).length ? 'js/' + item.match(/(.[^\.]+)\.html/)[1] : '';
                console.log('9899'+pageJs);
                let htmlItem = new HtmlWebpackPlugin({
                    //template: './DEV/' + item,
                    template: 'html-withimg-loader!' + dev_path + item,
                    filename: './pages/' + item,
                    inject: 'body',
                    chunks: ['index'], //'modules/'+item.match(/(.[^\.]+)\.html/)[1]
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

// config.output['publicPath'] = 'http://localhost:4000/static/';

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

config.plugins = pluginsList;

module.exports = config;