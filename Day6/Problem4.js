function factorial(n){
    if(n <=1) return 1;
    return n*factorial(n-1) ;

}

let fac = factorial(4);
console.log(fac);