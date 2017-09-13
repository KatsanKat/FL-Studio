var clignotement = function(){ 

   if (document.getElementById('text-init').style.visibility=='visible'){ 
      document.getElementById('text-init').style.visibility='hidden'; 
   } 
   else{ 
   document.getElementById('text-init').style.visibility='visible'; 
   } 
}; 

// mise en place de l appel de la fonction toutes les 0.8 secondes 
// Pour arrêter le clignotement : clearInterval(periode); 
periode = setInterval(clignotement, 1000); 