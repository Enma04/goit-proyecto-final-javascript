import axios from 'axios';
import { imageBaseURL, apiKey } from './testAPI';
const input = document.getElementById('idInputSearch');
const listSearch = document.getElementById('idSearchList');
input.addEventListener('blur', () => {
  listSearch.innerHTML = '';
  input.value = '';
});
input.addEventListener('input', e => {
  listSearch.innerHTML = '';
  axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${e.target.value}&include_adult=true`
    )
    .then(res => {
      genres = [];
      res.data.results.forEach(element => {
        console.log(element);
        listSearch.insertAdjacentHTML(
          'beforeend',
          `<li class="search__item">
          <img class="search__img" src="${imageBaseURL}${
            element.poster_path
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
    })
    .catch(err => err);
});
