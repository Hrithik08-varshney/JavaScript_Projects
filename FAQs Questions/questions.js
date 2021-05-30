const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
       const show=e.currentTarget.parentElement.nextElementSibling; 
       show.classList.toggle("add-para");
    })
})