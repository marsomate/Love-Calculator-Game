document.querySelector("button").addEventListener("click", handleClick);

function handleClick(){
    var randomNumber = Math.floor(Math.random()*100)+1;
    var score = "Your score " + randomNumber + "%";
    document.querySelector(".score").innerHTML = score;
}
