const path = require('path');
const fs = require('fs');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const pluginsList = [];
let htmlPluginsList = (path) => {
    let files = fs.readdirSync(path);
    files.forEach((item, index) => {
        //let stat = fs.statSync(path + item);
        let arr = []; //定义一个对象存放文件的路径和名字
        if( (/(\.html)$/).test(item) ){
            //'modules/'+item.match(/(.[^\.]+)\.html/)[1]
            let pageJs = item.match(/.([^\/]+)\.html/).length ? 'modules/' + item.match(/.([^\/]+)\.html/)[1] : '';
            console.log( pageJs );
            //console.log('9899'+pageJs);
            let htmlItem = new HtmlWebpackPlugin({
                    //template: './DEV/' + item,
                    template: 'html-withimg-loader!' + './DEV/' + item,
                    filename: './' + item,
                    inject: 'body',
                    chunks: ['CMD', pageJs],//'modules/'+item.match(/(.[^\.]+)\.html/)[1]
                    chunksSortMode: "manual"
                    //参考排序：https://segmentfault.com/q/1010000008621650?_ea=1700642
                    //参考排序：https://segmentfault.com/a/1190000007294861
                })
            console.log(item);
            pluginsList.push(htmlItem);
        }
    })
}

htmlPluginsList( __dirname + '/dev' );