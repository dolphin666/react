import { log } from "util";

function Person(name,age){
    this.name = name
    this.age = age
}
Person.prototype.say=function(){
    console.log('这是 Person 的实例方法')
}
const p1 = new Person('王多多',18)
console.log(p1)

// ------------------------------------------------
console.log('-----------------------------------------')

class Animal {
    constructor(name,age){
        this.name = name,
        this.age = age
    }    
    static info = 'eee'
    jiao(){
        console.log('动物的实例方法');
    }
}

const a1 = new Animal('大黄',3)
a1.jiao()