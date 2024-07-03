var img = document.getElementById("img");
var light = document.getElementById("light");

function btn1() {
  img.classList.add("mystyle1");
  light.classList.add("mystylelight");
}

function btn2() {
  light.classList.add("mystylelight");
  img.classList.add("mystyle2");
}

function btn3() {
  light.classList.add("mystylelight");
  img.classList.add("mystyle3");
}

function btn4() {
  light.classList.add("mystylelight");
  img.classList.add("mystyle4");
}

function offBtn() {
  img.classList.remove("mystyle1");
  img.classList.remove("mystyle2");
  img.classList.remove("mystyle3");
  img.classList.remove("mystyle4");
  light.classList.remove("mystylelight");
}
