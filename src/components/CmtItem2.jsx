import React from 'react'

import cssobj from '@/css/cmtitem.scss'
console.log(cssobj);

// 评论项子组件（function 构造函数）
export default function CmtItem2(props) {
    return <div className={cssobj.cmtbox}>
        <h1 className={cssobj.title} className='test'>评论人：{props.user}</h1>
        <p>评论内容：{props.content}</p>
    </div>
}