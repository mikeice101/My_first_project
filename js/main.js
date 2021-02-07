// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");
var main = document.getElementById("main");
// Get the offset position of the navbar
var sticky = main.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
// всплывающая форма
var modal = document.getElementById('open_form');
 var btn = document.getElementsByClassName("myBtn");
 var btn1 = btn[0];
var btn2 = btn[1];
var btn3 = btn[2];
var btn4 = btn[3];
var btn5 = btn[4];
var btn6 = btn[5];
var btn7 = btn[6];
var btn8 = btn[7];
var btn9 = btn[8];
var service = document.getElementsByClassName("form_servece")[0];



var span = document.getElementsByClassName("close")[0];
btn1.onclick = function() {
    modal.style.display = "block";
  

}
span.onclick = function() {
    modal.style.display = "none";
        service.style.display = "none";
}

btn2.onclick = function() {
    modal.style.display = "block";
   

}
btn3.onclick = function() {
    modal.style.display = "block";
   

}
btn4.onclick = function() {
    modal.style.display = "block";
    

}
btn5.onclick = function() {
    modal.style.display = "block";
  

}
btn6.onclick = function() {
    modal.style.display = "block";
   

}
btn7.onclick = function() {
    modal.style.display = "block";
 

}
btn8.onclick = function() {
    modal.style.display = "block";


}
btn9.onclick = function() {
    modal.style.display = "block";
  service.style.display = "block";

}






