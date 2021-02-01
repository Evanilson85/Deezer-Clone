export function deezer(name) {
  const container = document.querySelector(".main");
  const artImg = document.querySelector(".artista img");
  const artH2 = document.querySelector(".artista h2");
  const hidden = document.querySelector(".hidden");
  let err = document.querySelector(".alert-danger");
  const options = {
    method: "GET",
    url: "https://deezerdevs-deezer.p.rapidapi.com/search",
    params: { q: `${name}` },
    headers: {
      "x-rapidapi-key": "d82d343939msh87e6455e3915a75p1d2494jsn42de4b38f714",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then((response) => {
      //console.log(response);
      let datas = response.data.data;
      let arts = datas[0].artist;

      artImg.src = arts.picture_medium;
      artH2.innerHTML = arts.name;

      container.innerHTML = "";
      hidden.style.display = "none";
      sessionStorage.setItem("preview", datas[0].preview);
   
      //console.log(sessionStorage);
      Object.keys(datas).forEach((key) => {
        let fo = datas[key];

        let div = document.createElement("div");
        div.className = "cards";
        //console.log(div);
        div.innerHTML = `
        <div class="container">
        <div class="loader"></div>
        
        <img  
          src="${fo.album.cover_medium}"
          alt=""
        />
         <button class="btn btn-primary inf" >
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
            </svg>
          </button>
        </div>
        <h2>${fo.album.title}</h2>
        
          <audio style="display: none" src="${fo.preview}"></audio>
          <img class="desk" style="display: none" src="${fo.album.cover_big}"></img>
           <h2 class="link"  style="display: none">${fo.link}</h2>
        `;

        container.append(div);
      });

      current();
    })
    .catch((error) => {
      artH2.innerHTML = "Oops!";
      artImg.src = "./imgs/Oops! 404 Error with a broken robot-pana.svg";
      hidden.style.display = "block";
      hidden.querySelector(
        "h2"
      ).innerHTML = `Nenhum resultado para ${sessionStorage.name} `;
      container.innerHTML = "";
      //  document.querySelector(".artista").innerHTML = "";
      //   err.style.opacity = "0.9";
      err.style.display = "block";
      err.innerHTML = "Artista não encontrado";

      setTimeout((e) => {
        err.style.display = "none";
      }, 5000);

      return error;
      //error.message = error;
      //console.error(error);
    });
}
let current = () => {
  const btns = document.querySelectorAll("button.inf");

  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let card = e.toElement.parentNode;
      let newCard = card.closest(".cards");
      let link = newCard.querySelector(".link").innerHTML;

      let title = newCard.querySelector("h2").innerHTML;
      let newImg = newCard.querySelector("img").src;
      let newImgDesk = newCard.querySelector(".desk").src;
      let music = newCard.querySelector("audio").src;
      // console.log(card);
      // console.log(title);

      sessionStorage.setItem("link", link);
      sessionStorage.setItem("img", newImg);
      sessionStorage.setItem("imgDesk", newImgDesk);
      sessionStorage.setItem("title", title);
      sessionStorage.setItem("music", music);

      window.location = "music.html";
      console.log(sessionStorage);
    });
  });
};

// export function filterData(page, button) {
//   let btn = page.getElement(button);

//   btn.addEventListener("click", (e) => {
//     console.log("oi");
//   });
// }
