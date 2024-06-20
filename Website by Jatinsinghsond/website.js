var a = prompt("What is your name?");
if (!a) {
  window.location.href = "error_page.html";
}
else{
  
let now = new Date();
let x = now.getDay(); // Sunday - Saturday : 0 - 6

switch (x) {
case 0:
text = "Today is Sunday";
break;

case 1:
text = "Today is Monday";
break;

case 2:
text = "Today is Tuesday";
break;

case 3:
text = "Today is Wednesday";
break;

case 4:
text = "Today is Thursday";
break;

case 5:
text = "Today is Friday";
break;

default:
text = "Today is Saturday";
}
alert(text + "... I hope you enjoy your day.... " + a);

}


var answeredCorrectly;

function askQuestion() {
  var a = parseInt(prompt("Are you Robot? What is 2+6+2+0 ?"));
  
  if (a === 10) {
    answeredCorrectly = true;
    
  } else {
    window.location.href = "error_page.html"; 
  }
}
setTimeout(askQuestion, 30000);


var images = ['m1.jpeg', 'm2.jpeg', 'm3.jpeg', 'm4.jpeg','m5.jpeg','m1.jpeg', 'm2.jpeg', 'm3.jpeg', 'm4.jpeg','m5.jpeg','m1.jpeg', 'm2.jpeg', 'm3.jpeg', 'm4.jpeg','m5.jpeg','m1.jpeg', 'm2.jpeg', 'm3.jpeg', 'm4.jpeg','m5.jpeg','m1.jpeg', 'm2.jpeg', 'm3.jpeg', 'm4.jpeg','m5.jpeg','m1.jpeg', 'm2.jpeg', 'm3.jpeg', 'm4.jpeg','m5.jpeg','m1.jpeg', 'm2.jpeg', 'm3.jpeg', 'm4.jpeg','m5.jpeg','m1.jpeg', 'm2.jpeg', 'm3.jpeg', 'm4.jpeg','m5.jpeg','m1.jpeg', 'm2.jpeg', 'm3.jpeg', 'm4.jpeg','m5.jpeg','m1.jpeg', 'm2.jpeg', 'm3.jpeg', 'm4.jpeg','m5.jpeg'];
for (var i = 0; i < images.length; i++) {
    document.write("<img src='" + images[i] + "' height='300px' width='auto'>");
}


function first() {
    document.getElementById("slideimage").src = "im2.webp";
 }
 function second() {
    document.getElementById("slideimage").src = "im3.webp";
 }
 function third() {
    document.getElementById("slideimage").src = "im4.webp";
 }
 function fourth() {
    document.getElementById("slideimage").src = "im5.webp";
 }
 function fifth() {
    document.getElementById("slideimage").src = "im1.webp";
 }

 setInterval(first,2000);
 setInterval(second,4000);
 setInterval(third,6000);
 setInterval(fourth,8000);
 setInterval(fifth,10000);


let modeBtn = document.querySelector("#mode");
let currMode = "light";

modeBtn.addEventListener("click", () => {
  if (currMode === "light") {
    currMode = "orange";
    document.querySelector("body").style.backgroundColor = "rgba(250, 96, 90, 0.751)";
  } 
  else if (currMode === "orange") {
    currMode = "red";
    document.querySelector("body").style.backgroundColor = "rgba(255, 166, 0, 0.888)";
  } 
  else if (currMode === "red") {
   currMode = "green";
   document.querySelector("body").style.backgroundColor = "rgba(236, 38, 38, 0.826)";
 } 
  else if (currMode === "green") {
   currMode = "yellow";
   document.querySelector("body").style.backgroundColor = "rgba(245, 203, 17, 0.895)";
 } 
  else {
    currMode = "light";
    document.querySelector("body").style.backgroundColor = "white";
  }
  console.log(currMode);
});





function firsttext() {
  document.getElementById("slidetext").textContent = "New Brands Launch Coming Soon";
}
function secondtext() {
  document.getElementById("slidetext").textContent = "Free shipping on all orders above ₹500/-";
}
function thirdtext() {
  document.getElementById("slidetext").textContent = "Flat 5% off all orders use code : JATIN2620";
}
function fourthtextl() {
  document.getElementById("slidetext").textContent = "ANNOUNCEMENT  ANNOUNCEMENT  ANNOUNCEMENT";
}

setInterval(firsttext, 2000);
setInterval(secondtext, 4000);
setInterval(thirdtext, 6000);
setInterval(fourthtextl, 8000);
