
const prompt = require("prompt-sync")();






const deposit = () => {

  while(true){

    const depositAmount = prompt("Enter a deposit amount: ")
    const numberAmount =  parseFloat(depositAmount)

    if (isNaN(numberAmount) || numberAmount <= 0){
      console.log("Invalid deposit amount, please try again")
    }

    else{
      return numberAmount;
    }


  }

}

const getNumberOfLines = () => {

  while (true){

    const lines = prompt("Enter the number of lines to bet on (1-3): ")
    const numberLines = parseFloat(lines)

    if (isNaN(numberLines) || numberLines <= 0 || numberLines > 3){
      console.log("Invalid number of lines, please try again")
    }
    else{
      return numberLines;
    }
  }


}

const getBet = (balance, lines) => {
  while (true){

    const bet = prompt("Enter your bet  per line: ")
    const numberBet = parseFloat(bet)

    if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance/lines){
      console.log("Invalid bet amount, please try again")
    }
    else{
      return numberBet;
    }
  }
}

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines)
