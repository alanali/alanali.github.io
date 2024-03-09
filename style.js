// -------------------- TITLE -------------------- //
let title, subtitle, clouds, header, headerHeight, headerTop, titleFont, subtitleFont;
var width = window.innerWidth;
document.addEventListener("DOMContentLoaded", function() {
  title = document.getElementById('title');
  subtitle = document.getElementById('subtitle');
  clouds = document.querySelector(".clouds");
  header = document.querySelector(".header");
  headerHeight = header.offsetHeight + "px";
  headerTop = parseFloat(window.getComputedStyle(header).top) + "px";
  titleFont = parseFloat(window.getComputedStyle(title).fontSize) + "px";
  subtitleFont = parseFloat(window.getComputedStyle(subtitle).fontSize) + "px";
});

window.onscroll = function() {
  if (document.documentElement.scrollTop > 30) {
    clouds.classList.add("fly-up");
    updateStyles(true);
  } else {
    updateStyles(false);
  }
};

function shrink(id) {
  var size;
  if (id == "title") {
    if (3.5 * width / 100 <= 30) {
      size = "30px";
    } else if (3.5 * width / 100 >= 50) {
      size = "40px";
    } else {
      size = "3.5vw";
    }
  } else if (id == "subtitle") {
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
    size = titleFont;
  } else if (id == "subtitle") {
    size = subtitleFont;
  }
  return size;
}

function updateStyles(isScrolled) {
  header.style.height = (isScrolled ? title.clientHeight : parseFloat(headerHeight)) + "px";
  header.style.top = isScrolled ? "0px" : headerTop;
  header.style.background = isScrolled ? "#98D9E3" : "transparent";
  title.style.fontSize = isScrolled ? shrink("title") : grow("title");
  title.style.color = isScrolled ? "white" : "#8CC0A0";
  subtitle.style.fontSize = isScrolled ? shrink("subtitle") : grow("subtitle");
}
