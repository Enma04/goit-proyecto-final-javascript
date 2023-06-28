export function list(event, vec, base=0) {

    let count = 0;
    let name = event.target.parentElement.childNodes[0].nextElementSibling.alt;

    if (localStorage.length !== 0) {
        count = localStorage.getItem('conteo');
    }

    //console.log("evento: ", event.target);
    event.target.classList.toggle('addedBTN');

    //Estoy añadiendo el elemento a mylist
    if (event.target.classList.contains('addedBTN')) {
    event.target.textContent = 'Added';

        for (let i = 0; i < vec.length; i++) {
            if (vec[i].original_title === name) {
            for (let j = 1; j <= JSON.parse(localStorage.getItem('conteo')); j++) {
                if (localStorage.getItem(`${j}`) !== null) {
                if (
                    JSON.parse(localStorage.getItem(`${j}`)).original_title === name
                ) {
                    return;
                }
                }
            }

            count++;
            localStorage.setItem(`${count}`, JSON.stringify(vec[i]));
            localStorage.setItem('conteo', `${count}`);
            //localStorage.clear();
            //count = 0;
            }
        }

    console.log('Hice click!', name);
    }
    //Estoy eliminando el elemento a mylist
    else {
        event.target.textContent = 'Add';
        for (let j = 1; j <= JSON.parse(localStorage.getItem('conteo')); j++) {
            if (localStorage.getItem(`${j}`) !== null) {
                if (JSON.parse(localStorage.getItem(`${j}`)).original_title === name) {
                    localStorage.removeItem(`${j}`);
                }
            }
        }
    }

    console.log('evento: ', event);

}//FIN FUNCTION