// Function

function addSum(a, b){
    return a+b;
}

let sum = addSum(2, 3);
console.log(sum);

// We can do this thing in different way

let Sum = function addSum(a, b){
    return a*b;
}

console.log(Sum(2,3));



// Callback function
const f = true;
function foo(func){
    console.log("print 1");

    if(!f) func();
};

foo(function(){
    console.log("print 2");
});

/*let f = function(){
    console.log("print 2");
};

foo(f);*/

// Pure function

/* PURE FUNCTION IS A FUNCTION THAT RETURNS OR THAT PROVIDES THE SAME OUTPUT FOR THE SAME INPUT*/ 

function greeting(name){
    return `Hello ${name}`;
}
console.log(greeting("X"));

//Higher order Function

// 1st way like callback fuction

function getFruit(func){
    func();
}

getFruit(function(){
    console.log("Banana");
});

// 2nd way return the function
// Use to build wrapper

function returnFunc(){
    return function(){
        console.log("Orange");
    }
};

const retUFun = returnFunc();
retUFun();

// Arrow Function

// Regular way we declare a function like this
const product = function addProduct(a, b){
    return a*b;
}
console.log(product(5,6));

// This is an arrow function

let minus = (a, b) =>{
    return a - b;
}
console.log(minus(30, 20));

let greetUser = (func, name) =>{
    console.log("Processing...");
    if(name ==="X") func(name);
};

greetUser((name)=>{
    console.log(`Hello, ${name}`)
}, "X");

// IIFE(Immediately Invoked Function Expression)

(function(){
    console.log("IIFE");
})();

