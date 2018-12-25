require('../sass/params.css');
import 'highlight.js/styles/atom-one-light.css';
import hljs from 'highlight.js/lib/highlight';
import _json from 'highlight.js/lib/languages/json';
import _javascript from 'highlight.js/lib/languages/javascript';
import _c from 'highlight.js/lib/languages/1c';
hljs.registerLanguage('javascript', _javascript);
hljs.registerLanguage('json', _json);
hljs.registerLanguage('1c', _c);
//参考：
//https://highlightjs.org/
//https://www.bootcdn.cn/highlight.js/
//https://www.cnblogs.com/moqiutao/p/6541089.html


//xhr
import ajax from './utils/ajax.js';
// const ajax = require( './utils/ajax.js' );

const params_code = {
    '1': params => {
        let str = JSON.stringify( params );
        const handleParams = str =>{
            return str.replace(/(?<=([\{]))\S{1}/ig, '\n  $&')
            .replace(/(?<=([,]))[\s]*(?=(["]))/ig, '\n  ')
            .replace(/[\s\S](?=([\}]))/ig, '$&\n')
        }
        str = handleParams( str );
        str = `//require式-开发源码
const VBE = require("VBE");
VBE(${str})`;
        return str;
    },
    '2': params =>{
        let str = JSON.stringify( params );
        const handleParams = str =>{
            return str.replace(/(?<=([\{]))\S{1}/ig, '\n  $&')
            .replace(/(?<=([,]))[\s]*(?=(["]))/ig, '\n  ')
            .replace(/[\s\S](?=([\}]))/ig, '$&\n')
        };
        str = handleParams( str );
        str = `//SDK抽离式-页面源码
<!DOCTYPE html><html><head>
<meta charset="UTF-8">
    <title>page</title>
</head>
<body>
    <script type="text/javascript" src="//g.alcdn.con/VBE/0.0.1/js/.js"></script>
    <script>
        new VBE(${str})
    </script>
</body>
</html>`;
        return str;
    }
}

const bindFn = {
    submit: () => {
        const params = {};
        document.querySelectorAll('.item_params').forEach(item => {
            const value = item.value;
            const key = item.name;
            if (value) {
                params[key] = value;
            }
        })
        ajax({
            url: '/api/set_params',
            data: params,
            dataType: 'json',
            success: (res) => {
                if (res.code == 200) {
                    alert('参数提交成功')
                }
                bindFn.get_params();
            },
            error: (msg) => {}
        });
    },
    get_params: () => {
        ajax({
            url: '/api/get_params',
            dataType: 'json',
            success: (res) => {
                console.log(res);
                if (res.code != 200) {
                    alert('成功选择：集成方式' + use);
                    return;
                }
                const data = res.data;
                const items = `<li><span>顶部栏HTML</span>
                        <textarea placeholder="请输入顶部栏HTML" name="top_html" class="item_params">${data.top_html || ''}</textarea>
                    </li>
                    <li><span>底部栏HTML</span>
                        <textarea placeholder="请输入底部栏HTML" name="bottom_html" class="item_params">${data.bottom_html || ''}</textarea>
                    </li>
                    <li>
                        <span>底部栏高度</span>
                        <input type="text" value="" placeholder="请输入底部栏高度" class="item_params" />
                    </li>
                    <li>
                        <span>模块map.js</span>
                        <input type="text" value="" placeholder="请输入模块map.js" class="item_params" />
                    </li>`;
                document.querySelector('#items').innerHTML = items;



                



                document.querySelector('#Usage').textContent = params_code[ data.use ]( data );
                hljs.highlightBlock( document.querySelector('pre') );
                // hljs.highlightBlock( document.querySelectorAll('pre')[1] );
            },
            error: (msg) => {}
        });
    }
}
bindFn.get_params();

document.body.addEventListener('click', function (e) {
    const evt = e || window.event;
    let target = evt.target || evt.srcElement;
    while (target && target != document) {
        const className = target.className;
        const id = target.id;
        if (className === 'item') {

        } else if (id === 'next') {
            // if( !switchUse ){
            //     alert( '请选择风格' );
            //     return;
            // }
            bindFn.submit();
        }
        target = target.parentNode;
    }
});