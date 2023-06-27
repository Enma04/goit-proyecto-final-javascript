import axios from 'axios';
import { imageBaseURL, apiKey } from './testAPI';
import { modal } from './modal';
const inputSearch = document.getElementById('idInputSearch');
const listSearch = document.getElementById('idSearchList');
const btnSearch = document.querySelector('#idSearchButton');
const listApi = document.getElementById('list_api');
const listPages = document.getElementById('listPages');
let cont = 1;
inputSearch.addEventListener('input', e => {
  listSearch.innerHTML = '';
  if (!e.target.value) {
    return;
  }
  axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${e.target.value}&include_adult=false&include_video=false&sort_by=popularity.desc`
    )
    .then(res => {
      try {
        if (!res.data.results.length) {
          return alert('no se encontro la pelicula buscada');
        }
        res.data.results.forEach(element => {
          listSearch.insertAdjacentHTML(
            'beforeend',
            `<li class="search__item">
          <img class="search__img" src="${
            element.poster_path
              ? `${imageBaseURL}${element.poster_path}`
              : 'https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg'
          }" alt="${element.title}" />
          <div class="search__wrapper-info">
                    <h3 class="search__title">${element.original_title}</h3>
                    <p class="search__year">${
                      element.release_date.split('-')[0]
                    }</p>
                </div>
            </li>`
          );
        });
        modal('.search__item');
      } catch (error) {
        return error;
      }
    })
    .catch(err => err);
});

const searchBtn = page => {
  if (!inputSearch.value) {
    return alert('por favor escriba algo');
  }
  listApi.innerHTML = '';
  listPages.innerHTML = '';
  axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${inputSearch.value}&include_adult=false&include_video=false&page=${page}&sort_by=popularity.desc`
    )
    .then(res => {
      res.data.results.forEach(element => {
        listApi.insertAdjacentHTML(
          'beforeend',
          `<li id="idItemSearch">
        <h3 id="idTitleSearch">${element.original_title}</h3>
        <img src="${
          element.poster_path
            ? `${imageBaseURL}${element.poster_path}`
            : 'https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg'
        }" alt="${element.title}" />
        <p>${element.release_date.split('-')[0]}</p>
        <button class="mylistBTN">Add to My List</button>
      </li>`
        );
      });
      let allPages = res.data.total_pages;
      function elem(perPage, page) {
        let li = '';
        let beforePages = 1;
        let afterPages = 2;
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
            searchBtn(cont); // Volver a llamar a elem con la nueva página
            listApi.innerHTML = '';
          });
        }

        if (anotherBtn) {
          anotherBtn.addEventListener('click', () => {
            cont++; // Sumar 1 a cont
            elem(allPages, cont);
            searchBtn(cont);
            listApi.innerHTML = '';
          });
        }
      }
      // ejecuto la función para mostrar la paginación inicial
      elem(allPages, cont);
    })
    .catch(err => console.log(err));
};
btnSearch.addEventListener('click', () => {
  searchBtn(cont);
  listSearch.innerHTML = '';
  inputSearch.blur();
});
