const openbtn=document.querySelector(".open-btn");
const closebtn=document.querySelector(".close-button");
const modal=document.querySelector(".overlay");

openbtn.addEventListener("click",function(){
    modal.classList.add("open-modal");
});
closebtn.addEventListener("click",function(){
    modal.classList.remove("open-modal");
});