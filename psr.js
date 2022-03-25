const hands = ['rock' , 'paper', 'scissors'];
function getHand(){
  return hands[parseInt(Math.random()*10)%3];
}

var player1 = {
  name:'Cha',
  score: 0,
  getHand: () => getHand(),
}
var player2 = {
  name:'Mahi',
  score: 0,
  getHand: () => getHand(),
}

function playRound(playerA, playerB){
var player1Hands = playerA.getHand();
var player2Hands = playerB.getHand();

if(player1Hands===player2Hands){
  console.log("Player1 hands" + " " + hands[0] + " " + "player2 hands" + " " + hands[0] + ": " + "it is a tie");  
  return null;
  
}
  if (player1Hands===hands[0]&& player2Hands===hands[1]){
    console.log("Player1 hands" + " " +  hands[0] +  "player2 hands" + hands[1] + " " + "wins");
    return 'you win';
  }
  if (player1Hands===hands[0] && player2Hands===[2]){
    console.log("Player1 hands" + " " + hands[0] + " "+ "player2 hands" + " " + hands[2] + " " + "wins"); 
    return 'you win';
  }
  if (player1Hands===hands[1] && player2Hands[2]){
    console.log("Player1 hands" + " " + hands[1] + " " + "player2 hands" + " " + hands[2] + " " + "wins"); 
    return 'you win';
  }
  if (player1Hands === hands[1] && player2Hands[0]){
    console.log("Player1 hands" + " " + hands[1] + " " + "player2 hands" + " " + hands[0] + " " +  "wins"); 
    return 'you win';
  }
  if(player1Hands ===hands[2]&& player2 === hands[0]){
    console.log("Player1 hands" + " " + hands[2] + " " +  "player2 hands" + " " + hands[0] + " " +  "wins"); 
    return 'you win';
  }
}


//playGame(player1,player2,3);
function playGame(player1, player2, playuntil) {
    let player1wins =0;
    let player2wins =0;
    while (player1wins < playuntil&&player2wins< playuntil){
     console.log ('current score:', player1.name, ':', player1wins)
     console.log ('current score:', player2.name, ':', player2wins)
    if(!playRound(player1,player2)) {
    }else if (playRound(player1,player2)===player1){
      player1wins++;
    }else {
      player2wins++;
    }
    }
    if(player1wins ===playuntil){
      return player1;
    }else{
      return player2;
    }
}

let playTournament = (playerA, playerB,playuntil) =>{
let winnerRound1 =playGame(playerA, playerB, playuntil);
let winnerRound2 = playGame(playerA, playerB, playuntil);
let tournamentWinner = playGame(winnerRound1, winnerRound2,playuntil).name;
let winningStatement = tournamentWinner +  " " + "is champion";
return winningStatement
}
console.log (playTournament(player1, player2,5));
   


