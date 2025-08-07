"use strict" // ! Strict Mode

console.log("Day 13: The this keyword");
console.log(window);


// * Implict Binding

const tom = {
    name : "Tom",
    age : 10,
};

const jerry = {
    name : "Jerry",
    age : 7,
};

let greetme = function(obj){
    obj.logMessage = function(){
        console.log(`${this.name} is ${this.age}`);
    }
    console.log(obj);
}
greetme(tom);
tom.logMessage();

// ? Inside Function

function sayName(){
    console.log("This inside a fuction", this);

}
sayName();
function outer(a){
    console.log("This inside an outer function", this);

    return function inner(b){
        console.log("This inside an inner function", this);
    }
}

let outerResult = outer(5);
outerResult(3);


// Inside Arrow function

// ! Arrow function does not have  own 'this'. This is always connected to the parent scope of the place where we define arrow function.
/*const food = {
    name : "mango",
    color : "yellow",

    /*getDesc : () =>{
        `${this.name} is ${this.color}`; // ! give undifined
    }*/
   /*getDesc : function(){
    return `${this.name} is ${this.color}`;
   }
};*/

// * solve the above problem using arrow function

const food = {
    name : "mango",
    color : "yellow",

    getDesc : function(){
        return () =>{
            return`${this.name} is ${this.color}`
        }       
    }
   
};
const get = food.getDesc();
console.log(get());
console.log(food.getDesc());

// ! Note: With global scope 'this' always is reffered to the window object for browser environment for node environment to the global object. For standalone function in strict mode it always point to undefined for non-strict mode is point to the window object. For implicit binding wheneverr you are calling the object name dot the method you have to check what is that particular method is about if the method is standard javascript function and non arrow function and if the function has the 'this' keyword the 'this' keyword is bound to the object on which you are calling the function or the method if the function happen to be an arrow function whether it is inside an object or outside an object wherever it is it all depend where the arrow function is lexically placed define in your code check the parent scope of the place where the arrow function is defined because arrow function does not have its own 'this' the 'this' always refer for an arrow functon to the parent scope of the scope where arrow function is defined.

// Explicit Binding -> call, apply, bind (method)

// The call method

function greeting(hobby1, hobby2){
    //console.log(`Hello, ${this.name} belongs to ${this.address}`);
    console.log(this.name + ' likes ' + hobby1 + ' , ' + hobby2);
}
const user = {
    name : "Spider Man",
    address : "Newyork",
};

greeting.call(user, "Photography", "Scince & Invention");
 
// * The apply method
const argumentArray = ['Photography', "Scince & Invention"];
greeting.apply(user, argumentArray);

// * The bind method
const newFn = greeting.bind(user, argumentArray);
newFn();
