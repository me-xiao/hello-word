require('../sass/index.css');
import hljs from './comp/highlight';
import formatParams from './utils/formatParams';

 const params = {
     "skin":"3",
      "use":"2",
      "top_html":"<div class=\"header\">\n    <h1>欢迎使用VBE-可视化搭建引擎系统</h1>\n</div>",
      "bottom_html":"<div class=\"footer\">版权所有：VBE</div>",
      "traget_dom":"document.body"
    };
 let str = JSON.stringify( params );
 str = formatParams( str );

document.querySelector('pre').textContent = `//require式-开发源码
const VBE = require("VBE");
VBE(${str})\n\n\n\n\n\n\n\n\n
`;

document.querySelectorAll('pre')[1].textContent = `//SDK抽离式-页面源码
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
</html>  
`;
hljs.highlightBlock( document.querySelector('pre') );
hljs.highlightBlock( document.querySelectorAll('pre')[1] );

document.body.addEventListener('click',function(e){
     const evt = e || window.event;
     let target = evt.target || evt.srcElement;
     while( target && target != document ){
         const id = target.id;
         if( id === 'sdk' ){
              window.location.href = '/pages/set.html';
         } else if( id === 'map' ){
          window.location.href = '/pages/map.html';
         }
         target = target.parentNode;
     }
  });