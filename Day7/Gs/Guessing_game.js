function guessNumber(){
    let userInput = null;
    const guessNum = Math.floor(Math.random()*10)+1;
    let cnt = 0;
    console.log("Welcome to the Number Guessing Game!");
    console.log("Try to guess a number between 1 and 10.");

    /*if(userInput > guessNum){
        console.log("Your number is high for guessing number");
        userInput = prompt("Enter the correct number");
    }
    else if(userInput < guessNum){
        console.log("Your number is low for guessing number");
        userInput = prompt("Enter the correct number");2
    }*/
    while(userInput !== guessNum){
        userInput = Number(prompt("Enter your guess: "));
        
        cnt++;
        if(userInput > guessNum){
            console.log("Too High! Try again.");
            
        }
        else if(userInput < guessNum){
            console.log("Too Low! Try again.");
            
        }
        else{

            console.log(`Yeah! you geussed the  right number in${cnt}   attempts.`);
            break;
        } 
       
    }
    
    const playAgainPromt = prompt("Do you want to play again?(yes/no)");

    const playAgain = playAgainPromt?playAgainPromt.toLowerCase() : "no";

    if(playAgain === 'yes'){
        guessNumber();
    }
    else{
        console.log("Thanks for playing! See you next time.")
    }
    guessNumber();
}

