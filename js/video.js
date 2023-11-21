var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.getElementById("player1");
	video.autoplay = false;
	video.loop = false;
	console.log("auto play is set to" + video.autoplay);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video = document.getElementById("player1");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video = document.getElementById("player1");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video = document.getElementById("player1");
	//video.defaultPlaybackRate = 1;
	video.playbackRate -= 0.1; 
	console.log("Slow down video");
	console.log("Speed is" + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video = document.getElementById("player1");
	//video.defaultPlaybackRate = 1;
	video.playbackRate += 0.1; 
	console.log("Speed up video");
	console.log("Speed is" + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	video = document.getElementById("player1"); 
	if (video.currentTime < video.duration){
		video.currentTime += 10;
	} else {
		video.currentTime = 0
		video.play();
	}
	console.log("Skip video");
	console.log("Skipped at" + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	video = document.getElementById("player1");
	if (video.muted === false){
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
		console.log("Muted video ");
	} else{
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
		console.log("UnMuted video ");
	}
});

//need to do

document.querySelector("#slider").addEventListener('change', function(e) {
	video = document.getElementById("player1");
	video.volume = e.currentTarget.value / 100;
	//video = this + 100;
	//volume = document.querySelector("#slider");
	console.log("Volume " + video.volume);
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	document.getElementById("player1").classList.add('oldSchool');
});

document.querySelector("#orig").addEventListener("click", function() {
	document.getElementById("player1").classList.remove('oldSchool');
});





