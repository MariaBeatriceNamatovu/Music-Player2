let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

song.onloadedmetadata = function(){
    progress.max = song.duration;       //

    progress.value = song.currentTime;
}

function playPause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.add("fa-play");
        ctrlIcon.classList.remove("fa-pause");
        
    }
    else{
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
       
        
    }
}

song.addEventListener('timeupdate', function() {
    progress.value = song.currentTime;
});

progress.oninput = function(){
    song.currentTime = progress.value;
}

if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    }, 500);
}

// Function to seek forward by 10 seconds
function seekForward() {
    song.currentTime += 10; // Seek forward by 10 seconds
}

// Function to seek backward by 10 seconds
function seekBackward() {
    song.currentTime -= 10; // Seek backward by 10 seconds
}

function restartSong() {
    // Logic to restart the current song
    // For example:
    song.currentTime = 0; // Restart the current song from the beginning
    song.play(); // Start playing the restarted song
}

let musicInfo = document.getElementById("musicInfo");

function toggleMusicInfo() {
    musicInfo.classList.toggle("hidden"); // Toggle the visibility of music info
}


progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
    
}








