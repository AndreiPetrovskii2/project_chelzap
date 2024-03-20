let second_header = document.getElementById('second_header');
let close_btn = document.getElementById('close_btn');
let first_header = document.getElementById('first_header');
let drop_down = document.getElementById('drop_down');
let main = document.getElementById('main');

drop_down.addEventListener('click', function (){
    second_header.style= 'display:flex';
    first_header.style ='display:none';
    main.style = 'filter: blur(1px);'
})
close_btn.addEventListener('click', function (){
    second_header.style= 'display:none';
    first_header.style ='display:flex';
    main.style = 'filter: blur(0px);'

})