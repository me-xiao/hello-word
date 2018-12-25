require('../sass/set.css');

//xhr
import ajax from './utils/ajax.js';
 

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
                const index = classNameArr.indexOf( 'on' );
                classNameArr.splice( index, 1 );
                item.className = classNameArr.join(' ');
            });
            target.className = target.className ? target.className + ' on' : 'on';
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