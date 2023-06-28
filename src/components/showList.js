import { imageBaseURL } from './testAPI';

export function lista(listaFav, type) {

    for (let i = 1; i <= JSON.parse(localStorage.getItem(`${type}`)); i++) {
        if (localStorage.getItem(`${type}${i}`) !== null) {
            let element = JSON.parse(localStorage.getItem(`${type}${i}`));
            console.log('element = ', element);
            
            listaFav.insertAdjacentHTML(
            'beforeend',
            `<li class="card">
                <h3>${element.original_title}</h3>
                <img src="${imageBaseURL}${element.poster_path}" alt="${element.title}" />
                <p>${element.overview}</p>
                <button id="deleteWatched" class="mylistBTN addedBTN">Added</button>
            </li>`
            );
        }
    }

}//FIN DE LA FUNCION

export function deleteItem(event, type) {
    let name = event.target.parentElement.childNodes[0].nextElementSibling.innerHTML;

    for (let j = 1; j <= JSON.parse(localStorage.getItem(`${type}`)); j++) {
        if (localStorage.getItem(`${type}${j}`) !== null) {
            if (JSON.parse(localStorage.getItem(`${type}${j}`)).original_title === name) {
                localStorage.removeItem(`${type}${j}`);
                window.location.reload();
                return;
            }
        }
    }
}