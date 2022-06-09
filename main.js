if (document.getElementById("fz-logo")) {
  
if (typeof screen.orientation !== 'undefined') {
  /* it's a mobile */
  document.getElementById("fz-logo").style.width = "20%"
  
} else {
  /* not a mobile */
  document.querySelector("#fz-logo").style.width = "12%";
}
}

function showNav() {
   document.querySelector(".sideNav").style.width = "245px";
   document.querySelector('.intro').style.marginLeft = "300px";
}
function hideNav() {
   document.querySelector(".sideNav").style.width = "0";
   document.querySelector('.intro').style.marginLeft = "0px";
}
