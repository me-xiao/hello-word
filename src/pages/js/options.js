require('../sass/options.css');
//xhr
import ajax from './utils/ajax.js'
 

const bindFn = {
    btn: use =>{
        ajax({
          url: '/api/set_use',
          data: {
              use: use
          },
          dataType: 'json',
          success: (res) => {
               if( res.code == 200 ){
                    alert( '成功选择：集成方式' + use );
                    window.location.href = '/pages/params.html';
               }
          },
          error: (msg) => {}
      });
    }
}

let switchUse;
document.body.addEventListener('click',function(e){
    const evt = e || window.event;
    let target = evt.target || evt.srcElement;
    while( target && target != document ){
        const className = target.className;
        const id = target.id;
        if( className === 'item' ){
            switchUse = target.dataset.use;
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
            if( !switchUse ){
                alert( '请填写相关配置参数' );
                return;
            }
            bindFn.btn( switchUse );
        }
        target = target.parentNode;
    }
 });