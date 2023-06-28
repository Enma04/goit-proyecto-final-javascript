import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
const basicLightbox = require('basiclightbox');
export function modal(list) {
  if (document.querySelectorAll(`${list}`).length > 0) {
    document.querySelectorAll(`${list}`).forEach(element => {
      element.querySelector('img').addEventListener('click', () => {
        var instance = basicLightbox.create(`
              <div class="modalcard">
                <img class="modalcard__img" src="${
                  element.querySelector('img').src
                }" alt="${element.querySelector('#idTitleApi').textContent}" />
                <i class="ri-close-fill ri-2x modalcard__close"></i>
                <div class="modalcard__wrapper">
                <h1 class="modalcard__title">${
                  element.querySelector('#idTitleApi').textContent
                }</h1>
                <div class="modalcard__box">
                <ul class="modalcard__list-description">
                <li class="modalcard__item-description"><p class="modalcard__description">Vote / Votes </p></li>
                <li class="modalcard__item-description"><p class="modalcard__description">Popularity </p></li>
                <li class="modalcard__item-description"><p class="modalcard__description">Original Title </p></li>
                <li class="modalcard__item-description"><p class="modalcard__description">Genres </p></li>
                </ul>
                <ul class="modalcard__info-list">
                <li><p class="modalcard__info"><span class="modalcard__span">${
                  element.querySelector('.vote-api').textContent
                }</span> / ${
          element.querySelector('.vote-count-api').textContent
        }</p></li>
                <li><p class="modalcard__info">${
                  element.querySelector('.popularity-api').textContent
                }</p></li>
                <li><p class="modalcard__info">${
                  element.querySelector('#idTitleApi').textContent
                }</p></li>
                <li><p class="modalcard__info">${
                  element.querySelector('.generes-api').textContent
                }</p></li>
                </ul>
                </div>
                <h3 class="modalcard__about">About</h3>
                <p class="modalcard__overview">${
                  element.querySelector('.overview-api').textContent
                }</p>
                <button class="modalcard__btn">Add to My List</button>
                </div>
              </div>`);
        instance.show();
        document
          .querySelector('.modalcard__close')
          .addEventListener('click', () => {
            instance.close();
          });
      });
    });
  }
}
// falta mobile bien hecho scss
