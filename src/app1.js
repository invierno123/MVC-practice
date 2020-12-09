
import $ from 'jquery'

const $button1=$('#add')
const $button2=$('#minus')
const $button3=$('#mul')
const $button4=$('#divide')
const $value=$('#value')
const m=localStorage.getItem('m')
$value.text(m||100)
let n=parseInt($value.text())

const fn=()=>{
    localStorage.setItem('m',n)
    $value.text(n)
}
$button1.on('click',()=>{
    n+=1
   fn()
})
$button2.on('click',()=>{
    n-=1
   fn()
})
$button3.on('click',()=>{
    n*=2
   fn()
})
$button4.on('click',()=>{
    n/=2
    fn()
})