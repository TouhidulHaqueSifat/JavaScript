function isPalinDrome(str){
    let i = 0;
    let j = str.length - 1;
    flag=false;
    while(i <= j){
        if(str[i] !== str[j]){
            
            flag = false;
            return flag;
        }
        else{
            flag = true;
        }
        i++, j--;
    }
    return flag;
};

let isOk = isPalinDrome("abba");
if(isOk){
    console.log("Yes, This is a Palindrome");
}
else{
    console.log("No, This is not a Palindrome");
}
