//# para id; . para class; e nome da tag se for uma tag (ex: document.queryselector('input'))
// const backgroundImage = document.getElementById('background');
const background = document.querySelector('#background');
const btnTrocar = document.querySelector('#btn-trocar');
let contador = 0;

// arrow function
const trocaCorBackground = () => {
  if (contador === 0){
  background.style.backgroundColor = 'red'; 
  btnTrocar.style.backgroundColor = 'blue';
  contador = 1
  } else{
    background.style.backgroundColor = 'blue'; 
    btnTrocar.style.backgroundColor = 'red';
    contador = 0
  }
}