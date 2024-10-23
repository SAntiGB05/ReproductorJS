import { playList } from "./audioList.js";

const audio = document.getElementById('audio');
const play = document.getElementById('play');
const rewind = document.getElementById('rewind');
const forward = document.getElementById('forward');
const stop = document.getElementById('stop');
const next = document.getElementById('next');
const former = document.getElementById('former');
const trackTitle = document.getElementById('player__song');
const trackArtist = document.getElementById('player__artist');
const trackImage = document.getElementById('player__img');

let currentTrackIndex = 0;
audio.src = playList[currentTrackIndex].song; 
updateTrackInfo(); 

function updateTrackInfo() {
    trackTitle.textContent = playList[currentTrackIndex].title;
    trackArtist.textContent = playList[currentTrackIndex].artist;
    trackImage.src = playList[currentTrackIndex].img;
}


play.addEventListener('click', () => {
    if (audio.paused) {  
        audio.play();
        play.classList.remove('bx-play');
        play.classList.add('bx-pause');
    } else {
        audio.pause();
        play.classList.remove('bx-pause');
        play.classList.add('bx-play');
    }
});

rewind.addEventListener('click', () => {
    audio.currentTime = Math.max(0, audio.currentTime - 10);
});

forward.addEventListener('click', () => {
    audio.currentTime = Math.min(audio.duration, audio.currentTime + 10);
});

stop.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
});

next.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex + 1) % playList.length; 
    audio.src = playList[currentTrackIndex].song; 
    updateTrackInfo(); 
    audio.play();
    play.classList.remove('bx-play');
    play.classList.add('bx-pause');
});

former.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex - 1 + playList.length) % playList.length; 
    audio.src = playList[currentTrackIndex].song; 
    updateTrackInfo(); 
    audio.play();
    play.classList.remove('bx-play');
    play.classList.add('bx-pause');
});
