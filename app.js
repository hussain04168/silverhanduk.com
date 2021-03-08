// Declarations

let slideIndex = 0;
let slideIndexTwo = 0;
let navButton = document.querySelector(".nav-btn");
let navMenu = document.querySelector("#navMenu");
let navCloseButton = document.querySelector(".nav-close-btn");
let navList = document.querySelector(".navList");
let closeSearchButon = document.querySelector(".close-search-btn");
let searchBarDiv = document.querySelector(".search-bar");
let searchButton = document.querySelector(".search-btn");

// slide show logic
showSlides();
showSlidesTwo();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000);
}

function showSlidesTwo() {
  var i;
  var slides = document.getElementsByClassName("middle-slide-img");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndexTwo++;
  if (slideIndexTwo > slides.length) {
    slideIndexTwo = 1;
  }
  slides[slideIndexTwo - 1].style.display = "block";
  setTimeout(showSlidesTwo, 5000);
}

// Navigation logic

function showNav() {
  navMenu.style.transform = "translateX(0%)";
}

function closeNav() {
  navMenu.style.transform = "translateX(-100%)";
}

navButton.addEventListener("click", showNav);

navCloseButton.addEventListener("click", closeNav);

// Search bar logic

searchButton.addEventListener("click", function () {
  searchBarDiv.style.transform = "translateY(0%)";
});

closeSearchButon.addEventListener("click", function () {
  searchBarDiv.style.transform = "translateY(-100%)";
});
