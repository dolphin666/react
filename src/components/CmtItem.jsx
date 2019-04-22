import React from 'react'

// 评论项子组件（function 构造函数）
export default function CmtItem(props) {
    return <div>
        <h5>评论人：{props.user}</h5>
        <p>评论内容：{props.content}</p>
    </div>
}