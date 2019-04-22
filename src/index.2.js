import React from 'react'; //创建组件
import ReactDOM from 'react-dom'

let a = 10;
let str = '你好，中国';
let boo = true;
let title = '999';
const h1 = 'O(∩_∩)O哈哈~';
const arr = [
    <h2>这是h2</h2>,
    <h3>这是h3</h3>
]
// 方案1
const arrStr = [
    'dsjfni','dsfsd','u87yihu','7868785'
]
const nameArr = []
arrStr.forEach(item=>{
    const temp = <h5 key={item}>{item}</h5>
    nameArr.push(temp)
})
const res= arrStr.map(item =>{
    return item + '~~'
})
console.log(res)
ReactDOM.render(<div>
    {a + 4}
    <hr />
    {str}
    <hr />
    {boo ? '条件为真' : '条件为假'}
    <hr />
    <p title={title}>这是p标签</p>
    <hr />
    {h1}
    <hr />
    {arr}
    <hr />
    {nameArr}
    <hr />
    {arrStr.map(item=> <h3 key={item}>{item}</h3> )}
</div>, document.getElementById('app'))
