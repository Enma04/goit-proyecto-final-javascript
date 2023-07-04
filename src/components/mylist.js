import { lista, deleteItem } from './showList';

const titulo = document.getElementById('titleMylist');
const listaFav = document.getElementById('listaFav');
const btnQueue = document.querySelector('.btn_queue');
const btnWtched = document.querySelector('.btn_watch');

lista(listaFav, 'watched');

//LISTA QUEUE
btnQueue.addEventListener('click', () => {
  titulo.textContent = "Mi lista por ver";
  listaFav.innerHTML = '';
  lista(listaFav, 'queue');
});

//LISTA WATCHED
btnWtched.addEventListener('click', () => {
  titulo.textContent = "Mi lista de vistos";
  listaFav.innerHTML = '';
  lista(listaFav, 'watched');
});

//ESCUCHA DE BOTONES DE ELIMINACIÓN
listaFav.addEventListener('click', event => {
  //BOTON WATCHED
  if (event.target.id === 'deletewatched') {
    console.log("event= ", event);
    deleteItem(event, 'watched');
    lista(listaFav, 'watched');
  }
  //BOTON QUEUE
  if (event.target.id === 'deletequeue') {
    console.log("event= ", event);
    deleteItem(event, 'queue');
    lista(listaFav, 'queue');
  }
});