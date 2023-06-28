// importaciones y declaraciones
import axios from 'axios';
import 'remixicon/fonts/remixicon.css';
import { genres } from './dataGenres';
import { modal } from './modal';
import { list } from './addList';
export const apiKey = '6617c9b64f7274de96d2c2a2c77c593e';
let cont = 1;
let groupGenres = [];
export const imageBaseURL = 'https://image.tmdb.org/t/p/w500';
const listApi = document.querySelector('.list_api');
const listPages = document.getElementById('listPages');

// funcion q genera los items con sus respectivos valores sacados de la api de TMDB
let addImages = page => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&include_adult=false&include_video=false&page=${page}&sort_by=popularity.desc`
    )
    .then(res => {
      res.data.results.forEach((element, index) => {
        vec = res.data.results;

        console.log('Estoy en el elemento: ', index);

        element.genre_ids.forEach(genre => {
          genres.forEach(dataGenre => {
            if (genre === dataGenre.id) {
              groupGenres.push(dataGenre.name);
            }
          });
        });

        let unionGenres = groupGenres.join(', ');

        listApi.insertAdjacentHTML(
          'beforeend',
          `<li id="idItemApi" class="card">
        <img class="imgApi" src="${
          element.poster_path
            ? `${imageBaseURL}${element.poster_path}`
            : 'https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg'
        }" alt="${element.title}" />
        <h3 id="idTitleApi">${element.original_title}</h3>
        <p class="generes-api">${unionGenres}</p>
        <p class="date-api">${element.release_date.split('-')[0]}</p>
        <button id="watched" class="mylistBTN">Add to watched</button>
        <button id="queue" class="mylistBTN">Add to queue</button>
        <p class="vote-api filter">${element.vote_average}</p>
        <p class="vote-count-api filter"> ${element.vote_count}</p>
          <p class="popularity-api filter">${element.popularity}</p>
          <p class="overview-api filter">${element.overview}</p>
      </li>`
        );

        for (let i = 1; i <= JSON.parse(localStorage.getItem('watched')); i++) {
          if (localStorage.getItem(`watched${i}`) !== null) {
            if (
              JSON.parse(localStorage.getItem(`watched${i}`)).original_title ===
              element.original_title
            ) {
              let boton = document.querySelectorAll('#watched')[index];
              console.log("Boton: ", boton);
              boton.setAttribute('watched', `${i}`);
              boton.classList.add('addedBTN');
            }
          }
        }

        for (let i = 1; i <= JSON.parse(localStorage.getItem('queue')); i++) {
          if (localStorage.getItem(`queue${i}`) !== null) {
            if (
              JSON.parse(localStorage.getItem(`queue${i}`)).original_title ===
              element.original_title
            ) {
              let boton = document.querySelectorAll('#queue')[index];
              console.log("Boton: ", boton);
              boton.setAttribute('queue', `${i}`);
              boton.classList.add('addedBTN');
            }
          }
        }

        groupGenres = [];
      });

      modal('#idItemApi');
      let allPages = res.data.total_pages;
      function elem(perPage, page) {
        let li = '';
        let beforePages = page;
        let afterPages = page + 1;
        if (page > 1) {
          li += `<li class="btn" id="previousPage"><a href="#idHeader" class="btnLink"><i class="ri-arrow-left-s-line"></a></i></li>`;
        }
        for (let i = beforePages; i < afterPages; i += 1) {
          if (i > allPages) {
            continue;
          }
          li += `<li class="numb active">${cont}</li>`;
        }
        if (page < perPage) {
          li += `<li class="btn" id="anotherPage"><a href="#idHeader" class="btnLink"><i class="ri-arrow-right-s-line"></a></i></li>`;
        }
        listPages.innerHTML = li;

        // Agregar eventos onclick a los elementos de paginación
        const previousBtn = document.getElementById('previousPage');
        const anotherBtn = document.getElementById('anotherPage');

        if (previousBtn) {
          previousBtn.addEventListener('click', () => {
            cont--; // Restar 1 a cont
            elem(allPages, cont);
            addImages(cont); // Volver a llamar a elem con la nueva página
            listApi.innerHTML = '';
          });
        }

        if (anotherBtn) {
          anotherBtn.addEventListener('click', () => {
            cont++; // Sumar 1 a i
            elem(allPages, cont);
            addImages(cont);
            listApi.innerHTML = '';
          });
        }
      }
      // ejecuto la función para mostrar la paginación inicial
      elem(allPages, cont);
    })
    .catch(err => console.log(err));
};
// ejecuto la funcion
addImages(cont);

//------------------------------------------------------------------------
// --------------- SECTION FOR MY LIST

listApi.addEventListener('click', event => {
  //BOTON WATCHED
  if (event.target.id === 'watched') {
    console.log("Id: ", event.target.id);
    list(event, vec, 'watched');
  }
  //BOTON QUEUE
  if (event.target.id === 'queue') {
    console.log("Id: ", event.target.id);
    list(event, vec, 'queue');
  }
});
