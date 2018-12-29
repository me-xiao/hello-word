/*
 * Webpack dev Config
 * @author: weijialu(wjl152856@alibaba-inc.com)
 * @since: 2018/12/10
*/
const config_dev = require('./webpack.dev');
const config_main = require('./webpack.main');
const config = [ config_dev, config_main ];
module.exports = config;