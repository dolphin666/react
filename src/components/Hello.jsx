import React from 'react'; //创建组件

export default function Hello(props){
    return <div>this is a Div -- {props.name} -- {props.age} -- {props.gender}</div>
}
