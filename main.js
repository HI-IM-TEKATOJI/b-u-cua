var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var upside = document.getElementById("upside");

btn1.addEventListener("click", function () {
  var dice10 = document.getElementById("dice10");
  var dice20 = document.getElementById("dice20");
  var dice30 = document.getElementById("dice30");
  var i = 0;
  setInterval(() => {
    if (i >= 6) return;
    var random1 = Math.ceil(Math.random() * 6);
    var random2 = Math.ceil(Math.random() * 6);
    var random3 = Math.ceil(Math.random() * 6);
    dice10.src = "./pictures/" + random1 + ".png";
    dice20.src = "./pictures/" + random2 + ".png";
    dice30.src = "./pictures/" + random3 + ".png";
    i++;
  }, 200);
});

btn2.addEventListener("click", function () {
  upside.classList.add("up");
  upside.classList.remove("down");
});

btn3.addEventListener("click", function () {
  upside.classList.remove("up");
  upside.classList.add("down");
});
