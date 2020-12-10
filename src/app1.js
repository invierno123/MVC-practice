
import $ from 'jquery'

const eventsBus=$(window)
//数据相关->m;视图相关->v;其他->c
const m={
    data:{
//初始化数据
m:parseInt(localStorage.getItem('m'))
    },
    create(){},
    delete(){},
    update(data){
        Object.assign(m.data,data)
        eventsBus.trigger('m:updated')
        localStorage.setItem('m',m.data.m)
    },
    get(){}
}
const v={
el:null,
html:` 
<div>
<div id="value">{{n}}</div>
<button id="add">+1</button>
<button id="minus">-1</button>
<button id="mul">*2</button>
<button id="divide">÷2</button>
</div>`,
init(container){
    v.el=$(container)
    
},
render(n){
    if(v.el!==null) v.el.empty()
    $(v.html.replace('{{n}}',n))
    .appendTo(v.el)
}
}
//第一次渲染HTML

const c={
   
    init(container){
    v.init(container)
    v.render(m.data.m)
    c.autoBindEvents()
    eventsBus.on('m:updated',()=>{
        v.render(m.data.m)
    })
},
events:{
'click #add':'add',
'click #minus':'minus',
'click #mul':'mul',
'click #divide':'div'
},
   add(){
       m.update({m:m.data.m + 1})
   },
   minus(){
    m.update({m:m.data.m-1})
   },
   mul(){
    m.update({m:m.data.m*2})
   },
   div(){
    m.update({m:m.data.m/2})
   },
   autoBindEvents(){
     for(let key in c.events){
        const value=c[c.events[key]]
        const spaceIndex=key.indexOf(' ')
         const part1=key.slice(0,spaceIndex)
         const part2=key.slice(spaceIndex+1)
         v.el.on(part1,part2,value)
     }  
   }
   
}

export default c





