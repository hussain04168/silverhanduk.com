let filterButton = document.querySelector(".filter-btn");
let brandButton = document.querySelector(".brand-btn");
let genderButton = document.querySelector(".gender-btn");
let styleButton = document.querySelector(".style-btn");
let filterSelection = document.querySelector(".filter-list");
let brandFilter = document.querySelector(".brands-list");
let genderFilter = document.querySelector(".gender-list");
let styleFilter = document.querySelector(".style-list");

filterButton.addEventListener("click", () => {
  filterSelection.classList.toggle("hide");
});

brandButton.addEventListener("click", () => {
  brandFilter.classList.toggle("hide");
});

genderButton.addEventListener("click", () => {
  genderFilter.classList.toggle("hide");
});

styleButton.addEventListener("click", () => {
  styleFilter.classList.toggle("hide");
});
