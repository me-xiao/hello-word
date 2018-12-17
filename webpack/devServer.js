/*
 * Webpack dev Config
 * @author: weijialu(wjl152856@alibaba-inc.com)
 * @since: 2018/12/10
*/

const webpack = require('webpack'),
    webpackDevServer = require('webpack-dev-server'),
    config = require('./webpack.dev'),
    port = 9090;


const $exec=require('child_process').exec;
const open = require("open");

const fs = require('fs');
const url = require('url');
const path = require('path');

const build_path = path.join(__dirname, "../build"); //distribution目录路径


const ParseQuery = query => {
    const reg = /([^=&\s\?]+)[=\s]*([^&\s]*)/g;
    const obj = {};
    while (reg.exec(query)) {
        obj[RegExp.$1] = RegExp.$2;
    }
    return obj;
}

config.watch = true; // 开启监听文件更改

const handleParams = css =>{
    return css.replace(/(?<=([\{]))\S{1}/ig, '\n $&')
    .replace(/(?<=([,]))[\s]*(?=(["]))/ig, '\n  ')
    .replace(/[\s\S](?=([\}]))/ig, '$&\n')
}


new webpackDevServer(webpack(config), {

    // publicPath: config.output.publicPath,
    // hot: true,
    // inline: true,
    // historyApiFallback: true,
    // proxy: router,
    // quiet: false,
	// disableHostCheck: true, //webpack-dev-server 2.4.4 add host check，casuse Invalid Host header error
    // noInfo: false,
    // headers: { 'Access-Control-Allow-Origin': '*' },
    // stats: {colors: true },

    //参考：https://juejin.im/post/5bafc2556fb9a05cf3713d74
    //https://www.cnblogs.com/penghuwan/p/6941616.html
    //https://www.cnblogs.com/beka/p/8479710.html
    proxy: [
        {   path: "/api",
            target: 'http://localhost:9090',
            // pathRewrite: {'^/api' : ''},
            // changeOrigin: true,
            bypass: function(req, res, proxyOptions) {
                console.log( req.originalUrl );
                if( url.parse(req.originalUrl).pathname == '/api/set_skin' ){
                    const skin = ParseQuery( url.parse(req.originalUrl).query ).skin;
                    const params_data = JSON.parse( fs.readFileSync( path.join(__dirname, "../src/data/params.json") ) );
                    params_data.skin = skin;
                    fs.writeFileSync( path.join(__dirname, "../src/data/params.json"), handleParams( JSON.stringify( params_data ) ) );
                    res.writeHead(200, [
                        ['Content-Type', 'application/json' + '; charset=utf-8'],
                        ['Access-Control-Allow-Origin', '*'] //CORS
                    ]);
                    res.write('{"code":200,"msg":"ok!"}');
                    return res.end();
                }else if( url.parse(req.originalUrl).pathname == '/api/set_use' ){
                    const use = ParseQuery( url.parse(req.originalUrl).query ).use;
                    const params_data = JSON.parse( fs.readFileSync( path.join(__dirname, "../src/data/params.json") ) );
                    params_data.use = use;
                    console.log( handleParams(JSON.stringify( params_data )) );
                    //console.log( handleParams( JSON.stringify( params_data ) ) );
                    fs.writeFileSync( path.join(__dirname, "../src/data/params.json"), handleParams( JSON.stringify( params_data ) ) );
                    res.writeHead(200, [
                        ['Content-Type', 'application/json' + '; charset=utf-8'],
                        ['Access-Control-Allow-Origin', '*'] //CORS
                    ]);
                    res.write('{"code":200,"msg":"ok!"}');
                    return res.end();
                }else{
                    // res.writeHead(200, [
                    //     ['Content-Type', 'application/json' + '; charset=utf-8'],
                    //     ['Access-Control-Allow-Origin', '*'] //CORS
                    // ]);
                    // res.write('{"code":404}');
                    // return res.end(); 
                    // console.log( req.headers.accept );
                    // if (req.headers.accept.indexOf('html') !== -1) {
                    //     console.log('Skipping proxy for browser request.');
                    //     return "pages/index.html";
                    // }

                    console.log('404');
                    return "pages/index.html";
                }



            
            }
        }

    ],

    // watchContentBase: true,
    contentBase: build_path, //静态文件根目录
    host: '0.0.0.0',
    port: 9090, // 端口
    inline: true,
    overlay: true,//在编译出错的时候，在浏览器页面上显示错误
    // historyApiFallback: true,

    historyApiFallback:{
        index:'pages/index.html'
    },


    //   historyApiFallback: true, // true for index.html upon 404, object for multiple paths  返回404页面时定向到特定页面
    //   https: false, // true for self-signed, object for cert authority
    //   noInfo: true, // only errors & warns on hot reload
    compress: false, // 服务器返回浏览器的时候是否启动gzip压缩
    stats: 'errors-only',
    // {
    //     colors: true,
        // Config for minimal console.log mess.
        // assets: false,
        // colors: true,
        // version: false,
        // hash: false,
        // timings: false,
        // chunks: false,
        // chunkModules: false
    //},//控制编译的时候shell上的输出内容 "minimal"，"normal"，"verbose", errors-only
    quiet: false, //当它被设置为true的时候，控制台只输出第一次编译的信息，当你保存后再次编译的时候不会输出任何内容，包括错误和警告
    disableHostCheck: true, //webpack-dev-server 2.4.4 add host check，casuse Invalid Host header error // 允许绑定本地域名
    // allowedHosts: [
    //     'xxx.xxx.com'
    // ],// 允许绑定本地域名
    headers: { 'Access-Control-Allow-Origin': '*' },


}).listen(port, '0.0.0.0', function(err, result){
    if(err){
        console.log(err);
    }
    console.log(`Hi,man, Now listening at localhost:${port}!`);
    open( `http://127.0.0.1:${port}/pages/index.html` );
});



// devServer: {
//     //参考：https://juejin.im/post/5bafc2556fb9a05cf3713d74
//     proxy: { // proxy URLs to backend development server
//         '/api': 'http://localhost:9090'
//     },
//     contentBase: dev_path, //静态文件根目录
//     port: 9090, // 端口
//     host: '0.0.0.0',
//     hot: true,
//     overlay: true,
//     //   historyApiFallback: true, // true for index.html upon 404, object for multiple paths //https://blog.csdn.net/hansexploration/article/details/80857116
//     //   https: false, // true for self-signed, object for cert authority
//     //   noInfo: true, // only errors & warns on hot reload
//     compress: false // 服务器返回浏览器的时候是否启动gzip压缩
// }