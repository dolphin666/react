import React from 'react'; //创建组件
// import React,{Component} from 'react'; //创建组件
import ReactDOM from 'react-dom';

import Hello from '@/components/Hello';
// import '@/class-es7';

// class 关键字创建组件
class Movie extends React.Component{
    constructor(){
        super()
        this.state = {
            msg : "我是Movie 组件"
        }
    }
    render(){
        this.state.msg = 'I was been changed'
        return <div>
            this is a Movie! -- {this.props.name} -- {this.props.age}
            <h3>{this.state.msg}</h3>
        </div>
    }
}

const user={
    name:'大黄',
    age:3243,
    gender:'雄'
}

ReactDOM.render(<div>
    <Movie {...user}></Movie>
    {/* <Hello {...user}></Hello>
    <Movie></Movie> */}
</div>, document.getElementById('app'))
