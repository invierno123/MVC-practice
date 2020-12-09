import './app2.css'
import $ from 'jquery'

const $tabBar=$("#app2 #table-bar")
const $tabContent=$("#app2 #table-content")

$tabBar.on("click","li",e=>{
    const $li= $(e.currentTarget)
    $li.addClass("selected")
    .siblings().removeClass("selected")
    const index=$li.index()
    $tabContent.children()
    .eq(index).addClass('active')
    .siblings().removeClass('active')
    // 不要用.css或者.show()和.hide()来实现，
    // 通过样式与形式分离来实现，方便以后的更改。
})
$tabBar.children().eq(0).trigger('click')
