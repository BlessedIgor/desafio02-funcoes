function calculatelevel(victories, defeats) {
    const winningBalance = victories - defeats;
    let level;

    if (winningBalance < 10) {
      level = "Ferro";
    } else if (winningBalance >= 10 && winningBalance <= 20){
      level = "Bronze";
    } else if (winningBalance >= 21 && winningBalance <= 50){
      level = "Prata";
    } else if (winningBalance >= 51 && winningBalance <= 80){
      level = "Ouro";
    } else if (winningBalance >= 81 && winningBalance <= 90){
      level = "Diamante";
    } else if (winningBalance >= 91 && winningBalance <= 100){
      level = "Lendario"
    } else { 
      level = "Imortal"
    }

    console.log(`O Heroi tem saldo de ${winningBalance} está no nivel de ${level}`)
    return winningBalance
}

let victories = 160
let defeats = 70
calculatelevel(victories, defeats)