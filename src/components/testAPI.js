// importaciones y declaraciones
import axios from 'axios';
const apiKey = '6617c9b64f7274de96d2c2a2c77c593e';
let page = 1;
let vec;
const imageBaseURL = 'https://image.tmdb.org/t/p/w500';
const listApi = document.getElementById('list_api');
const anotherBtn = document.getElementById('anotherPage');
const previousBtn = document.getElementById('previousPage');

// funcion q genera los items con sus respectivos valores sacados de la api de TMDB
let addImages = page => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&include_adult=false&include_video=false&language=es-ES&page=${page}&sort_by=popularity.desc`
    )
    .then(res => {
      vec = res.data.results;
      //console.log(res.data.results);
      res.data.results.forEach(element => {
        listApi.insertAdjacentHTML(
          'beforeend',
          `<li>
        <h3>${element.original_title}</h3>
        <img src="${imageBaseURL}${element.backdrop_path}" alt="${element.title}" />
        <p>${element.overview}</p>
        <button class="mylistBTN">Add to My List</button>
      </li>`
        );
      });
    })
    .catch(err => console.error('error: ' + err));
};
// ejecuto la funcion
addImages(page);

// sumo a la paginacion +1 y ejecuto la funcion
anotherBtn.addEventListener('click', () => {
  listApi.textContent = '';
  page++;
  btnPage();
  addImages(page);
});

// resto a la paginacion -1 y ejecuto la funcion
previousBtn.addEventListener('click', () => {
  listApi.textContent = '';
  page--;
  btnPage();
  addImages(page);
});
const btnPage = () => {
  if (page === 1) {
    previousBtn.style.display = 'none';
  } else {
    previousBtn.style.display = 'unset';
  }
};
btnPage();


//------------------------------------------------------------------------
// --------------- SECTION FOR MY LIST
let count = 0;

if( localStorage.length !== 0 ) {
  count = localStorage.getItem("conteo");
}

listApi.addEventListener("click", event => {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }

  let name = event.target.parentElement.childNodes[0].nextElementSibling.innerHTML;

  for(let i=0; i<vec.length; i++) {
    if( vec[i].original_title === name ) {
      //if(localStorage.length <= 0) {
        for(let j=1; j<=localStorage.getItem("conteo"); j++) {
          if( JSON.parse(localStorage.getItem(`${j}`)).original_title === name ) {
            return
          }
        }
      //}
      count++;
      localStorage.setItem(`${count}`, JSON.stringify(vec[i]));
      localStorage.setItem("conteo", `${count}`);
      //localStorage.clear();
      //count = 0;
    }
  }

  console.log("Hice click!", name);
});


