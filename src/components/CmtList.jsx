import React from 'react'

import CmtItem from '@/components/CmtItem'
// 父组件
export default class CmtList extends React.Component {
    constructor() {
        super()
        this.state = {
            CommentList: [
                { id: 1, user: 'jack1', content: 'dsfsdf' },
                { id: 2, user: 'jack2', content: '234234' },
                { id: 3, user: 'jack3', content: 'd237483df' }
            ]
        }
    }

    render() {
        return <div>
            <h1 style={ {color:'red',fontSize:'20px',fontWeight:200,textAlign:'center'} }>评论列表</h1>
            {this.state.CommentList.map(item => <CmtItem {...item} key={item.id}></CmtItem>)}
        </div>
    }
}