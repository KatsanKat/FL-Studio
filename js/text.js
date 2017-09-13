var clignotement = function(){ 

   if (document.getElementById('text-init').style.visibility=='visible'){ 
      document.getElementById('text-init').style.visibility='hidden'; 
   } 
   else{ 
   document.getElementById('text-init').style.visibility='visible'; 
   } 
}; 

periode = setInterval(clignotement, 1000);
var spacePressed = false;
document.addEventListener("keydown", keyDownHandler, false);
console.log(spacePressed);
function keyDownHandler(e) {
    if(e.keyCode == 32) {
        spacePressed = true;
    }
    if(spacePressed == true){
		clearInterval(periode);
		document.getElementById('text-init').style.visibility='hidden'; 
	} 
}
