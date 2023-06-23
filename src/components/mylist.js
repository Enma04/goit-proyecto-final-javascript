const imageBaseURL = 'https://image.tmdb.org/t/p/w500';
const listaFav = document.querySelector(".listaFav");

for(let i=1; i<=localStorage.length; i++) {
  //console.log("Local storage", localStorage.getItem(`${i}`));
  let element = JSON.parse(localStorage.getItem(`${i}`));
  console.log("element = ", element);
  listaFav.insertAdjacentHTML(
    'beforeend',
    `<li>
  <h3>${element.original_title}</h3>
  <img src="${imageBaseURL}${element.backdrop_path}" alt="${element.title}" />
  <p>${element.overview}</p>
  <button class="mylistBTN">Add to My List</button>
</li>`
  );
}

