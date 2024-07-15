//Generate dice for first Player
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6 random Number

var Image1 = "Images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", Image1);

//Generate dice for second Player
var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6 random Number

var Image2 = "Images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", Image2);

//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins!";
}
//If player 2 wins
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 wins!";
}
//If draw
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
