import { imageBaseURL } from './testAPI';
const listaFav = document.getElementById('listaFav');
console.log("Lista fav: ", listaFav);
for (let i = 1; i <= JSON.parse(localStorage.getItem('watched')); i++) {
  
  if (localStorage.getItem(`watched${i}`) !== null) {
    let element = JSON.parse(localStorage.getItem(`watched${i}`));
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

listaFav.addEventListener('click', event => {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  console.log("Hice click!");
  let name = event.target.parentElement.childNodes[0].nextElementSibling.innerHTML;

  console.log("name = ", name);

  for (let j = 1; j <= JSON.parse(localStorage.getItem(`watched`)); j++) {
    if (localStorage.getItem(`watched${j}`) !== null) {
      if (JSON.parse(localStorage.getItem(`watched${j}`)).original_title === name) {
        localStorage.removeItem(`watched${j}`);
        window.location.reload();
        return;
      }
    }
  }
});