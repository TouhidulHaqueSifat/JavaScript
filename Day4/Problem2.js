let a = 5, b = 5;

let operator = '*';

switch(operator){
    case '+':
        console.log(a+b);
        break;

    case '-':
        console.log(a-b);
        break;

    case '*':
        console.log(a*b);
        break;

    case '+/':
        console.log(a/b);
        break;

    case '%':
        console.log(a%b);
        break;
    default:
        console.log("No operator matching");
}