const elsTabItem = document.querySelectorAll('.feature__item');
const elsInfoBlock = document.querySelectorAll('.feature-info');
const elsMainContenInfo = document.querySelectorAll('.feature-info');


elsTabItem.forEach (function (elTabItem) {
  elTabItem.addEventListener('click', function (evt) {
    evt.preventDefault();

    elsTabItem.forEach(function(item) {
      item.classList.remove('tabs-item-active');
    });

    elTabItem.classList.add('tabs-item-active')
  });

  elsMainContenInfo.forEach(function (elContentBlock) {
    elTabItem.addEventListener('click', function () {
      elContentBlock.classList.remove('feature-info--active');
    });
  })
});

const elfeatureFirstBtn = document.querySelector('.feature-first-btn');
const elMainContentJs = document.querySelector('.main-content-js');


  elfeatureFirstBtn.addEventListener('click', function () {
    elMainContentJs.classList.add('feature-info--active');
  })


  // Active Feature section
  const elFeatureActive = document.querySelector('.js-tab-link--active');
  const elFeatureSearch = document.querySelector('.js-tab-link--search');
  const elFeatureShare = document.querySelector('.js-tab-link--share');
  const elActiveFeatureInfo = document.querySelector('.feature-info-none');

  if(elFeatureActive) {
    elFeatureActive.addEventListener('click', function () {
      elActiveFeatureInfo.classList.add('feature-info--active')
    })
  }


// ACARDION
const acardions = document.querySelectorAll(".acardion__item");

acardions.forEach((acardion__item) => {
  acardion__item.addEventListener("click", () => {
    acardion__item.classList.toggle("active");
  });
});