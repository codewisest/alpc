// Show Hamburger Menu
let hamburgerMenu = document.querySelector(".hamburger_menu");
let navigationModal = document.querySelector(".navigation_modal");
if (hamburgerMenu) {
  hamburgerMenu.addEventListener("click", () => {
    // // navigationModal.style.top = 0;
    // if (hamburgerMenu.classList.contains("change")) {
    //   modal.forEach((element) => {
    //     element.classList.remove("modal_show");
    //   });
    // } else {
    //   navigationModal.classList.add("modal_show");
    // }
    // toggleNav();

    hamburgerMenu.classList.toggle("change");
  });
}
