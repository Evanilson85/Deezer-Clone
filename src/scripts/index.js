import { deezer } from "./mainApi.js";
import { musicTemplate } from "./indexPlay.js";
import { menu } from "./menu.js";
import {
  play,
  volumeTotal,
  timeTotal,
  durationTotal,
  soma,
} from "./playerEl.js";
// let music = "../plays/Prismo - Weakness [NCS Release](MP3_160K).mp3";
document.querySelectorAll("#main").forEach((pages) => {
  // let music = "../plays/Kryptonite.mp3";
  let music = sessionStorage.getItem("music");
  const btnPlay = pages.querySelector("#play");
  const volume = pages.querySelector(".volume");
  const time = pages.querySelector(".time");
  const duration = pages.querySelector(".b");

  pages.addEventListener("load", (e) => {
    play(music, false, btnPlay);
  });
  if (time) {
    //  durationTotal(duration);
    time.addEventListener("change", (e) => {
      timeTotal(time.value);

      durationTotal(duration);
    });
  }

  if (volume) {
    volume.addEventListener("change", (e) => {
      let alt = volume.value;

      volumeTotal(alt);
    });
  }

  if (btnPlay) {
    btnPlay.addEventListener("click", (e) => {
      //console.log(check);
      let checks = pages.querySelector(".check").checked;
      play(music, checks, btnPlay);
    });
  }

  musicTemplate(pages);
  menu(pages, ".open");
});

document.querySelectorAll("#music").forEach((page) => {
  menu(page, ".open"); //!menu refatorado

  const btns = page.querySelectorAll(".btn-outline-secondary");

  let field = page.querySelectorAll(".search");

  field.forEach((el) => {
    //el.value = sessionStorage.name

    if (el.value) {
      el.value = sessionStorage.name;
    }

    btns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        deezer(sessionStorage.name);
        //  console.log(el.value);
      });
    });

    el.addEventListener("blur", (e) => {
      let values = el.value;

      sessionStorage.setItem("name", values);

      if (values) {
        sessionStorage.getItem("nome");

        deezer(sessionStorage.name);
      } else {
        return (values = "");
      }
    });
  });

  if (sessionStorage.name) {
    deezer(sessionStorage.name);
  }
});
