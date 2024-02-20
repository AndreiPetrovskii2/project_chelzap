let slider = document.getElementById('slider');
let left = document.getElementById('left');
let right = document.getElementById('right');
let offset = 0;
right.addEventListener('click' ,function(){
    left.style= 'background-color: #EEF3F6;';
    right.style= 'background-color: #FFFFFF;border:none;';
    offset += 410;
    if(offset > 410){
        offset = 410;
    }
    slider.style.left = -offset + 'px';
});
left.addEventListener('click' ,function(){
    right.style= 'background-color: #EEF3F6;';
    left.style= 'background-color: #FFFFFF;border:none;';
    offset -= 410;
    if(offset < 0){
        offset = 0;
    }
    slider.style.left = -offset + 'px';
});


