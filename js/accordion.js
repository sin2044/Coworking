const topics = document.querySelectorAll(".topic");
topics.forEach(function (topic) {
  topic.addEventListener("click", function (event) {
    //Проверяем был ли клик внутри кнопки т.е. внутри .topic__btn
    if (event.target.closest(".topic__btn")) {
      const isOpened = topic.classList.toggle("topic--open");

      const content = topic.querySelector(".topic__content");
      const img = topic.querySelector(".topic__icon");
      if (isOpened) {
        img.src = "./img/icons/btn-minus.svg";
        content.style.maxHeight = content.scrollHeight + 'px'
      } else {
        img.src = "./img/icons/btn-plus.svg";
           content.style.maxHeight = "0px";
      }
    }
  });
});
