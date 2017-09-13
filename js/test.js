// Fichier de test temporaire avant de faire une architecture du jeu

var screenWidth = document.documentElement.clientWidth;
var screenHeight = document.documentElement.clientHeight;

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;

//Dégradé
ctx.beginPath();
var degrade = ctx.createLinearGradient(0, screenHeight, 0, 0);
degrade.addColorStop(0, '#113F9B');
degrade.addColorStop(1, '#AB40C9');

ctx.fillStyle = degrade;
ctx.fillRect(0, 0, screenWidth, screenHeight);
ctx.closePath;

//Spawn
ctx.beginPath();
var spawnx = 0;
var spawny = screenHeight -30;
ctx.rect(spawnx, spawny, 100, 30);
ctx.fillStyle = "#fff";
ctx.fill();

ctx.closePath;

//Ending
var endingx = screenWidth - 100;
var endingy = screenHeight -30;
ctx.rect(endingx, endingy, 100, 30);
ctx.fillStyle = "#fff";
ctx.fill();
