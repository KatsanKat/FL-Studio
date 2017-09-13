// Fichier de test temporaire avant de faire une architecture du jeu

var screenWidth = document.documentElement.clientWidth;
var screenHeight = document.documentElement.clientHeight;

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;

//  Fonction de dessin du brackground en Dégradé

function drawBackground(){
    ctx.beginPath();
    var degrade = ctx.createLinearGradient(0, screenHeight, 0, 0);
    degrade.addColorStop(0, '#113F9B');
    degrade.addColorStop(1, '#AB40C9');

    ctx.fillStyle = degrade;
    ctx.fillRect(0, 0, screenWidth, screenHeight);
    ctx.closePath;
}

//  Fonction de dessin du Spawn

var spawnWidth = 100;
var spawnHeight = 30;
var spawnx = 0;
var spawny = screenHeight - spawnHeight;

function drawSpawn(){
    ctx.beginPath();
    ctx.rect(spawnx, spawny, spawnWidth, spawnHeight);
    ctx.fillStyle = "#fff";
    ctx.fill();
    ctx.closePath;
}

//  Ending

var endingWidth = 100;
var endingHeight = 30;
var endingx = screenWidth - endingWidth;
var endingy = screenHeight - endingHeight;

function drawEnding() {
    ctx.beginPath();
    ctx.rect(endingx, endingy, endingWidth, endingHeight);
    ctx.fillStyle = "#fff";
    ctx.fill();
    ctx.closePath;
}

//  Floor

var floorWidth = screenWidth - 200;
var floorHeight = 30;
var floorx = 100;
var floory = screenHeight - 30;

function drawFloor() {
    ctx.beginPath();
    ctx.rect(floorx, floory,floorWidth, floorHeight);
    ctx.fillStyle = "#84D6A3"
    ctx.fill()
    ctx.closePath;
}

//  Character

var charaWidth = 20;
var charaHeight = 60;
var charax = 30;
var charay = floory - charaHeight;


function drawCharacter() {
    ctx.beginPath();
    ctx.rect(charax, charay, charaWidth, charaHeight);
    ctx.fillStyle = "#74B8D1";
    ctx.fill();
    ctx.closePath;
}


//Function start

var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = 0.9;
var leftPressed = false;
var rightPressed = false;
var upPressed = false;


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
        console.log('droite');
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
        console.log('gauche');
    }
    else if(e.keyCode == 38) {
        upPressed = true;
        console.log('haut');
    }
}
function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
    else if(e.keyCode == 38) {
        upPressed = false;
    }
}

var _stopJump = false;
var _bascule = -1;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBackground();
    drawSpawn();
    drawEnding();
    drawFloor();
    drawCharacter();

    if( rightPressed && charax < canvas.width - charaWidth ) {
        charax += 7;
    }
    else if( leftPressed && charax > 0 ) {
        charax -= 7;
    }
    else if( upPressed && charay == canvas.height - 90) {

        function jump(){

            _stopJump = false;
            _bascule = -1;
                setInterval(function(){
                    if ( _stopJump ) {
                        return;
                    }

                    charay += _bascule;
                    console.log(charay);

                    if (charay == canvas.height - 200){
                        _bascule = 1;
                    }else if (charay >= canvas.height - 90) {
                        _stopJump = true;
                    }
                },10);
        }
        jump();
    }

    x += dx;
}

setInterval(draw, 10);