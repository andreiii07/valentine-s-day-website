function functiebutoaneClick(yes, no, nweb) {
	let yesButton = document.getElementById(yes);
	let noButton = document.getElementById(no);
	if(yesButton){
		yesButton.onclick = function() {
			window.location.href = "yes.html";
		}
		noButton.onclick = function() { 
			window.location.href = "nweb";
		}
	}
}

functiebutoaneClick("yes1", "no1", "no1.html");
functiebutoaneClick("yes2", "no2", "no2.html");
functiebutoaneClick("yes3", "no3", "no2.html");