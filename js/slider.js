let slider = document.getElementById('slider');
let left = document.getElementById('left');
let right = document.getElementById('right');
let reviews_slider = document.getElementById('reviews_slider');
let offset = 0;
right.addEventListener('click' ,function(){
    if(reviews_slider.innerWidth == 320) {
        reviews_slider.style = 'display : none';
    }
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
    left.style = 'background: white;'
    right.style = 'border: 2px solid; border-radius: 0px;background: #EEF3F6;';
})
left.addEventListener('mousedown' , function (){
    left.style = 'background: transparent;'
    right.style = 'background: white;'
    left.style = 'border: 2px solid; border-radius: 0px;';
})
right.addEventListener('mouseup' , function (){
    left.style = 'background: white;'
    right.style = 'border: 0px solid; border-radius: 4px;background: #EEF3F6';
})
left.addEventListener('mouseup' , function (){
    left.style = 'background: transparent;'
    right.style = 'background: white;'
    left.style = 'border: 0px solid; border-radius: 4px;';
})
right.addEventListener('mouseover' , function (){
    right.style = 'border: 1px #046FB3 solid;';
}) 
right.addEventListener('mouseout' , function (){
    right.style = 'border: none;';
}) 
left.addEventListener('mouseover' , function (){
    left.style = 'border: 1px #046FB3 solid;';
}) 
left.addEventListener('mouseout' , function (){
    left.style = 'border: none;';
}) 

