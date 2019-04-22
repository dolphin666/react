
class Person{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    sayHello(){
        console.log('大家好');
    }
}

class American extends Person{
    constructor(name,age){
        super(name,age)
    }
}

const a1 = new American('Jack',20)
console.log(a1)

class Chinese extends Person{
    constructor(name,age,IDNumber){
        super(name,age)
        this.IDNumber = IDNumber
    }
}

const c1 = new Chinese('张三',25,'238749832648632874932')
console.log(c1)