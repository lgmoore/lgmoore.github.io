/* Functions */
function showdiscWin() {
	discWin.style.display = "block";
	scrnOverlay.style.visibility = "visible";
}

function hidediscWin() {
	discWin.style.display = "none";
	scrnOverlay.style.visibility = "hidden";

	var img_loc = document.getElementById("add_img");
	var win_img =document.getElementById("win_img");
	img_loc.removeChild(win_img);
}

/* Get id of clicked */
function reply_click(clicked_id)
{
	console.log("function loading");
	var img = document.createElement("img");

    if (clicked_id == "highway61_btn") {
    	img.src = "images/highway61.jpg";
    	img.id = "win_img";
    }
    if (clicked_id == "abbey_road_btn") {
    	img.src = "images/abbey_road.jpg";
    	img.id = "win_img";
    }
    if (clicked_id == "harvest_btn") {
    	img.src = "images/harvest.jpg";
    	img.id = "win_img";
    }
    if (clicked_id == "everyman_btn") {
    	img.src = "images/everyman.jpg";
    	img.id = "win_img";
    }      
    if (clicked_id == "odyssey_btn") {
    	img.src = "images/odyssey.jpg";
    	img.id = "win_img";
    }      

	var xsrc = document.getElementById("add_img");
	xsrc.appendChild(img);

	showdiscWin();
}

/* Main Function */
function show_window() {
	console.log("window loaded");
	/* Links */
	var album = document.getElementsByClassName("album");
	var discWinClose = document.getElementById("discWinClose");
	var discWin = document.getElementById("discWin");
	var scrnOverlay = document.getElementById("scrnOverlay");

/* Events */
  discWinClose.onclick = hidediscWin;
}
/* On-Load */
window.addEventListener("load", show_window, false);