let Counter = ()=>{
    let initialCounter = 0;
    return {
        increment : ()=>{
            initialCounter++;
            return initialCounter;
        },
        decrement : ()=>{
            initialCounter--;
            return initialCounter;
        },
        resetCounter : ()=>{
            initialCounter = 0;
            return initialCounter;
        },
    }
}
let counter = Counter();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.resetCounter());