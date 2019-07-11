
class Person {
    constructor(name='Anonymous', age=0) {
       this.name = name
       this.age = age
    }
    getGreeting() {
        return `Hello ${this.name}!`
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age)
        this.major = major
    }
    hasMajor() {
        return !!this.major
    }
    getDescription() {
        let description = super.getDescription()
        
        if(this.hasMajor()) {
            description += ` Their major is ${this.major}`
        }
        
        return description
    }
}

const me = new Student('Nick Joyce', 34, 'Computer Science')
// console.log(me.getDescription())

const other = new Student()
// console.log(other.hasMajor())

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age) 
        this.homeLocation = homeLocation
    }
    getGreeting() {
        let greeting = super.getGreeting() 
        if(this.homeLocation) {
            greeting += ` I am visiting from ${this.homeLocation}`
           
        }
        return greeting 
    }
}

const traveller = new Traveller('Nick Joyce', 34, 'Bath')
console.log(traveller.getGreeting())

const traveller2 = new Traveller('anonymous', 'anonymous', 'nowhere')
console.log(traveller2.getGreeting())