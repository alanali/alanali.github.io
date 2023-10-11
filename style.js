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
  const cloudsContainer = document.querySelector(".clouds");
  const backing = document.getElementById("backing");
  const title = document.getElementById("title");
  const subtitle = document.getElementById("subtitle");

  if (document.documentElement.scrollTop > 30 || document.body.scrollTop > 30) {
    cloudsContainer.classList.add("fly-up");
    updateStyles(backing, title, subtitle, true);
  } else {
    updateStyles(backing, title, subtitle, false);
  }
}

function updateStyles(backing, title, subtitle, isScrolled) {
  backing.style.height = isScrolled
    ? title.clientHeight + (width / 300) + "px"
    : titleh;

  title.style.fontSize = isScrolled ? shrink("title") : grow("title");
  subtitle.style.fontSize = isScrolled ? shrink("subtitle") : grow("subtitle");

  backing.style.top = isScrolled ? "-10px" : "0px";
  backing.style.background = isScrolled ? "#98D9E3" : "white";
  title.style.color = isScrolled ? "white" : "#8CC0A0";

  const topLeftRadius = isScrolled ? "0px" : "2vw";
  const topRightRadius = isScrolled ? "0px" : "2vw";
  const bottomLeftRadius = isScrolled ? "2vw" : "0px";
  const bottomRightRadius = isScrolled ? "2vw" : "0px";

  backing.style.borderTopLeftRadius = topLeftRadius;
  backing.style.borderTopRightRadius = topRightRadius;
  backing.style.borderBottomLeftRadius = bottomLeftRadius;
  backing.style.borderBottomRightRadius = bottomRightRadius;
}
