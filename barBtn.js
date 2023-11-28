const barBtn = document.querySelector(".fa-bars-staggered");
const addMenu = document.querySelector(".add-menu");

barBtn.addEventListener("click", function(){
    addMenu.classList.toggle("add-menu-height");
});