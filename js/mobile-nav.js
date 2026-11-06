const mobileNavBtnOpen = document.querySelector("#openMobileNav");
const mobileNavBtnClose = document.querySelector("#closeMobileNav");
const mobileNav = document.querySelector(".mobile-nav");

mobileNavBtnOpen.addEventListener("click", function () {
  mobileNav.classList.add("mobile-nav--open");
  //Чтобы моб. меню не скролило
  document.body.classList.add("no-scroll");
});
//Чтобы при нажатии на крестик меню закрывалось
mobileNavBtnClose.addEventListener("click", function () {
  mobileNav.classList.remove("mobile-nav--open");
  document.body.classList.remove("no-scroll");
});

//закрыть мобильную навигацию после клика по ссылке в моб. меню
const mobileNavLinks = mobileNav.querySelectorAll("a, button");
mobileNavLinks.forEach(function (item) {
  item.addEventListener("click", function () {
    mobileNav.classList.remove("mobile-nav--open");
    document.body.classList.remove("no-scroll");
  });
});
