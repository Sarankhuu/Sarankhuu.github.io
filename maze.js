"user strict";
$(document).ready(function() {
  $("#start").click(start);
});

var win = false;

function start() {
  $("#maze .boundary").mouseover(red);
  $("#end").mouseover(end);
  $("#maze").mouseleave(red);
  $("#status").text("playing");
  $("#maze .boundary").removeClass("youlose");
}

function end() {
  $("#status").text("You win");
  $("#maze .boundary").unbind("mouseover");
  $("#maze").unbind("mouseleave");
  win = true;
}

function red() {
  $("#maze .boundary").addClass("youlose");
  $("#status").text("you lose");
}
