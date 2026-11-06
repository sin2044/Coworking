//Находим кнопку на странице
const scrollButton = document.querySelector("#scrollToTopButton");

//Слушаем скролл
window.addEventListener("scroll", function () {
  //Если пользователь проскролил страницу больше чем высота  окна
  if (window.pageYOffset > window.innerHeight) {
    scrollButton.classList.add("top-link--visible");
  } else {
    scrollButton.classList.remove("top-link--visible");
  }
});
