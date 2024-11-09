var dow1 = window.document.querySelector('#baixar1')
var dow2 = window.document.querySelector('#baixar2')
dow1.addEventListener('click', baixar1)
dow2.addEventListener('click', baixar2)
function baixar1() {
  alert('O download começará em breve');
}
function baixar2() {
  alert('O download começará em breve')
}

var test = window.document.querySelector('#teste1')
test.addEventListener('click', teste)
function teste() {
  alert('Conteúdo ainda não disponível.')
}