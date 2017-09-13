// Fichier de test temporaire avant de faire une architecture du jeu

var screenWidth = document.documentElement.clientWidth;
var screenHeight = document.documentElement.clientHeight;

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;

//  Dégradé
ctx.beginPath();
var degrade = ctx.createLinearGradient(0, screenHeight, 0, 0);
degrade.addColorStop(0, '#113F9B');
degrade.addColorStop(1, '#AB40C9');

ctx.fillStyle = degrade;
ctx.fillRect(0, 0, screenWidth, screenHeight);
ctx.closePath;

//  Spawn
ctx.beginPath();
var spawnWidth = 100;
var spawnHeight = 30;
var spawnx = 0;
var spawny = screenHeight - spawnHeight;
ctx.rect(spawnx, spawny, spawnWidth, spawnHeight);
ctx.fillStyle = "#fff";
ctx.fill();
ctx.closePath;

//  Ending
ctx.beginPath();
var endingWidth = 100;
var endingHeight = 30;
var endingx = screenWidth - endingWidth;
var endingy = screenHeight - endingHeight;
ctx.rect(endingx, endingy, endingWidth, endingHeight);
ctx.fillStyle = "#fff";
ctx.fill();
ctx.closePath;

//  Floor

var floorWidth = screenWidth - 200;
var floorHeight = 30;
var floorx = 100;
var floory = screenHeight - 30;
ctx.beginPath();
ctx.rect(floorx, floory,floorWidth, floorHeight);
ctx.fillStyle = "#84D6A3"
ctx.fill()
ctx.closePath;

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

drawCharacter()
