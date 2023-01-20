// Get the button:
let botonVolver = document.getElementById("volverArriba");
let estrellas = document.getElementById("estrellas");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    botonVolver.style.display = "block";
  } else {
    botonVolver.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function volverArriba() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function numRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
function addEstrellas(){
  const numEstrellas = 100;
  let stringEstrellas = "";
   for(let i = 0; i < numEstrellas; i++){
    stringEstrellas += `${numRandom(-50, 50)}vw ${numRandom(-50, 50)}vh ${numRandom(0, 2)}px ${numRandom(0, 2)}px #fff`;
    stringEstrellas += ",";
   }
   estrellas.style.boxShadow = (stringEstrellas.substring(0, stringEstrellas.length - 1)).valueOf();
  console.log(stringEstrellas.substring(0, stringEstrellas.length - 1)) 
}
addEstrellas();


function randomizeImg(galaxia) {
  galaxia.style.position = "absolute";
  galaxia.style.opacity = "0.8";
  galaxia.style.filter = "brightness(50%)";
  if(numRandom(10,20) % 2 == 0){
    galaxia.style.top = numRandom(-12,-2) + "%"; // -12 a -2, 50 a 60
  }else{
    galaxia.style.top = numRandom(50,60) + "%";
  }
}

let galaxia = document.getElementById("galaxia");
randomizeImg(galaxia);