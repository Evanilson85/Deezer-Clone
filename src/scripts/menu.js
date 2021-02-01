export function menu(page, menu) {
  const opens = page.querySelectorAll(menu);
  const links = page.querySelectorAll(".aLinks");

  links.forEach((a) => {
    a.addEventListener("click", (e) => {
      page.querySelector("nav").classList.toggle("close");
      // console.log("menu");
      page.querySelector("#click").checked = false;
    });
  });

  opens.forEach((open) => {
    open.addEventListener("click", (e) => {
      page.querySelector("nav").classList.toggle("close");
    });
  });
}
