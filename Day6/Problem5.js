function countVowels(str){
    let cnt = 0;
    let vowels = ['a','e','i','o','u'];
    for(let i=0; i<str.length; i++){
        for(let j=0; j<vowels.length; j++){
            if(str[i] === vowels[j]){
                cnt++;
                
            }
        }
    }
    return cnt;
}

let number = countVowels("ai");
console.log(number);