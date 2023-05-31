window.addEventListener("load", function () {
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > -1) {
      document.querySelector(".header").classList.add("active");
    } else {
      document.querySelector(".header").classList.remove("active");
    }
  });
});
