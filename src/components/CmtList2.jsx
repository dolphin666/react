import React from 'react'

import CmtItem2 from '@/components/CmtItem2'

import cssobj from '@/css/cmtlist.scss'
import 'bootstrap/dist/css/bootstrap.css'
// 父组件
export default class CmtList2 extends React.Component {
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
            <h1 className={cssobj.title}>评论列表</h1>
            {/* <button className={[bootcss.btn,bootcss['btn-danger']].join(' ')}>按钮</button> */}
            <button className='btn btn-primary'>按钮哈哈</button>
            <div className='panel panel-primary'></div>
            {this.state.CommentList.map(item => <CmtItem2 {...item} key={item.id}></CmtItem2>)}
        </div>
    }
}