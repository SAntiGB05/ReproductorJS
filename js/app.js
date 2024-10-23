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

let index = 0;
audio.src = playList[index].song; 
updateTrackInfo(); 

function updateTrackInfo() {
    trackTitle.textContent = playList[index].title;
    trackArtist.textContent = playList[index].artist;
    trackImage.src = playList[index].img;
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

rewind.addEventListener('click', () => 
    audio.currentTime -= 10
);

forward.addEventListener('click', () => 
    audio.currentTime += 10
);

stop.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
});

next.addEventListener('click', () => {
    index = (index + 1) % playList.length; 
    audio.src = playList[index].song; 
    updateTrackInfo(); 
    audio.play();
    play.classList.remove('bx-play');
    play.classList.add('bx-pause');
});

former.addEventListener('click', () => {
    index = (index - 1 + playList.length) % playList.length; 
    audio.src = playList[index].song; 
    updateTrackInfo(); 
    audio.play();
    play.classList.remove('bx-play');
    play.classList.add('bx-pause');
});
