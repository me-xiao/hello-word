//代码块高亮
import 'highlight.js/styles/atom-one-light.css';
import hljs from 'highlight.js/lib/highlight';
import _javascript from 'highlight.js/lib/languages/javascript';
import _json from 'highlight.js/lib/languages/json';
import _css from 'highlight.js/lib/languages/css';
import _c from 'highlight.js/lib/languages/1c';
hljs.registerLanguage('javascript', _javascript);
hljs.registerLanguage('json', _json);
hljs.registerLanguage('css', _css);
hljs.registerLanguage('1c', _c);
//参考：
//https://highlightjs.org/
//https://www.bootcdn.cn/highlight.js/
//https://www.cnblogs.com/moqiutao/p/6541089.html
 
export default hljs;