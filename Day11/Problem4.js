let creareMultiplier = (multiplier)=>{
    return function (){
        return multiplier*multiplier;
    }
}
console.log(creareMultiplier(10)());