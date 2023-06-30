import { imageBaseURL } from './testAPI';
import { genres } from './dataGenres';

export function lista(listaFav, type) {

    for (let i = 1; i <= JSON.parse(localStorage.getItem(`${type}`)); i++) {
        if (localStorage.getItem(`${type}${i}`) !== null) {
            let element = JSON.parse(localStorage.getItem(`${type}${i}`));
            let groupGenres = [];
            //console.log('element = ', element);

            element.genre_ids.forEach(genre => {
                genres.forEach(dataGenre => {
                    if (genre === dataGenre.id) {
                        groupGenres.push(dataGenre.name);
                    }
                });
            });
    
            let unionGenres = groupGenres.join(', ');

            listaFav.insertAdjacentHTML(
            'beforeend',
            `<li id="idItemApi" class="card">
            <img class="imgApi" src="${
                element.poster_path
                ? `${imageBaseURL}${element.poster_path}`
                : 'https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg'
            }" alt="${element.title}" />
                <h3>${element.original_title}</h3>
                <p class="generes-api generes">${unionGenres}</p>
                <p class="date-api">${element.release_date.split('-')[0]}</p>
                <button id="delete${type}" class="mylistBTN addedBTN">Added to ${type}</button>
            </li>`
            );
            groupGenres = [];
        }
    }

}//FIN DE LA FUNCION

export function deleteItem(event, type) {
    let name = event.target.parentElement.childNodes[0].nextElementSibling.alt;

    for (let j = 1; j <= JSON.parse(localStorage.getItem(`${type}`)); j++) {
        if (localStorage.getItem(`${type}${j}`) !== null) {
            if (JSON.parse(localStorage.getItem(`${type}${j}`)).original_title === name) {
                localStorage.removeItem(`${type}${j}`);
                window.location.reload();
                return;
            }
        }
    }
}//FIN DE LA FUNCION