var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in i){var a=i[e];delete i[e];var r={id:e,exports:{}};return t[e]=r,a.call(r.exports,r,r.exports),r.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},e.parcelRequired7c6=a);var r=a("2shzp"),s=a("jvSt7"),l=a("kU0MA"),n=a("iccHK");const o=document.getElementById("idInputSearch"),c=document.getElementById("idSearchList"),p=document.querySelector("#idSearchButton"),d=document.querySelector(".list_api"),u=document.getElementById("listPages");let f=1,v=[];o.addEventListener("input",e=>{c.innerHTML="",e.target.value&&(0,r.default).get(`https://api.themoviedb.org/3/search/movie?api_key=${s.apiKey}&query=${e.target.value}&include_adult=false&include_video=false&sort_by=popularity.desc`).then(e=>{if(!e.data.results.length)return alert("no se encontro la pelicula buscada");e.data.results.forEach(e=>{e.genre_ids.forEach(e=>{(0,n.genres).forEach(t=>{e===t.id&&v.push(t.name)})});let t=v.join(", ");c.insertAdjacentHTML("beforeend",`<li class="search__item" id="idSearchItem">
          <img class="search__img" src="${e.poster_path?`${s.imageBaseURL}${e.poster_path}`:"https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg"}" alt="${e.title}" />
          <div class="search__wrapper-info">
                    <h3 class="search__title" id="idTitleApi">${e.original_title}</h3>
                    <p class="search__year">${e.release_date.split("-")[0]}</p>
                </div>
                <p class="generes-api filter">${t}</p>
                <p class="vote-api filter">${e.vote_average}</p>
                <p class="vote-count-api filter"> ${e.vote_count}</p>
                <p class="popularity-api filter">${e.popularity}</p>
                <p class="overview-api filter">${e.overview}</p>
            </li>`),v=[]}),(0,l.modal)("#idSearchItem")}).catch(e=>e)});const h=e=>{if(!o.value)return alert("por favor escriba algo");d.innerHTML="",u.innerHTML="",(0,r.default).get(`https://api.themoviedb.org/3/search/movie?api_key=${s.apiKey}&query=${o.value}&include_adult=false&include_video=false&page=${e}&sort_by=popularity.desc`).then(e=>{e.data.results.forEach(e=>{e.genre_ids.forEach(e=>{(0,n.genres).forEach(t=>{e===t.id&&v.push(t.name)})});let t=v.join(", ");d.insertAdjacentHTML("beforeend",`<li id="idItemApi" class="card">
        <img class="imgApi" src="${e.poster_path?`${s.imageBaseURL}${e.poster_path}`:"https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg"}" alt="${e.title}" />
        <h3 id="idTitleApi">${e.original_title}</h3>
        <p class="generes-api">${t}</p>
        <p class="date-api">${e.release_date.split("-")[0]}</p>
        <button class="mylistBTN">Add</button>
        <p class="vote-api filter">${e.vote_average}</p>
        <p class="vote-count-api filter"> ${e.vote_count}</p>                <p class="popularity-api filter">${e.popularity}</p>
        <p class="overview-api filter">${e.overview}</p>
      </li>`),v=[]}),(0,l.modal)("#idItemApi");let t=e.data.total_pages;!function e(i,a){let r="";a>1&&(r+='<li class="btn" id="previousPage"><a href="#idHeader" class="btnLink"><i class="ri-arrow-left-s-line"></a></i></li>');for(let e=1;e<2;e+=1)e>t||(r+=`<li class="numb active">${f}</li>`);a<i&&(r+='<li class="btn" id="anotherPage"><a href="#idHeader" class="btnLink"><i class="ri-arrow-right-s-line"></a></i></li>'),u.innerHTML=r;let s=document.getElementById("previousPage"),l=document.getElementById("anotherPage");s&&s.addEventListener("click",()=>{e(t,--f),h(f),d.innerHTML=""}),l&&l.addEventListener("click",()=>{e(t,++f),h(f),d.innerHTML=""})}(t,f)}).catch(e=>console.log(e))};p.addEventListener("click",()=>{h(f),c.innerHTML="",o.blur()});
//# sourceMappingURL=index.a4ac23cc.js.map
