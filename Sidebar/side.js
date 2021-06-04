const btn1=document.querySelector('.bars-button');
const btn2=document.querySelector('.close');
const side=document.querySelector('.side-bar');
btn1.addEventListener("click",function(){
side.classList.toggle("show-sidebar");
})
btn2.addEventListener("click",function(){
    side.classList.remove("show-sidebar");
})