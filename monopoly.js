let balance = 1500;
const startBonus = 200;
let gamer = true;
let currentPosition = 0;
const gameBoard = [
  { name: "start", cost: 0 },
  { name: "crop", cost: 100 },
  { name: "chance", cost: 0 },
  { name: "reserved", cost: 150 },
  { name: "mercedes", cost: 200 },
  { name: "puma", cost: 100 },
  { name: "paymant", cost: 0 },
  { name: "nike", cost: 120 },
  { name: "adidas", cost: 140 },
  { name: "prison", cost: 0 },
  { name: "nalogovaya", cost: 0 },
  { name: "vans", cost: 100 },
  { name: "crocs", cost: 80 },
  { name: "Levis", cost: 110 },
  { name: "Bmw", cost: 300 },
  { name: "Bershka", cost: 90 },
  { name: "Pull", cost: 120 },
  { name: "House", cost: 100 },
  { name: "Casino", cost: 0 },
  { name: "Versachi", cost: 250 },
  { name: "Armani", cost: 200 },
  { name: "Dolce&Gabana", cost: 220 },
  { name: "Rolex", cost: 300 },
  { name: "Prada", cost: 280 },
  { name: "Dior", cost: 260 },
  { name: "Saint", cost: 240 },
  { name: "Balenciaga", cost: 220 },
  { name: "Fendi", cost: 210 },
  { name: "", cost: 0 },
];

const throwDice = () => Math.floor(Math.random() * 6) + 1;

const game = () => {
  while (gamer && balance > 0) {
    let firstDie = throwDice();
    let secondDie = throwDice();
    let steps = firstDie + secondDie;

    console.log(`Dice: ${firstDie} and ${secondDie}`);

    currentPosition = (currentPosition + steps) % gameBoard.length;

    if (currentPosition === 0) {
      balance += startBonus;
      console.log(`Passed start! New balance: ${balance}`);
    }

    let currentCell = gameBoard[currentPosition];
    console.log(`Landed on ${currentCell.name}. Cost: ${currentCell.cost}`);

    if (currentCell.cost > 0) {
      balance -= currentCell.cost;
      console.log(`Paid ${currentCell.cost}. New balance: ${balance}`);
    }

    if (balance <= 0) {
      console.log("Game over! You ran out of money.");
      gamer = false;
    }

    if (firstDie === secondDie) {
      console.log("Double! Roll again.");
    } else {
      break;
    }
  }
};

game();
