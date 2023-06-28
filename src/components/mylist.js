import { lista, deleteItem } from './showList';
const listaFav = document.getElementById('listaFav');

lista(listaFav, 'watched');

listaFav.addEventListener('click', event => {
  if (event.target.id === 'deleteWatched') {
    console.log("event= ", event);
    deleteItem(event, 'watched');
  }
});