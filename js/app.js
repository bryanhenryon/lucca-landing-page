const secondaryNavContainer = document.querySelector(
  ".secondary-nav-container"
);
const mainNavContainer = document.querySelector(".main-nav-container");

window.addEventListener("scroll", () => {
  if (window.scrollY !== 0) {
    secondaryNavContainer.classList.remove("visible");
    mainNavContainer.classList.add("moving");
  } else {
    secondaryNavContainer.classList.add("visible");
    mainNavContainer.classList.remove("moving");
  }
});
