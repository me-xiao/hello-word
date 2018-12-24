
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
 
 export default ajax;