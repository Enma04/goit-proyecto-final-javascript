export function list(event, vec, type) {

    let count = 0;
    let name = event.target.parentElement.childNodes[0].nextElementSibling.alt;

    if (localStorage.length !== 0 &&
        JSON.parse(localStorage.getItem(`${type}`)) !== null
        ) {
        count = localStorage.getItem(`${type}`);
    }

    //console.log("evento: ", event.target);
    event.target.classList.toggle('addedBTN');

    //Estoy añadiendo el elemento a mylist
    if (event.target.classList.contains('addedBTN')) {

        event.target.textContent = `Added to ${type}`;

        for (let i = 0; i < vec.length; i++) {

            if (vec[i].original_title === name) {

                for (let j = 1; j <= JSON.parse(localStorage.getItem(`${type}`)); j++) {

                    if (localStorage.getItem(`${type}${j}`) !== null) {

                        if (JSON.parse(localStorage.getItem(`${type}${j}`)).original_title === name) {
                            return;
                        }
                    }
                }

                count++;
                localStorage.setItem(`${type}${count}`, JSON.stringify(vec[i]));
                localStorage.setItem(`${type}`, `${count}`);
                //localStorage.clear();
                //count = 0;
            }
        }

        console.log('Hice click!', name);
    }
    //Estoy eliminando el elemento a mylist
    else {
        event.target.textContent = `Add to ${type}`;
        for (let j = 1; j <= JSON.parse(localStorage.getItem(`${type}`)); j++) {

            if (localStorage.getItem(`${type}${j}`) !== null) {

                if (JSON.parse(localStorage.getItem(`${type}${j}`)).original_title === name) {
                    localStorage.removeItem(`${type}${j}`);
                }
            }
        }
    }

    console.log('evento: ', event);

}//FIN FUNCTION