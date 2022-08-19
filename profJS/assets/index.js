const video = document.querySelector("video");
const buttonPlay = document.querySelector("#button-play");
const buttonMute = document.querySelector("#button-mute");

import MediaPlayer from "./mediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";

const player = new MediaPlayer({el: video, plugins: [ new AutoPlay()]});

buttonPlay.onclick = () => { !player.onPlay ? player.play(): player.pause() }

buttonMute.onclick = () => { 
    player.onMute ? player.unmute(): player.mute() 
}