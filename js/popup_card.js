let card1 = document.getElementById('card1');
let button_popup = document.getElementById('popup_text');
let card_text = document.getElementById('card_text');
let rewiws = document.getElementById('rewiws');
let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
let img4 = document.getElementById('img4');
let button1 = document.getElementById('left');
let button2 = document.getElementById('right');
let out = document.getElementById('out');
button_popup.addEventListener('click',function(){
    card1.style='height: 414px;';
    button_popup.style='display:none';
    card_text.style='overflow: visible;-webkit-line-clamp: unset;line-height: 22.4px;';
    rewiws.style='background-color: rgba(0, 0, 0, 0.5);';
    button1.style='opacity:1%';
    button2.style='opacity:1%';
    out.style='display:flex; padding-top: 169px;justify-content: center;'
});
out.addEventListener('click',function(){
    card1.style='height: 264px;';
    button_popup.style='display:initial';
    card_text.style='overflow: hiden;-webkit-line-clamp: 6;';
    rewiws.style='background-color: #EEF3F6;';
    button1.style='opacity:100%';
    button2.style='opacity:100%';
    out.style='display:none;'
});