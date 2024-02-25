let call = document.getElementById('ring');
let input_window = document.getElementById('input');
let close = document.getElementById('img_close');
var main2 = document.getElementById('main');

input_window.addEventListener('click',function (){
    call.style = 'display:flex;filter: blur(0px);';
    main2.style = 'filter: blur(1px);'
})
close.addEventListener('click',function (){
    call.style = 'display:none';
    main2.style = 'filter: blur(0px);'
})
