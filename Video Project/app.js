/* const preload=document.querySelector('.preloader'); */
const play=document.querySelector('.play');
const pause=document.querySelector('.pause');
const video=document.querySelector('.video');
/* If preloader is added */
/* window.addEventListener("load",function(){
    preload.classList.add('hide-preloader');
}) */
window.addEventListener("load",function(){
    play.classList.add('play-switch');
})
play.addEventListener("click",function(){
    play.classList.add('play-switch');
    pause.classList.remove('pause-switch');
    video.play();
})
pause.addEventListener("click",function(){
    pause.classList.add('pause-switch');
    play.classList.remove('play-switch');
    video.pause();
})
