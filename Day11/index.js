function outerCount()
{
    let count = 0;

    return function innerCount()
    {
        count++;
        return count;
    }
}

let retVal = outerCount();

console.log(retVal());
console.log(retVal());
console.log(retVal());
console.log(retVal());

// Banking System using  Clousere

function Bank(initialAmount){
    let balance = initialAmount;

    return {
        deposit: (amount) =>{
             balance += amount;
            console.log("Deposit", amount, "Current Balnace", balance);
        },
        withdraw: (amount) =>{
            if(amount > balance){
                console.warn("Uneffiecient Balance");
            }
            else{
                balance -= amount;
                console.log("Withdraw", amount, "Current Balance", balance);
            }
        },
        checkBalance : () =>{
            console.log("Current Balance is ", balance);
        }
    }

    
}

AmarBank = Bank(100);
AmarBank.deposit(400); // 500
AmarBank.withdraw(200);
AmarBank.checkBalance();