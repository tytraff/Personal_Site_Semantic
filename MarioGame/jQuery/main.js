/**
 * Created by dtraf on 5/20/2017.
 */
//globals
var initialInterval = 5000;
var interval = initialInterval;
var intervalModifier = 1.1;

// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 480;
document.body.appendChild(canvas);
canvas.setAttribute("id", "gameArea");
canvas.style.border = "gold";

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function() {
    bgReady = true;
};
bgImage.src = "img/rsz_kgtcsc.jpg";
bgImage.height = 480;
bgImage.width = 800;
// pokemon image
var coinReady = false;
var coinImage = new Image();
coinImage.onload = function() {
    coinReady = true;
};
coinImage.src = "img/rsz_coin.png";

//Create Reset and New Game
var resetSpeedButton = document.createElement("button");
resetSpeedButton.innerText = "Reset speed";
resetSpeedButton.onclick = function() {
    interval = initialInterval;
};
document.body.appendChild(document.createElement("br"));
document.body.appendChild(resetSpeedButton);

var resetGameButton = document.createElement("button");
resetGameButton.innerText = "Reset Game";
resetGameButton.onclick = function() {
    interval = initialInterval;
    coinCaught = 0;
    reset();
    then = Date.now();
};
document.body.appendChild(resetGameButton);

var coin = {};
var coinCaught = 0;

//Handle mouse clicks
addEventListener("click", function(e) {
    if (e.clientX >= coin.x - 1 && coin.x + 60 >= e.clientX && e.clientY >= coin.y - 1 && coin.y + 60 >= e.clientY) {
        coinCaught++;
        interval = interval / intervalModifier;
        reset();
    }
})

// Reset the game when the player catches a pokemon
var reset = function() {

    // Throw the pokemon somewhere on the screen randomly
    coin.x = 32 + (Math.random() * (canvas.width - 120));
    coin.y = 32 + (Math.random() * (canvas.height - 120));
};

// Draw everything
var render = function() {
    if (bgReady) {
        ctx.drawImage(bgImage, 0, 0);
    }

    if (coinReady) {
        ctx.drawImage(coinImage, coin.x, coin.y);
    }

    // Score
    ctx.fillStyle = "rgb(250, 250, 250)";
    ctx.font = "24px Helvetica";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("Coins caught: " + coinCaught, 32, 32);
};

// The main game loop
var main = function() {
    var now = Date.now();
    var delta = now - then;

    //update(delta / 1000);

    if (delta > interval)
        reset();

    render();

    if (delta > interval)
        then = now;

    // Request to do this again ASAP
    requestAnimationFrame(main);
    var countdown = document.getElementById("countdown")
    countdown.innerHTML = "Countdown until next movement: " + (interval / 1000).toFixed(2) + " seconds";
};

setTimeout(function() { reset(); }, interval / intervalModifier);

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
var then = Date.now();

reset();
main();
