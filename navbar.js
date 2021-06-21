var titleh;
var width = window.innerWidth;
window.onload = function() {
  titleh = document.getElementById("backing").clientHeight;
  titleh += "px"
};

window.onscroll = function() {
  scrollFunction();
};

function boo(x) {
  window.alert(x);
}

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
    if (((3.5 * width / 100) - 30) < 10) {
      size = ((3.5 * width / 95) - 15) + "px";
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
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    document.getElementById("backing").style.top = "-10px";
    document.getElementById("backing").style.height = document.getElementById("title").clientHeight + (width / 100) + "px";
    document.getElementById("bunni").style.fontSize = shrink("bunni");
    document.getElementById("store").style.fontSize = shrink("store");
  } else {
    document.getElementById("backing").style.height = titleh;
    document.getElementById("bunni").style.fontSize = grow("bunni");
    document.getElementById("store").style.fontSize = grow("store");
    document.getElementById("backing").style.top = "0px";
  }
}
