var playerone = Math.floor(Math.random() * 6) + 1;
var playertwo = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img1").setAttribute("src", "./images/dice" + playerone + ".png");
document.querySelector(".img2").setAttribute("src", "./images/dice" + playertwo + ".png");

function rolldice() {
    var playerone = Math.floor(Math.random() * 6) + 1;
    var playertwo = Math.floor(Math.random() * 6) + 1;
    document.querySelector(".img1").setAttribute("src", "./images/dice" + playerone + ".png");
    document.querySelector(".img2").setAttribute("src", "./images/dice" + playertwo + ".png");



    var whowins = document.getElementsByTagName("h2")[0];

    if (playerone > playertwo) {
        whowins.innerHTML = "Player one wins";
    } else if (playerone < playertwo) {
        whowins.innerHTML = "Player two wins";
    } else {
        whowins.innerHTML = "DRAW!";
    }
}


document.getElementsByTagName("button")[0].onclick = function () {
    rolldice();
};


