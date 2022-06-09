//Button Menu
function btnMain(){
    const btnMenu = document.querySelector(".header__body .header__body-menu");
    const bgMenu = document.querySelector(".header__nav .nav");
    btnMenu.addEventListener("click",function(){
        btnMenu.classList.toggle("active");
        bgMenu.classList.toggle("active");
        console.log(bgMenu)
    })
}
btnMain();

//