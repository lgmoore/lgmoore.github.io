/* Functions */
function showdiscWin () {
	discWin.style.display = "block";
	scrnOverlay.style.visibility = "visible";
}
function hidediscWin () {
	discWin.style.display = "none";
	scrnOverlay.style.visibility = "hidden";
}

/* Main Function */
function show_window () {
	console.log("window loaded");
	/* Links */
	highwayBtn = document.getElementById("highway61_btn");
	discWinClose = document.getElementById("discWinClose");
	discWin = document.getElementById("discWin");
	scrnOverlay = document.getElementById("scrnOverlay");

/* Events */
  highwayBtn.onclick = showdiscWin;
  discWinClose.onclick = hidediscWin;
}
/* On-Load */
window.addEventListener("load", show_window, false);