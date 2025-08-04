const student = {
    'name': 'John Williamson',
    'age': 9,
    'std': 3,
    'subjects': ['Maths', 'English', 'EVS'],
    'parents': {
      'father': 'Brown Williamson',
      'mother': 'Sophia',
      'email': 'john-parents@abcde.com'
    },
    'address': {
      'street': '65/2, brooklyn road',
      'city': 'Carterton',
      'country': 'New Zealand',
      'zip': 5791
    }
}
let st1 = student.name;
console.log(st1);


let {name,age, meal = 'bread'} = student;
console.log(name,age,meal);

for(let i=0; i<student.subjects.length; i++){
    console.log(student.subjects[i]);
}

const {subjects, numberOfSubjects = subjects.length} = student;
console.log(subjects,numberOfSubjects);

//Ellipes

const {address : {zip}} = student
console.log(zip);

const {std: standard} = student;
console.log(standard)


/*function sendEmail(student){
    email = student.parents.email;
    console.log(`Sent an email to ${email}`);
}
sendEmail(student);*/

let sendEmail = ({parents : {email}}) => {
    console.log(`Sent an email to ${email}`);
}
sendEmail(student);

//Opentional Chaining

const employee = {
    salary: {
        bonus: 300
    }
};

console.log(employee.department);
//console.log(employee.department.name);
let n = employee.department?.name;
console.log(n);