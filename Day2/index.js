console.log("Day 02");

// Variabels


/*var fruit = 'Mango';

console.log(fruit);

var fruit = 'Orange';
console.log(fruit);

let student = {
    name : "Alice",
    age : 22,
    isEnrolled : true
};

console.log(student.name);
console.log(student.age);
console.log(student.isEnrolled);*/

let name = " Alice";
let age = 23;
let isStudent = true;
let favoriteProgramming = ["C++","C","Python", "Java", "JavaScript"]

console.log(name);
console.log(age);
console.log(isStudent);
//for loop

html = "";
for(let i=0; i<favoriteProgramming.length; i++){
    html += "<li>" + favoriteProgramming[i] + "</li>";

}
document.getElementById("id").innerHTML = html;

// Objects

let student = {
    name : "Alice",
    age : 22,
    isEnrolled : true
};

student.name = "Mango";
// Reassign value to Student name object
console.log(student.name);

// Math

let a, b;

a=5, b=6;
console.log(a+b);

let c = (a+b)/2;

let ans = Math.round(c);
console.log(ans);

let floatValue = 1.50;
console.log(Math.round(floatValue));

