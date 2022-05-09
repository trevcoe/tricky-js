function guessingGame(guess) {
    let secretNum = Math.floor(Math.random() * 100);
    if(guess < secretNum){
        return "Too low! Guess higher."
    } else if(guess > secretNum){
        return "Too high! Guess lower"
    } else {
        return "Good guess!"
    }
}

module.exports = { guessingGame };

 //not correct but its what I could come up with without any help