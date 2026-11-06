// Tiny-Slider
const slider = tns({
  container: ".slider",
  items: 2.7,
  // slideBy: "page",
  gutter: 10,
  autoplay: false,
  mouseDrag: true,
  // loop: false,   //Ломает работу с lazyload
  speed: 400,
  autoWidth: true,
  lazyload: true,
  swipeAngle: false,

  controlsContainer: ".locations__controls",
  nav: false,
});

//Кнопки управления слайдером для моб. версии сайта
const prevMobile = document.querySelector(".locations__controls--mobile .prev");
const nextMobile = document.querySelector(".locations__controls--mobile .next");

//Обращаемся к кнопкам и вешаем на них упраление слайдером в моб. версии

prevMobile.onclick = function () {
  slider.goTo("prev");
};

nextMobile.onclick = function () {
  slider.goTo("next");
};
