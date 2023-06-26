// importaciones y declaraciones
import axios from 'axios';
import 'remixicon/fonts/remixicon.css';
export const apiKey = '6617c9b64f7274de96d2c2a2c77c593e';
let i = 1;
export const imageBaseURL = 'https://image.tmdb.org/t/p/w500';
const listApi = document.getElementById('list_api');
const listPages = document.getElementById('listPages');

// funcion q genera los items con sus respectivos valores sacados de la api de TMDB
let addImages = page => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&include_adult=true&include_video=false&language=es-ES&page=${page}&sort_by=popularity.desc&`
    )
    .then(res => {
      res.data.results.forEach(element => {
        vec = res.data.results;
        listApi.insertAdjacentHTML(
          'beforeend',
          `<li id="idItemApi">
        <h3 id="idTitleApi">${element.original_title}</h3>
        <img src="${imageBaseURL}${element.poster_path}" alt="${
            element.title
          }" />
        <p>${element.release_date.split('-')[0]}</p>
        <button class="mylistBTN">Add</button>
      </li>`
        );
      });
      let allPages = res.data.total_pages;
      function elem(perPage, page) {
        let li = '';
        let beforePages = page;
        let afterPages = page + 1;
        let listActive;
        if (page > 1) {
          li += `<li class="btn" id="previousPage"><i class="ri-arrow-left-s-line"></i></li>`;
        }
        for (let i = beforePages; i < afterPages; i += 1) {
          if (i > allPages) {
            continue;
          }

          if (page === i) {
            listActive = 'active';
          } else {
            listActive = '';
          }
          li += `<li class="numb ${listActive}">${i}</li>`;
        }
        if (page < perPage) {
          li += `<li class="btn" id="anotherPage"><i class="ri-arrow-right-s-line"></i></li>`;
        }
        listPages.innerHTML = li;

        // Agregar eventos onclick a los elementos de paginación
        const previousBtn = document.getElementById('previousPage');
        const anotherBtn = document.getElementById('anotherPage');

        if (previousBtn) {
          previousBtn.addEventListener('click', () => {
            i--; // Restar 1 a i
            elem(allPages, i);
            addImages(i); // Volver a llamar a elem con la nueva página
            listApi.innerHTML = '';
          });
        }

        if (anotherBtn) {
          anotherBtn.addEventListener('click', () => {
            i++; // Sumar 1 a i
            elem(allPages, i);
            addImages(i);
            listApi.innerHTML = '';
          });
        }
      }
      // ejecuto la función para mostrar la paginación inicial
      elem(allPages, i);
    })
    .catch(err => console.error('error: ' + err));
};
// ejecuto la funcion
addImages(i);

//------------------------------------------------------------------------
// --------------- SECTION FOR MY LIST
let count = 0;

if (localStorage.length !== 0) {
  count = localStorage.getItem('conteo');
}

listApi.addEventListener('click', event => {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  //console.log(event.target);
  event.target.classList.toggle("addedBTN");

  if(event.target.classList.contains("addedBTN")) {
    event.target.textContent = "Added";
  }
  else{
    event.target.textContent = "Add";
  }

  let name =
    event.target.parentElement.childNodes[0].nextElementSibling.innerHTML;

  for (let i = 0; i < vec.length; i++) {
    if (vec[i].original_title === name) {
      //if(localStorage.length <= 0) {
      for (let j = 1; j <= localStorage.getItem('conteo'); j++) {
        if (JSON.parse(localStorage.getItem(`${j}`)).original_title === name) {
          return;
        }
      }
      //}
      count++;
      localStorage.setItem(`${count}`, JSON.stringify(vec[i]));
      localStorage.setItem('conteo', `${count}`);
      //localStorage.clear();
      //count = 0;
    }
  }

  console.log('Hice click!', name);
});
