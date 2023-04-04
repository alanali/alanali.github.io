// -------------------- NAVBAR -------------------- //
var titleh;
var width = window.innerWidth;
window.onload = function() {
  titleh = document.getElementById("backing").height;
  titleh += "px";
  ltext = document.getElementById("lwcloud").innerHTML;
  rtext = document.getElementById("rwcloud").innerHTML;
};

window.onscroll = function() {
  scrollFunction();
};

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
  // On scroll
  if (document.documentElement.scrollTop > 30 || document.body.scrollTop > 30) {
    document.getElementById("backing").style.top = "-10px";
    document.getElementById("backing").style.height = document.getElementById("title").clientHeight + (width / 150) + "px";
    document.getElementById("title").style.fontSize = shrink("title");
    document.getElementById("subtitle").style.fontSize = shrink("subtitle");
    // Change colors
    document.getElementById("backing").style.background = "#98D9E3";
    document.getElementById("title").style.color = "white";
    document.getElementById("backing").style.borderTopLeftRadius = "0px";
    document.getElementById("backing").style.borderTopRightRadius = "0px";
    document.getElementById("backing").style.borderBottomLeftRadius = "2vw";
    document.getElementById("backing").style.borderBottomRightRadius = "2vw";
    // Change images
    document.getElementById("lc").src = "home page/lcloudpoof.gif";
    document.getElementById("rc").src = "home page/rcloudpoof.gif";
    document.getElementById("lwcloud").innerHTML = "";
    document.getElementById("rwcloud").innerHTML = "";
    setTimeout(() => {
      document.getElementById("lc").style.visibility = 'hidden';
      document.getElementById("rc").style.visibility = 'hidden';
    }, 1000);
// Original position
} else {
    document.getElementById("backing").style.height = titleh;
    document.getElementById("title").style.fontSize = grow("title");
    document.getElementById("subtitle").style.fontSize = grow("subtitle");
    document.getElementById("backing").style.top = "0px";
    document.getElementById("backing").style.background = "white";
    document.getElementById("title").style.color = "#8CC0A0";
  }
}
