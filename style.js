// -------------------- NAVBAR -------------------- //
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
  if (id == "title") {
    if (3.5 * width / 100 <= 30) {
      size = "25px";
    } else if (3.5 * width / 100 >= 50) {
      size = "40px";
    } else {
      size = "3.5vw";
    }
  }
  else if (id == "subtitle") {
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
  if (id == "title") {
    if (5.5 * width / 100 <= 30) {
      size = "30px";
    } else if (5.5 * width / 100 >= 70) {
      size = "70px";
    } else {
      size = "5.5vw";
    }
  }
  else if (id == "subtitle") {
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
    document.getElementById("title").style.fontSize = shrink("title");
    document.getElementById("subtitle").style.fontSize = shrink("subtitle");
    document.getElementById("cloud").height = "30px";
  } else {
    document.getElementById("backing").style.height = titleh;
    document.getElementById("title").style.fontSize = grow("title");
    document.getElementById("subtitle").style.fontSize = grow("subtitle");
    document.getElementById("backing").style.top = "0px";
  }
}
