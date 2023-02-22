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
  // On scroll
  if (document.documentElement.scrollTop > 30 || document.body.scrollTop > 30) {
    document.getElementById("backing").style.top = "-10px";
    document.getElementById("backing").style.height = document.getElementById("title").clientHeight + (width / 150) + "px";
    document.getElementById("title").style.fontSize = shrink("title");
    document.getElementById("subtitle").style.fontSize = shrink("subtitle");
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
    // Add clouds back
    // document.getElementById("lc").src = "home page/lcloud.png";
    // document.getElementById("rc").src = "home page/rcloud.png";
    // document.getElementById("lc").style.visibility = 'visible';
    // document.getElementById("rc").style.visibility = 'visible';
    // document.getElementById("lwcloud").innerHTML = ltext;
    // document.getElementById("rwcloud").innerHTML = rtext;
    document.getElementById("backing").style.height = titleh;
    document.getElementById("title").style.fontSize = grow("title");
    document.getElementById("subtitle").style.fontSize = grow("subtitle");
    document.getElementById("backing").style.top = "0px";
  }
}
