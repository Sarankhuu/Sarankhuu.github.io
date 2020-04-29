let currAnim = "Blank";
var timer = "";
let currText = "";
let currFont = "12pt";
let speed = 250;
let step = 0;
window.onload = function(){
	document.getElementById("animation").onchange = changeAnimation;
	document.getElementById("animation").value = "Blank";
	document.getElementById("start").onclick = start;
	document.getElementById("stop").onclick = stop;
	document.getElementById("fontsize").onchange = changeFont;
	document.getElementById("turbo").onchange = turbo;
	document.getElementById("text-area").style.fontSize = currFont;
}

function changeAnimation(){
	let anim = document.getElementById("animation");
	let txtArea = document.getElementById("text-area");
	let val = anim.options[anim.selectedIndex].value;
	currText = document.getElementById("text-area");
	step = 0;
	if (val === "Blank") {
		txtArea.value = "";
		currAnim = null;
	} else if (val === "Exercise") {
		txtArea.value = ANIMATIONS["Exercise"];
		currAnim = "Exercise";
	} else if (val === "Juggler") {
		txtArea.value = ANIMATIONS["Juggler"];
		currAnim = "Juggler";
	} else if (val === "Bike") {
		txtArea.value = ANIMATIONS["Bike"];
		currAnim = "Bike";
	} else {
		txtArea.value = ANIMATIONS["Dive"];
		currAnim = "Dive";
	}
}

function start(){
	currText = document.getElementById("text-area").value;
	document.getElementById("start").disabled = true;
	document.getElementById("stop").disabled = false;
	document.getElementById("animation").disabled = true;

	run(getAnim(currAnim), speed);
}

function getAnim(name) {
  if (name === "Exercise") {
    return ANIMATIONS["Exercise"];
  }
  if (name === "Juggler") {
    return ANIMATIONS["Juggler"];
  }
  if (name === "Bike") {
    return ANIMATIONS["Bike"];
  }
  if (name === "Dive") {
    return ANIMATIONS["Dive"];
  }
}

function stop() {
  document.getElementById("stop").disabled = true;
  document.getElementById("start").disabled = false;
  document.getElementById("animation").disabled = false;
  if (timer) {
    clearInterval(timer);
    document.getElementById("text-area").value = currText;
  }
}

function run(anim, speed) {
  let e = document.getElementById("animation");
  // console.log(e.selectedIndex);
  if (e.selectedIndex != 0) {
    anim = anim.split("=====\n");
    // let i = 0;
    let i = step;
    if (timer) {
      clearInterval(timer);
    }

    timer = setInterval(() => {
      if (i === anim.length) {
        i = 0;
        step = 0;
      }
      document.getElementById("text-area").value = anim[i];
      i++;
      step++;
    }, speed);
  }
}

function changeFont() {
	var size = this.value;
	var textArea = document.getElementById("text-area");
	textArea.style.fontSize = parseInt(size) + "pt";
}

function turbo(){
	let e = document.getElementById("turbo");
	if (e.checked) {
		speed = 50;
	} else {
		speed = 250;
	}
	run(getAnim(currAnim), speed);
}