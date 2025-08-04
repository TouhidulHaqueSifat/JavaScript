console.log("Day 12 - JavaScript Objects");

let user = {
    name : "XYZ",
    age : 20,
    "is admin": true,
    isActive : false,
};
console.log(user.name);
console.log(user.age);
console.log(user["is admin"]);
console.log(user.isActive);

user["is admin"] = false;
console.log(user["is admin"]);

console.log(user);
let someKey = 'age';
user[someKey] = 80;
console.log(user[someKey]);

/*let color = prompt("Which is your favourite color?");
let favColor = {
    color : color,
}
console.log(favColor);*/

//Constructor Function

function Car(name, model){
    this.name = name;
    this.model = model;
}

const bmwCar = new Car('bmw','X5');
const audiCar = new Car('audi','A8');
console.log(bmwCar);
console.log(audiCar);

console.log(audiCar instanceof Car);

const Person = new Object()
Person.name = "xyz";
Person.age = 76;
console.log(Person);

// Factory

function createUser(name){
    this.name = name;
    return{
        greet : () =>{
            console.log(this.name);
        }
    }
}
const user1 = new createUser("XYZ");
console.log(user1);
user1.greet();

let profile = {
    name:"XYZ",
    company:"ABC",
    message : function(){
        console.log(`${this.name} works at ${this.company}`);
    },
    address: {
        city: "abcd",
        pin: 75476,
        state: "abcd",
        country: "fhfgh",
        greeting: function(){
            console.log(`Welcome to ${this.country}`);
        },
    }
}

for(key in profile){
    console.log(key);
    //console.log(profile[key]);
}
console.log(Object.keys(profile).length)
console.log(profile.address.greeting())
