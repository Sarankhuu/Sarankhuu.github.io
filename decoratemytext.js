window.onload = function(){
	var text = document.getElementById('textarea');
	text.style.fontSize = "12pt";

	"use strict";
	let biggerBtn = document.getElementById("btn");
	biggerBtn.onclick = btnClick;

	let ckBox = document.getElementById("ckbox");
	ckBox.onchange = changed;

	let btnPig = document.getElementById("pig");
	pig.onclick = pigClick;

	let btnMalk = document.getElementById("malk");
	btnMalk.onclick = malkClick;
};

function btnClick(){
	var text = document.getElementById('textarea');
	setInterval(() => {text.style.fontSize = parseInt(text.style.fontSize) + 2 + "pt"}, 500);
}

function changed(){
	let el = document.getElementById('textarea');
	let ckBox = document.getElementById('ckbox').checked;

	if(ckBox) {
		el.style.fontWeight = "bold";	
		el.style.color = "green";
		el.style.textDecoration = "underline";
	} else {
		el.style.fontWeight = "normal";
		el.style.textDecoration = "none";
		el.style.color = "black";
	}
	
	document.body.style.backgroundImage = "url(http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg)";
}

function pigClick(){
	var text = document.getElementById('textarea').value.split(" ");
	var renew = text.map(e => {
		if(isVowel(e.charAt(0))){
			return e + "-ay";
		} else {
			if(!isVowel(e.charAt(1))){
				return (e + e.charAt(0) + e.charAt(1)).substr(2) + "-ay";
			} else{
				return (e + e.charAt(0)).substr(1) + "-ay";
			}
		}
	});
	document.getElementById('textarea').value = renew;
}

function isVowel(b){
	var n = b.length;
	var a = b.toLowerCase();
	if(n != 1) {
		return false;
	} else if(a == "a" || a == "e" || a == "o" || a == "u" || a == "i") {
		return true;
	} else {
		return false;
	};
}

function malkClick(){
	  var txt = document.getElementById("textarea").value.split(" ");
	  var res = txt.map(e => {
	    if (e.length >= 5) {
	      return "Malkovitch";
	    } else {
	      return e;
	    }
	  });
	  document.getElementById("textarea").value = res;
	
}



