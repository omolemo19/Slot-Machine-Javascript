
const prompt = require("prompt-sync")();

const ROWS = 3;
const COLUMNS = 3;

const SYMBOLS_COUNT = {
  A: 2,
  B: 4,
  C: 6,
  D: 8
}

const SYMBOLS_VALUES = {
  A: 5,
  B: 4,
  C: 3,
  D: 2
}




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


const spin = () => {
  const symbols = [];
  for(const [symbol, count] of Object.entries(SYMBOLS_COUNT)){
    for(let i = 0; i < count; i++){
      symbols.push(symbol);
    }
  }

  const reels = [];

  for(let i = 0; i < COLUMNS; i++){
    reels.push([]);
    const reelSymbols = [...symbols];
    for(let j = 0; j < ROWS; j++){
      const randomIndex = Math.floor(Math.random() * reelSymbols.length);
      const selectedSymbol = reelSymbols[randomIndex];
      reels[i].push(selectedSymbol);
      reelSymbols.splice(randomIndex,1);

    }
  }
  return reels;
}

const transpose = (reels) =>{
  const rows = []

  for(let i = 0; i < ROWS; i++){
    rows.push([]);
    for(let j = 0; j < COLUMNS; j++){
      rows[i].push(reels[j][i]);
    }
  }
  return rows;
}



let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);
const reels = spin();
const rows = transpose(reels);






