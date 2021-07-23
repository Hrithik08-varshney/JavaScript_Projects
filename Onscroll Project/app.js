const head=document.querySelector('.head');
const sect=document.querySelector('.section-1');
/* const body=document.getElementsByTagName('body');
body.addEventListener("onscroll",function(){
    head.classList.add();
}) */
window.onmousewheel=function(){
    head.classList.add("head-color");
    sect.classList.add("head-color");
}