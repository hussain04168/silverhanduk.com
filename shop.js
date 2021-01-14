let filterButton = document.querySelector(".filter-btn");
let brandButton = document.querySelector(".brand-btn");
let genderButton = document.querySelector(".gender-btn");
let styleButton = document.querySelector(".style-btn");
let filterSelection = document.querySelector(".filter-list");
let brandFilter = document.querySelector(".brands-list");
let genderFilter = document.querySelector(".gender-list");
let styleFilter = document.querySelector(".style-list");
let applyFilterButton = document.querySelector(".apply-filter-btn");
let genderItems = document.getElementsByClassName("gender-item");
let brandItems = document.getElementsByClassName("brand-item");
let styleItems = document.getElementsByClassName("style-item");

filterButton.addEventListener("click", () => {
  filterSelection.style.transform = "translateY(0)";
  applyFilterButton.style.transform = "translateY(0)";
});

brandButton.addEventListener("click", () => {
  for (let i = 0; i < brandItems.length; i++) {
    brandItems[i].style.transform = "translateY(0)";
  }
});

genderButton.addEventListener("click", () => {
  for (let i = 0; i < genderItems.length; i++) {
    genderItems[i].style.transform = "translateY(0)";
  }
});

styleButton.addEventListener("click", () => {
  for (let i = 0; i < styleItems.length; i++) {
    styleItems[i].style.transform = "translateY(0)";
  }
});
