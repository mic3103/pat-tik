var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("asu").style.top = "0";
  } else {
    document.getElementById("asu").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}



