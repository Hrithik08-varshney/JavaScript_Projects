const para_1=document.querySelector('.para-1');
const para_2=document.querySelector('.para-2');
const para_3=document.querySelector('.para-3');
const btn_1=document.querySelector('#btn-1');
const btn_2=document.querySelector('#btn-2');
const btn_3=document.querySelector('#btn-3');
btn_1.addEventListener("click",function(){
    para_1.classList.add('index-show');
    para_2.classList.remove('index-show');
    para_3.classList.remove('index-show');
})
btn_2.addEventListener("click",function(){
    para_2.classList.add('index-show');
    para_1.classList.remove('index-show');
    para_3.classList.remove('index-show');
})
btn_3.addEventListener("click",function(){
    para_3.classList.add('index-show');
    para_2.classList.remove('index-show');
    para_1.classList.remove('index-show');
})