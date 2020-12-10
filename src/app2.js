import './app2.css'
import $ from 'jquery'
const eventsBus=$(window)

const m={
  data:{
//初始化数据
index:parseInt(localStorage.getItem('app2.index'))||0
  },
  create(){},
  delete(){},
  update(data){
      Object.assign(m.data,data)
      eventsBus.trigger('m:updated')
      localStorage.setItem('index', m.data.index)
  },
  get(){}
}
const v={
  el:null,
  html:(index)=>{
    return ` 
  <div>
<ol id="table-bar">
<li class="${index === 0 ? 'selected' : ''}" data-index="0">区域1</li>
<li class="${index === 1 ? 'selected' : ''}" data-index="1">区域2</li>
</ol>
<ol id="table-content">
<li class="${index === 0 ? 'active' : ''}">第一部分的内容</li>
<li class="${index === 1 ? 'active' : ''}">第二部分的内容</li>
</ol>
</div>`},
  init(container){
      v.el=$(container)
      
  },
  render(index) {
    if (v.el.children.length !== 0) v.el.empty()
    $(v.html(index)).appendTo(v.el)
  }
  }
  const c={
   
    init(container){
    v.init(container)
    v.render(m.data.index)
    c.autoBindEvents()
    eventsBus.on('m:updated',()=>{
        v.render(m.data.index)
       
      })
},
events:{
'click #table-bar li':'x',
},
   x(e){
   const index=parseInt(e.currentTarget.dataset.index)
   m.update({index: index})
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
