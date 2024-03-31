let right = document.getElementById('right');
let left = document.getElementById('left');
function initSwiper() {
    var swiper = new Swiper(".mySwiper",{
        slidesPerView: "auto",
        spaceBetween: 16,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}
function initSwiper2() {
    var swiper2 = new Swiper(".mySwiper2",{
        slidesPerView: "auto",
        spaceBetween: 16,
        pagination: {
            el: ".swiper-pagination2",
            clickable: true,
        },
    });
}
function initSwiper3() {
    var swiper3 = new Swiper(".mySwiper3",{
        slidesPerView: "auto",
        navigation: {
        nextEl: ".buttons_2",
        prevEl: ".buttons_1",
  },
    });
}
function initSwiper4() {
    var swiper4 = new Swiper(".mySwiper4",{
        slidesPerView: "auto",
    });
}
initSwiper3();
if (window.innerWidth < 768) {
    initSwiper4();
    initSwiper2();
    initSwiper();
}
else {
    if (initSwiper) {
        initSwiper.destroy();
    }
}
right.addEventListener('mousedown' , function (){
    right.style = 'border: 2px solid; border-radius: 0px;;';
})
left.addEventListener('mousedown' , function (){
    left.style = 'border: 2px solid; border-radius: 0px;';
})
right.addEventListener('mouseup' , function (){
    right.style = 'border: 0px solid; border-radius: 4px;';
})
left.addEventListener('mouseup' , function (){
    left.style = 'border: 0px solid; border-radius: 4px;';
})
right.addEventListener('click', function (){
    left.style = 'background-color: white;'
    right.style = 'background-color: transparent;'
})
left.addEventListener('click', function (){
    right.style = 'background-color: white;'
    left.style = 'background-color: transparent;'
})