import $ from 'jquery'
import './app3.css'

const html=`
<section id="app3">
    <div class="square"></div>
  </section>`
$(html).appendTo($('body>.page'))
const $square=$('#app3 .square')
const localKey='app3.active'
const active=localStorage.getItem(localKey)==='yes'//yes,no,undefined
// if(active){
//     $square.addClass('active')
// }else{
//     $square.removeClass('active')
// }
$square.toggleClass('active', active)
$square.on('click',()=>{
    // $square.toggleClass('active')
    // // 如果没有就添加，有就删掉。
    if($square.hasClass('active')){
        $square.removeClass('active')
        localStorage.setItem(localKey,'no')
    }else{
        $square.addClass("active")
        localStorage.setItem(localKey,'yes')
    }
})
