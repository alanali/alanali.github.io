window.onscroll = function() {scrollFunction()};
var width = window.innerWidth;

function shrink(id) {
  var size;
  if (id == "bunni") {
    if (3.5 * width / 100 < 20) {
      size = 20;
    } else {
      size = "3.5vw";
    }
  }
  else if (id == "store") {
    if (((3.5 * 100 / width) - 30) < 15) {
      size = 15;
    } else {
      size = (3.5 * width / 100) - 30;
    }
  }
  return size;
}

function grow(id) {
  var size;
  if (id == "bunni") {
    if (5.5 * width / 100 < 20) {
      size = "20px+2vw";
    } else {
      size = "5.5vw";
    }
  }
  else if (id == "store") {
    if (((5.5 * width / 100) - 30) < 15) {
      size = (2 * width / 100) + 15;
    } else {
      size = (5.5 * width / 100) - 30;
    }
  }
  return size;
}

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    // window.alert(document.getElementById("bunni").style.fontSize);
    document.getElementById("bunni").style.fontSize = shrink("bunni");
    document.getElementById("store").style.fontSize = shrink("store");
  } else {
    document.getElementById("bunni").style.fontSize = grow("bunni");
    document.getElementById("store").style.fontSize = grow("store");
    // if ("0.7em" > "30px") {
    //   document.getElementById("store").style.letterSpacing = "30px";
    // } else if ("0.7em" < "0px") {
    //   document.getElementById("store").style.letterSpacing = "0px";
    // } else {
    //   document.getElementById("store").style.letterSpacing = "0.7em";
    // }
  }
}
