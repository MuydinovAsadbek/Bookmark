const elsTabItem = document.querySelectorAll('.feature__item');

elsTabItem.forEach (function (elTabItem) {
  elTabItem.addEventListener('click', function (evt) {
    evt.preventDefault();
    elsTabItem.forEach(function(item) {
      item.classList.remove('tabs-item-active');
    });
    elTabItem.classList.add('tabs-item-active')
  });
});


// ACARDION
const acardions = document.querySelectorAll(".acardion__item");

acardions.forEach((acardion__item) => {
  acardion__item.addEventListener("click", () => {
    acardion__item.classList.toggle("active");
  });
});