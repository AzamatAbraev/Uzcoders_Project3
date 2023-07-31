function openNav() {
  document.getElementById("myNav").style.display = "flex";
}

function closeNav() {
  document.getElementById("myNav").style.display = "none";
}


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "10px 20px";
    document.getElementById("launguage").style.display = "none";
  } else {
    document.getElementById("navbar").style.padding = "25px 20px";
    document.getElementById("launguage").style.display = "block";
  }
}