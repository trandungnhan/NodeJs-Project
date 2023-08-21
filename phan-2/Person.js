// Thuoc tinh va phuong thuc

class Person{


    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    // method
    talk(friendName){
        console.log("Hello ", friendName);
    }

    getPersonalInfo(){
        console.log("My name is: ", this.name);
        console.log("My age: ", this.age);
    }
}



// let tun = new Person("Tun", 18)
// tun.getPersonalInfo();
// tun.talk("Ti and Teo")
// console.log(tun.name);
// console.log(tun.age);
module.exports = Person;

