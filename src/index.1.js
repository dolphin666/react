//假设 main.js 还是我们的入口文件
console.log('abc')

import React from 'react'; //创建组件
import ReactDOM from 'react-dom'

// 创建虚拟DOM元素

const mydiv = <div id='mydiv' title='div aaa'>这是一个div</div>

ReactDOM.render(mydiv,document.getElementById('app'))
