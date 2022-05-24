var randomNumber1= Math.floor(Math.random() * 6)+1;
var randomNumber2= Math.floor(Math.random() * 6)+1;
battle()
var img1=document.querySelector(".img1")
var img2=document.querySelector(".img2")
function battle(){
var resultMessage=document.getElementById("resultMessage")
var img1=document.querySelector(".img1 src")
var img2=document.querySelector(".img2 src")
  if(randomNumber1<randomNumber2){
resultMessage.innerText="Player 2 win"
  }
  else if (randomNumber1>randomNumber2){
    resultMessage.innerText="Player 1 win"
  }
  else{
    resultMessage.innerText="It's draw"
  }
}

switch(randomNumber1){
  case 1: {
    img1.src="images/dice1.png"
    break;
  }
  case 2:{
    img1.src="images/dice2.png"
break;
  }
  case 3:{
    img1.src="images/dice3.png"
break
  }
  case 4:{
    img1.src="images/dice4.png"
break
  }
  case 5:{
    img1.src="images/dice5.png"
break
  }
  case 6:{
    img1.src="images/dice6.png"
    break
  }
}

switch(randomNumber2){
  case 1:{
    img2.src="images/dice1.png"
    break;
  }
  case 2:{
    img2.src="images/dice2.png"
break;
  }
  case 3:{
    img2.src="images/dice3.png"
    break
  }
  case 4:{
    img2.src="images/dice4.png"
break
  }
  case 5:{
img2.src="images/dice5.png"
break
  }
  case 6:{
    img2.src="images/dice6.png"
break
  }
}
