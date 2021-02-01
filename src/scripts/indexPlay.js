export function musicTemplate(page) {

  let template = page.querySelector(".img");
  let title = page.querySelector("h1");
  let button = page.querySelector(".btn-danger");

  button.addEventListener("click", (e) => {
    window.open(sessionStorage.link);
  });
  title.innerHTML = sessionStorage.title;

  if (screen.width < 1024) {
    template.src = sessionStorage.img;
  } else {
    template.src = sessionStorage.imgDesk;
  }
}
