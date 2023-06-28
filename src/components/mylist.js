import { lista, deleteItem } from './showList';
const listaFav = document.getElementById('listaFav');

lista(listaFav, 'watched');

listaFav.addEventListener('click', event => {
  //BOTON WATCHED
  if (event.target.id === 'deleteWatched') {
    console.log("event= ", event);
    deleteItem(event, 'watched');
  }
  //BOTON QUEUE
  if (event.target.id === 'deleteQueue') {
    console.log("event= ", event);
    deleteItem(event, 'queue');
  }
});