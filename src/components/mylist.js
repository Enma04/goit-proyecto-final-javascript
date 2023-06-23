const listaFavUl = document.querySelector(".listaFav");
let myFavList;

myFavList.forEach(element => {
  listaFavUl.insertAdjacentHTML(
    'beforeend',
    `<li>
  <h3>${element.original_title}</h3>
  <img src="${imageBaseURL}${element.backdrop_path}" alt="${element.title}" />
  <p>${element.overview}</p>
  <button class="mylistBTN">Add to My List</button>
</li>`
  );
});

