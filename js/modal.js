const openModalBtns = document.querySelectorAll('[data-action="modal"]');
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector("#closeModal");
const modalBody = document.querySelector(".modal__body");

function openModal() {
  modal.classList.add("modal--open");
  document.body.classList.add("no-scroll");
}

function closeModal() {
  modal.classList.remove("modal--open");
  document.body.classList.remove("no-scroll");
}
//Окрытие модального окна по кнопкам
openModalBtns.forEach(function (item) {
  item.addEventListener("click", openModal);
});
//Закрытие модального окна по крестику
closeModalBtn.addEventListener("click", closeModal);
//Закрытие модального окна по клику на оверлей
modal.addEventListener("click", closeModal);
//Остановка передачи кликов родителям
modalBody.addEventListener("click", function (event) {
  event.stopPropagation();
});
//Закрытие по клавише Escape
document.addEventListener("keydown", function (event) {
  if (event.key == "Escape") {
    closeModal();
  }
});
