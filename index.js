var randomNumber=Math.floor(Math.random()*6)+1;
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomImageGenerator= "./images/dice"+randomNumber+".png";
var randomImageGenerator1= "./images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImageGenerator);
document.querySelectorAll("img")[1].setAttribute("src",randomImageGenerator1);
if(randomNumber>randomNumber1){
    document.querySelector("h1").innerHTML="🚩 Player1 wins";
}
else if(randomNumber1>randomNumber){
    document.querySelector("h1").innerHTML="🚩 Player2 wins";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}