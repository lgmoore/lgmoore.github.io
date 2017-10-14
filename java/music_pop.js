/* Functions */
function showdiscWin () {
	discWin.style.display = "block";
	scrnOverlay.style.visibility = "visible";
}
function hidediscWin () {
	discWin.style.display = "none";
	scrnOverlay.style.visibility = "hidden";
}

/* Get id of clicked */
function reply_click(clicked_id)
{
	showdiscWin();

	var img = document.createElement("img");

    if (clicked_id == "highway61_btn") {
    		img.src = "images/highway61.jpg";
    }

	var xsrc = document.getElementById("add_img");
	xsrc.appendChild(img);
}

/* Main Function */
function show_window () {
	console.log("window loaded");
	/* Links */
	album = document.getElemenyByClass("album");
	discWinClose = document.getElementById("discWinClose");
	discWin = document.getElementById("discWin");
	scrnOverlay = document.getElementById("scrnOverlay");

/* Events */
  album.onclick = reply_click(this.id)
  discWinClose.onclick = hidediscWin;
}
/* On-Load */
window.addEventListener("load", show_window, false);