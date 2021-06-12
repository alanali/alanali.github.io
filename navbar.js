window.onresize = function() {resizeFunction()};
window.onscroll = function() {scrollFunction()};

function boo(){
  window.alert("boo!")
}

function checkFont(id) {
  var size;
  if (id == "bunni") {
    if ("5.5vw" < "20px") {
      size = "20px";
    } else if ("5.5vw" > "70px") {
      size = "70px-2vw";
    } else {
      size = "3.5vw";
    }
  }
  else if (id == "store") {
    if ("5.5vw-30px" < "15px") {
      size = "15px";
    } else if ("5.5vw-30px" > "30px") {
      size = "30px-2vw";
    } else {
      size = "3.5vw-30px";
    }
  }
  return size;
}

function scrollFunction() {
  var bsize = document.getElementById("bunni").style.fontSize;
  var ssize = document.getElementById("store").style.fontSize;
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("bunni").style.fontSize = checkFont("bunni");
    document.getElementById("store").style.fontSize = checkFont("store");
  } else {
    document.getElementById("bunni").style.fontSize = bsize;
    document.getElementById("store").style.fontSize = ssize;
    // if ("0.7em" > "30px") {
    //   document.getElementById("store").style.letterSpacing = "30px";
    // } else if ("0.7em" < "0px") {
    //   document.getElementById("store").style.letterSpacing = "0px";
    // } else {
    //   document.getElementById("store").style.letterSpacing = "0.7em";
    // }
  }
}
