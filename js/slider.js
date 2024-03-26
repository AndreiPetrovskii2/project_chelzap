let slider = document.getElementById('slider');
let left = document.getElementById('left');
let right = document.getElementById('right');
let reviews_slider = document.getElementById('reviews_slider');
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