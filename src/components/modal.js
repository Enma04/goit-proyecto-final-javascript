import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
const basicLightbox = require('basiclightbox');
export function modal(list) {
  if (document.querySelectorAll(`${list}`).length > 0) {
    document.querySelectorAll(`${list}`).forEach(element => {
      element.addEventListener('click', () => {
        var instance = basicLightbox.create(`
              <div class="modal-content">
                <img src="${element.querySelector('img').src}" alt="${
          element.querySelector('h3').textContent
        }" />
                <h1>${element.querySelector('h3').textContent}</h1>
                <p>${element.querySelector('p').textContent}</p>
                <button class="mylistBTN">Add to My List</button>
              </div>`);
        instance.show();
      });
    });
  }
}
