let userInput = document.querySelector(".user-input");

userInput.addEventListener("keyup", (event) => {
  let userSearch = event.target.value.toLowerCase();
  let brandCollection = document.querySelectorAll("[data-brand]");
  let nameCollection = document.querySelectorAll("[data-name]");

  for (let i = 0; i < brandCollection.length; i++) {
    let newBrandsCollection = brandCollection[i].getAttribute("data-brand");
    let newNameCollection = nameCollection[i].getAttribute("data-name");
    if (
      newBrandsCollection.includes(userSearch) ||
      newNameCollection.includes(userSearch)
    ) {
      brandCollection[i].style.display = "flex";
      nameCollection[i].style.display = "flex";
    } else {
      brandCollection[i].style.display = "none";
      nameCollection[i].style.display = "none";
    }
  }
});
