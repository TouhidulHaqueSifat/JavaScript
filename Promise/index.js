let promise1 = new Promise(function(resolve, reject){
    resolve("THis is done");
})

/*let promise2 = new Promise(function(resolve, reject){
    reject(new Error("THis is failed"));
})*/
console.log(promise1);

// Handiling Promise

const promise = new Promise(function(resolve,reject){
    resolve("I am resolved...");
})

promise.then(
    (result) => {console.log(result)},
    
).catch(
    (error) => {console.error(error)}
).finally(
    () =>{}
);

// - Promise Chain

 // Rule 1: Every promise gives you a .then() handler method. Every rejected promise provides you a .catch() handler.

 // Rule 2: You can do mainly three valuable things from the .then() method. You can return another promise(for async operation). You can return any other value from a synchronous operation. Lastly, you can throw an error.

 // Return a promise from the .then() handler

 let getUser = new Promise((resolve, reject)=>{
    const user = {
        name: 'John Doe',
        email: 'jdoe@email.com',
        password: 'jdoe.password',
        permissions: [ 'db', 'dev']
    }
    resolve(user);
 });

 getUser.then(
    (user)=>{
        console.log(`Got user ${user.name}`);
        return new Promise((resolve, reject)=>{
            function callback(){
                resolve("Bangladesh")
            }
            setTimeout(callback, 2000)
        })

    }
 ).then(
    (address)=>{
        console.log(`User address is ${address}`);
    }
 )
 getUser.then(
    (user)=>{
        console.log(`Got user ${user.name}`);
        return user.email;
    }
 ).then(
    (email) => {
        console.log(`User address is ${email}`)
    }
 );

 getUser.then(
    (user) =>{
        console.log(`Got User ${user.name}`);
        if(!user.permissions.includes("hr")){
            throw new Error("You are not allowed to the hr module");
        }
        return user.email;
    }
 ).catch(
    (error) =>{
       console.error(error); 
    }
 )

 // Rule 3: You can rethrow from the .catch() handler to handle the error later. In this case, the control will go to the next closest .catch() handler.

 let promise401 = new Promise(function(resolve, reject) {
    reject(401)
});

promise401.catch(
    (error)=>{
        console.log(error);
        if(error === 401){
            throw error;
        }
    }
).then(
    (result)=>{
        console.log(result);
    }
).catch(
    (error)=>{
        console.error(error);
    }
)

// Rule 4 - Unlike .then() and .catch(), the .finally() handler doesn't process the result value or error. It just passes the result as is to the next handler.

let promiseFinally = new Promise(function(resolve, reject) {
    resolve('Testing Finally.');
});

promiseFinally
    .finally(function() {
        console.log("Running Finally!")
    })
    .then(function(result) {
        console.log(result);
    })
