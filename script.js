var dice1=Math.floor(Math.random()*6) + 1;
var dice2=Math.floor(Math.random()*6) + 1;
if(dice1 === 1){
document.getElementsByClassName("img1")[0].src="images/dice1.png";
} else if(dice1 === 2){
    document.getElementsByClassName("img1")[0].src="images/dice2.png";
} else if(dice1 === 3){
    document.getElementsByClassName("img1")[0].src="images/dice3.png";
} else if(dice1 === 4){
    document.getElementsByClassName("img1")[0].src="images/dice4.png";
} else if(dice1 === 5){
    document.getElementsByClassName("img1")[0].src="images/dice5.png";
} else if(dice1 === 6){
    document.getElementsByClassName("img1")[0].src="images/dice6.png";
}

if(dice2 === 1){
    document.getElementsByClassName("img2")[0].src="images/dice1.png";
} else if(dice2 === 2){
    document.getElementsByClassName("img2")[0].src="images/dice2.png";
} else if(dice2 === 3){
    document.getElementsByClassName("img2")[0].src="images/dice3.png";
} else if(dice2 === 4){
    document.getElementsByClassName("img2")[0].src="images/dice4.png";
} else if(dice2 === 5){
    document.getElementsByClassName("img2")[0].src="images/dice5.png";
} else if(dice2 === 6){
    document.getElementsByClassName("img2")[0].src="images/dice6.png";
}

if(dice1 > dice2){
    document.querySelector("h1").textContent= "Player 1 Wins";
} else if(dice2 > dice1){
    document.querySelector("h1").textContent= "Player 2 Wins";
} else{
    document.querySelector("h1").textContent= "Draw";
}
