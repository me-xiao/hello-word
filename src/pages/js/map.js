require('../sass/map.css');

import 'highlight.js/styles/atom-one-light.css';
import hljs from 'highlight.js/lib/highlight';
import _json from 'highlight.js/lib/languages/json';
import _javascript from 'highlight.js/lib/languages/javascript';
import _c from 'highlight.js/lib/languages/1c';
hljs.registerLanguage('javascript', _javascript);
hljs.registerLanguage('json', _json);
hljs.registerLanguage('1c', _c);
document.querySelector('pre').textContent = `
//对象声明
const modules = {
    //方法1：
    monopoly : {
        module: require( '@ali_silver-lottery-monopoly' ),//模块包：完成-业务逻辑
        schema: require( '@ali_silver-lottery-monopoly/schema' )//模块包-schema：完成包配置描述
    },
    //方法2：
    swtich : {
        module: require( './act/swtich.js' ),//业务文件：完成-业务逻辑
        schema: require( './act/swtich_schema.js' )//schema文件：完成包配置描述
    },
    //方法3：
    record : {
        module: Function,//ES6 class函数体( class Record(params){} )：完成-业务逻辑
        schema: {}//json对象-schema：完成包配置描述
    },
}
window.__modules__map = modules;
//注：该示例为开发源码，未经打包，集成用户可使用本引擎打包(命令：npm run map)，也可使用自身业务脚手架进行打包
//切勿直接使用！！！
//调用渲染(例)：new modules.monopoly.module()

`
hljs.highlightBlock( document.querySelector('pre') );
