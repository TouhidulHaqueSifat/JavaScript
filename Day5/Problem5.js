let n = 6789;
let reverseNumber = ""
while(n > 0){
    let j = n % 10;
    n = Math.floor(n / 10);
    reverseNumber += j;

}
console.log(reverseNumber);