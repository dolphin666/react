import React from 'react'

import 'bootstrap/dist/css/bootstrap.css'

export default class BindEvent extends React.Component {
    constructor() {
        super()
        this.state = {
            msg:'haha'
        }
    }
    render() {
        return <div>
            BindEvent 组件
            <hr />
            {/* <button onClick={function () { console.log('haha');}}>按钮</button> */}
            <button className='btn primary' onClick={()=>this.myclickHandler('猪头')}>按钮</button>
            <h3>{this.state.msg}</h3>
        </div>
    }
    myclickHandler = (arg1)=>{
        // console.log('5555555555555555555555'+arg1)
        // this.state.msg = '00000000'
        this.setState({
            msg:'大爷滴·····'+arg1
        })
    }
}