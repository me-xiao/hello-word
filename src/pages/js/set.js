require('../sass/set.css');


//xhr

//创建ajax函数
const ajax = function (_options) {
     const options = _options || {};
     options.type = (options.type || 'GET').toUpperCase();
     options.dataType = options.dataType || 'javascript';
 
     //格式化参数
     const formatParams = function (data) {
         let arr = [];
         for (let name in data) {
             arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
         }
         //arr.push(('v=' + Math.random()).replace('.',''));
         return arr.join('&');
     }
 
     const params = options.data ? formatParams(options.data) : '';
 
 
     //创建-第一步
     let xhr;
     if (window.XMLHttpRequest) {
         xhr = new XMLHttpRequest();
     } else {
         xhr = ActiveXObject('Microsoft.XMLHTTP');
     }
 
     //在响应成功前设置一个定时器（响应超时提示）
     const timer = setTimeout(function () {
         //让后续的函数停止执行
         xhr.onreadystatechange = null;
         console.log('timeout:' + options.url);
         options.error && options.error(status);
     }, options.timeout || 8000);
 
 
     //接收-第三步
     xhr.onreadystatechange = function () {
         if (xhr.readyState == 4) {
             clearTimeout(timer);
             const status = xhr.status;
             if (status === 200 || status === 304) {
                 const resData = options.dataType === 'json' ? JSON.parse(xhr.responseText) : xhr.responseText;
                 options.success && options.success(resData, xhr.responseXML);
             } else {
                 options.error && options.error(status);
             }
         }
     }
     xhr.withCredentials = true;
     //连接和发送-第二步
     if (options.type == 'GET') {
         xhr.open('GET', options.url + '?' + params, true);
         //xhr.setRequestHeader("Accept-Encoding", "gzip");
         xhr.send(null);
     } else if (options.type == 'POST') {
         xhr.open('POST', options.url, true);
         //设置表单提交时的内容类型
         xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
         xhr.send(params);
     }
 }
 

const bindFn = {
    btn: skin =>{
        ajax({
          url: '/api/set_skin',
          data: {
              skin: skin,
              b: 458
          },
          dataType: 'json',
          success: (res) => {
               if( res.code == 200 ){
                    alert( '成功选择：风格' + skin );
                    window.location.href = '/pages/options.html';
               }
          },
          error: (msg) => {}
      });
    }
}

let switchSkin;
document.body.addEventListener('click',function(e){
    const evt = e || window.event;
    let target = evt.target || evt.srcElement;
    while( target && target != document ){
        const className = target.className;
        const id = target.id;
        if( className === 'item' ){
            switchSkin = target.dataset.skin;
            document.querySelectorAll( '.on' ).forEach(item=>{
                const classNameArr = item.className.split(' ');
                console.log( classNameArr )
                const index = classNameArr.indexOf( 'on' );
                classNameArr.splice( index, 1 );
                item.className = classNameArr.join(' ');
            });
            target.className = target.className ? target.className + ' on' : 'on';
    
            // bindFn.item( type );
        } else if( id === 'next' ){
            if( !switchSkin ){
                alert( '请选择风格' );
                return;
            }
            bindFn.btn( switchSkin );
        }
        target = target.parentNode;
    }
 });