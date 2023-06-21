import axios from 'axios';
const apiKey = '6617c9b64f7274de96d2c2a2c77c593e';
let page = 1;
const imageBaseURL = 'https://image.tmdb.org/t/p/w500';
const listApi = document.getElementById('list_api');
const anotherBtn = document.getElementById('anotherPage');
const previousBtn = document.getElementById('previousPage');

let addImages = page => {
  axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_adult=false&include_video=false&language=es-ES&page=${page}&sort_by=popularity.desc`
    )
    .then(res => {
      console.log(res.data.results);
      res.data.results.forEach(element => {
        listApi.insertAdjacentHTML(
          'beforeend',
          `<li>
        <h3>${element.original_title}</h3>
        <img src="${imageBaseURL}${element.backdrop_path}" alt="${element.title}" />
        <p>${element.overview}</p>
      </li>`
        );
      });
    })
    .catch(err => console.error('error: ' + err));
};
addImages(page);
anotherBtn.addEventListener('click', () => {
  listApi.textContent = '';
  page++;
  addImages(page);
});
previousBtn.addEventListener('click', () => {
  listApi.textContent = '';
  page--;
  addImages(page);
});
