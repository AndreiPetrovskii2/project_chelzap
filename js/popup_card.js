let card1 = document.getElementById('card1');
let button_popup = document.getElementById('popup_text');
let card_text = document.getElementById('card_text');
let rewiws = document.getElementById('body');
button_popup.addEventListener('click',function(){
    card1.style='height: 414px;';
    button_popup.style='display:none';
    card_text.style='overflow: visible;-webkit-line-clamp: unset;line-height: 22.4px;';
})
/*body.addEventListener('click',function(){
    card1.style=' height: 264px;';
});*/