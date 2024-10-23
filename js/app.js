import { playList } from "./audioList"

const audio = document.getElementById('audio')
const play = document.getElementById('play')
const pause = document.getElementById('pause')
const forward = document.getElementById('forward')
const rewind = document.getElementById('rewind')
const stope = document.getElementById('stope')

play.addEventListener('click', () => audio.play())

pause.addEventListener('click', () => audio.pause())

rewind.addEventListener('click', () => audio.currentTime -= 10)

forward.addEventListener('click', () => audio.currentTime -= 10)

stope.addEventListener('click', () => {
    audio.pause()
    audio.currentTime = 0
})