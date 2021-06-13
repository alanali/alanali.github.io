window.onscroll = function() {scrollFunction()};

var width = window.innerWidth;

function shrink(id) {
  var size;
  if (id == "bunni") {
    if (3.5 * width / 100 <= 30) {
      size = "25px";
    } else if (3.5 * width / 100 >= 50) {
      size = "40px";
    } else {
      size = "3.5vw";
    }
  }
  else if (id == "store") {
    if (((3.5 * width / 100) - 30) < 15) {
      size = "15px";
    } else if (((3.5 * width / 100) - 30) >= 30) {
      size = "25px";
    }
    else {
      size = ((3.5 * width / 100) - 30) + "px";
    }
  }
  return size;
}

function grow(id) {
  var size;
  if (id == "bunni") {
    if (5.5 * width / 100 <= 30) {
      size = "30px";
    } else if (5.5 * width / 100 >= 70) {
      size = "70px";
    } else {
      size = "5.5vw";
    }
  }
  else if (id == "store") {
    if ((5.5 * width / 100) - 30 <= 15) {
      size = "15px";
    } else if ((5.5 * width / 100) - 30 > 30) {
      size = "30px";
    } else {
      size = (5.5 * width / 100) - 30 + "px";
    }
  }
  return size;
}

function scrollFunction() {
  document.getElementById("backing").style.height = document.getElementById("title").offsetHeight + (width / 100) + "px";

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("bunni").style.fontSize = shrink("bunni");
    document.getElementById("store").style.fontSize = shrink("store");
    document.getElementById("backing").style.top = "-15px";
  } else {
    document.getElementById("bunni").style.fontSize = grow("bunni");
    document.getElementById("store").style.fontSize = grow("store");
    document.getElementById("backing").style.top = "0px";
  }
}
