const steps_container2 = document.getElementById('cars_cards-first2');
let pressed2 = false;
let startX2 = 0;

steps_container2.addEventListener('mousedown', function (e){
    pressed2 = true;
    startX2 = e.clientX;
})

steps_container2.addEventListener('mouseleave', function (e){
    pressed2 = false;
})

window.addEventListener('mouseup', function (e){
    pressed2 = false;
})

steps_container2.addEventListener('mousemove', function (e){
   if(!pressed2) {
    return
   }
   steps_container2.scrollLeft += startX2 - e.clientX
})