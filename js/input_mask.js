let input_header = document.getElementById('input');
let input_second = document.getElementById('input_second')

const phoneMask = new IMask(input_header, {
  mask: "+{7}(000)000-00-00",
});
const phoneMask2 = new IMask(input_second, {
  mask: "+{7}(000)000-00-00",
});