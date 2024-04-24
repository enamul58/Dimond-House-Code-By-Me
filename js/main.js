let navBar = document.querySelector(".navbar");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    navBar.classList.add("on_scroll");
  } else {
    navBar.classList.remove("on_scroll");
  }
};
