let input_header = document.getElementById('input');
let input_second = document.getElementById('input_second2')
let input_header2 = document.getElementById('input2');

const phoneMask = new IMask(input_header, {
  mask: "+{7}(000)000-00-00",
});
const phoneMask2 = new IMask(input_second2, {
  mask: "+{7}(000)000-00-00",
});
const phoneMask3 = new IMask(input_header2, {
  mask: "+{7}(000)000-00-00",
});