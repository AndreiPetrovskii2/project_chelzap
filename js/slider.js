let slider = document.getElementById('slider');
let left = document.getElementById('left');
let right = document.getElementById('right');
let offset = 0;
right.addEventListener('click' ,function(){
    offset += 410;
    if(offset > 410){
        offset = 410;
    }
    slider.style.left = -offset + 'px';
});
left.addEventListener('click' ,function(){
    offset -= 410;
    if(offset < 0){
        offset = 0;
    }
    slider.style.left = -offset + 'px';
});