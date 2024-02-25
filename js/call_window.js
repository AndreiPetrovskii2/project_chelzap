let call = document.getElementById('ring');
let input_window = document.getElementById('input4');
let close = document.getElementById('img_close');
var main2 = document.getElementById('main');
let shadow = document.getElementById('shadow');
let shadow2 = document.getElementById('shadow2');
let shadow_header = document.getElementById('shadow_header');
let shadow_img = document.getElementById('shadow_img');
let shadow_img2 = document.getElementById('shadow_img2');
let shadow_img3 = document.getElementById('shadow_img3');
let shadow_dignities = document.getElementById('shadow_dignities')

input_window.addEventListener('click',function (){
    call.style = 'display:flex;';
    shadow.style = 'filter: blur(2px);';
    shadow2.style = 'filter: blur(2px);';
    shadow_header.style = 'filter: blur(2px);';
    shadow_img.style = 'filter: blur(2px);';
    shadow_img2.style = 'filter: blur(2px);';
    shadow_img3.style = 'filter: blur(2px);';
    shadow_dignities.style = 'filter: blur(2px);';
})
close.addEventListener('click',function (){
    call.style = 'display:none';
    shadow.style = 'filter: blur(0px);';
    shadow2.style = 'filter: blur(0px);';
    shadow_header.style = 'filter: blur(0px);';
    shadow_img.style = 'filter: blur(0px);';
    shadow_img2.style = 'filter: blur(0px);;';
    shadow_img3.style = 'filter: blur(0px);';
    shadow_dignities.style = 'filter: blur(0px);';
})
