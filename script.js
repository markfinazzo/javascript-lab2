//declaring the randomDamage function
const randomDamage = _ => Math.floor(Math.random() * 10) + 1;
//calling or invoking the function within a console.log statement
console.log(randomDamage());

//Declare an arrow function named chooseOption that has two parameters named opt1 and opt2 . chooseOption does two things:
// • Declares and initializes a variable named randNum to either a 0 or 1, randomly. • Returns opt1 if randNum is equal to 0 otherwise return opt2 . ( Use a ternary operator )
const chooseOption = (opt1, opt2) => {
    let randNum = Math.floor(Math.random() * 2);
    return randNum === 0 ? opt1 : opt2;
}
console.log(chooseOption("test1", "test"));

function attackPlayer(health) {
    return health - randomDamage();
}
console.log(attackPlayer(85));

const logHealth = (player, health) => {
    console.log(`${player} health: ${health}`);
}

const logDeath = (winner, loser) => {
    console.log(`${winner} defeated ${loser}`);
}

const isDead = (health) => {
    if (health === 0) {
        return true;
    } else (health > 0)
    return false;
}

// function fight(player1, player2, player1Health, player2Health) {
//     let attacker = true
//     while 
//  }
