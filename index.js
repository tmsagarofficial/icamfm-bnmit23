// Change header color on scroll
window.addEventListener("load", function () {
  window.addEventListener("scroll", function () {
    var header = document.querySelector(".header");
    if (window.pageYOffset > 0) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  });
});

// Cards
var next = document.querySelector("#next");
var prev = document.querySelector("#prev");

function handleScrollNext() {
  var cards = document.querySelector(".card-content");
  cards.scrollLeft +=
    window.innerWidth > 600 ? window.innerWidth / 2 : window.innerWidth - 100;
}

function handleScrollPrev() {
  var cards = document.querySelector(".card-content");
  cards.scrollLeft -=
    window.innerWidth > 600 ? window.innerWidth / 2 : window.innerWidth - 100;
}

next.addEventListener("click", handleScrollNext);
prev.addEventListener("click", handleScrollPrev);

// Loadbar
// Loadbar
window.addEventListener("load", function () {
  var preloader = document.getElementById("preloader");
  preloader.style.opacity = 1;

  setTimeout(function () {
    preloader.style.opacity = 0;
    setTimeout(function () {
      preloader.style.display = "none";
    }, 500); // Adjust the delay as needed
  }, 2000); // Adjust the delay as needed
});
