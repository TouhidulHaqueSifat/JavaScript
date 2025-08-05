// Todo: Problem 1 
const user = {name: "Alex", age: undefined};
console.log(user.age ?? "Not provided");

/*
 * Output: This will print Not provided 
*/

/*
 if(user.age === undefined){
    console.log("Not provided");
}*/

// Todo:  What will happen if we try to modify a frozen object?

const obj = Object.freeze({a:1});
obj.a = 2;
console.log(obj.b);
/* Output : Frozen objects is an objects that can not be changed, Its properties can not be added, removed, or modified. So, obj.a can not update*/

// Todo: Given an object with deeply nested properties, extract name, company, and address.city using destructuring
const person = {
  name: "XYZ",
  company: {
    name: "ABC",
    location: {
      city: "AFJF",
      zip: "854856"
    }
  }
};

//Output

const {name:personName, company, company:{ location:{city}}} = person;
console.log(personName, company, city);

// Todo: Build a Student Management System
// Todo: Store student details in an object (name, age, grades).
// Todo: Implement a method to calculate the average grade.

const student = {
    name : "ABC",
    age : 20,
    grades: [70,75,60,40,90],
};
function averageGrade(){
    let avg = 0;
    const {grades, len=grades.length} = student;
    for(let i=0; i<len; i++){
        avg += grades[i];
        
    }
    avg /=len;
    return avg;
}
avg = averageGrade();
console.log(avg);

// Todo: Book Store Inventory System
// Todo: Store books in an object.
// Todo: Add functionality to check availability and restock books.

const books = {
    bookName : "Data Structure and Algorithm",
    quantity : 1,
    isAvailable : true,
};

function isBookAvailable(books){
    if(books.quantity < 1) books.isAvailable = false;
    else books.isAvailable = true;
    return books.isAvailable;
}
function restockBooks(books,addedQuantity){
    books.quantity += addedQuantity;   
    console.log(`${books.bookName} restocked. New quantity: ${books.quantity}`);
    isBookAvailable(books);
}

function deleteBooks(books,deleteQuantity){
    books.quantity -= deleteQuantity;
    isBookAvailable(books);
    //return books.quantity;
}

console.log("Before restock:");
console.log("Available:", books.isAvailable);
console.log("Quantity:", books.quantity);

restockBooks(books, 5);  // Restock 5 books

console.log("After restock:");
console.log("Available:", books.isAvailable);
console.log("Quantity:", books.quantity);

deleteBooks(books, 7);
console.log("After restock:");
console.log("Available:", books.isAvailable);
console.log("Quantity:", books.quantity);

restockBooks(books, 5);  // Restock 5 books

console.log("After restock:");
console.log("Available:", books.isAvailable);
console.log("Quantity:", books.quantity);

// Todo:What is the difference between Object.keys() and Object.entries()? Explain with examples

// ! Output
/* 

* Object.keys() returns an array of keys.

* Object.entries() returns an array of key-value pairs -- each as an array [key,value]

*/ 
// ! Objects.keys()
const User = {
    name:"Alice",
    age : 25,
    city:"New york",
};
console.log(Object.keys(User));

// ! Objects.entries()
const product = {
    title : "Book",
    price : 10,
    stock : 100,
};
console.log(Object.entries(product));

// Todo:  Loop and print values using Object destructuiring

const users = [
  {
      'name': 'Alex',
      'address': '15th Park Avenue',
      'age': 43
  },
  {
      'name': 'Bob',
      'address': 'Canada',
      'age': 53
  },
  {
      'name': 'Carl',
      'address': 'Bangalore',
      'age': 26
  }
];

// ? Normal Way
for(let i=0; i<users.length; i++){
    const {name, address,age} = users[i];
    console.log(name,address,age);
}

// ? for ...of
for(const {name, address, age} of users){
    console.log(name,address,age);
}