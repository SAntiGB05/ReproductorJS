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
audio.src = playList[currentTrackIndex].song; // Establecer la primera canción
updateTrackInfo(); // Actualizar la info de la canción al inicio

function updateTrackInfo() {
    trackTitle.textContent = playList[currentTrackIndex].title;
    trackArtist.textContent = playList[currentTrackIndex].artist;
    trackImage.src = playList[currentTrackIndex].img;
}

// Reproducir/pausar
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

// Retroceder 10 segundos
rewind.addEventListener('click', () => {
    audio.currentTime = Math.max(0, audio.currentTime - 10);
});

// Adelantar 10 segundos
forward.addEventListener('click', () => {
    audio.currentTime = Math.min(audio.duration, audio.currentTime + 10);
});

// Detener audio
stop.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
});

// Siguiente canción
next.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex + 1) % playList.length; // Cambiar a la siguiente canción
    audio.src = playList[currentTrackIndex].song; // Actualizar la fuente
    updateTrackInfo(); // Actualizar información de la canción
    audio.play(); // Reproducir la nueva canción
    play.classList.remove('bx-play');
    play.classList.add('bx-pause');
});

// Canción anterior
former.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex - 1 + playList.length) % playList.length; // Cambiar a la canción anterior
    audio.src = playList[currentTrackIndex].song; // Actualizar la fuente
    updateTrackInfo(); 
    audio.play();
    play.classList.remove('bx-play');
    play.classList.add('bx-pause');
});
