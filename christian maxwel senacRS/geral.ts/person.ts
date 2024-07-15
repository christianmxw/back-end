class Person {
    name: string;
    age: number;
    constructor(name:string, age: number) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} yeas old.`)
    }
}
const person = new Person("Christian", 19)
person.greet();