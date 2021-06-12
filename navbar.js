window.onscroll = function() {scrollFunction()};
var width = window.innerWidth;

function shrink(id) {
  var size;
  if (id == "bunni") {
    if (3.5 * width / 100 < 30) {
      size = "30px";
    } else {
      size = "3.5vw";
    }
  }
  else if (id == "store") {
    if ((3.5 * width / 100) - 30 < 15) {
      size = "15px";
    } else {
      size = ((3.5 * width / 100) - 30) + "px";
    }
  }
  return size;
}

function grow(id) {
  var size;
  if (id == "bunni") {
    if (5.5 * width / 100 < 30) {
      size = "30px";
    } else if (5.5 * width / 100 > 70) {
      size = "70px";
    } else {
      size = "5.5vw";
    }
  }
  else if (id == "store") {
    if ((5.5 * width / 100) - 30 < 15) {
      size = "15px";
    } else if (5.5 * width / 100 > 30) {
      size = "30px";
    } else {
      size = (5.5 * width / 100) - 30 + "px";
    }
  }
  return size;
}

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("bunni").style.fontSize = shrink("bunni");
    document.getElementById("store").style.fontSize = shrink("store");
  } else {
    document.getElementById("bunni").style.fontSize = grow("bunni");
    document.getElementById("store").style.fontSize = grow("store");
  }
}
