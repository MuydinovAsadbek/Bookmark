const acardions = document.querySelectorAll(".acardion__item");

acardions.forEach((acardion__item) => {
  acardion__item.addEventListener("click", () => {
    acardion__item.classList.toggle("active");
  });
});