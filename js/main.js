let navBar = document.querySelector(".navigation_wrapper");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    navBar.classList.add("on_scroll");
  } else {
    navBar.classList.remove("on_scroll");
  }
};

//For Close Focus Navbar
let navLink = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse");
navLink.forEach(function (singleLink) {
  singleLink.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});
