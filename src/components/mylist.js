import { imageBaseURL } from './testAPI';
const listaFav = document.querySelector('.listaFav');

for (let i = 1; i <= JSON.parse(localStorage.getItem('conteo')); i++) {

  if (localStorage.getItem(`${i}`) !== null) {
    let element = JSON.parse(localStorage.getItem(`${i}`));
    console.log('element = ', element);
    
    listaFav.insertAdjacentHTML(
    'beforeend',
      `<li class="card">
        <h3>${element.original_title}</h3>
        <img src="${imageBaseURL}${element.poster_path}" alt="${element.title}" />
        <p>${element.overview}</p>
        <button class="mylistBTN addedBTN">Added</button>
      </li>`
    );
  }
}
