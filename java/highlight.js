/*
<!-- Desciption: Menu Highlight Javascript -->
<!-- Author: Lucas Moore -->
<!-- Date: 13/10/17 -->
*/

function init2 () {
	console.log("inti2");

// Menu Highlight Enhancement Section
	var bodyId = document.body.id;
	var nav = document.getElementsByTagName('nav') [0];
	var pers = document.getElementById("pers_link");
	var prof = document.getElementById("prof_link");
	var interests = document.getElementById("interests_link");
	var travel = document.getElementById("travel_link");
	var music = document.getElementById("music_link");
	var game = document.getElementById("game_link");
	var contact = document.getElementById("contact_link");

	if (bodyId == "pers") {
		pers.style.background = "#B42929";
	}
	if (bodyId == "prof") {
		prof.style.background = "#B42929";
	}
	if (bodyId == "interests") {
		interests.style.background = "#B42929";
	}
	if (bodyId == "travel") {
		travel.style.background = "#B42929";
	}		
	if (bodyId == "music") {
		music.style.background = "#B42929";
	}
	if (bodyId == "game") {
		game.style.background = "#B42929";
	}
	if (bodyId == "contact") {
		contact.style.background = "#B42929";
	}
	console.log("Highlights working");
}
/* On-Load */
window.addEventListener("load", init2, false);