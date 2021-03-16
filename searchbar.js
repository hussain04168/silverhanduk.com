let userInput = document.querySelector(".user-input");

userInput.addEventListener("keyup", (event) => {
  let userSearch = event.target.value.toLowerCase();
  let brandCollection = document.querySelectorAll("[data-brand]");
  let nameCollection = document.querySelectorAll("[data-name]");
  let sizeCollection = document.querySelectorAll("[data-size]");

  for (let i = 0; i < brandCollection.length; i++) {
    let newBrandsCollection = brandCollection[i].getAttribute("data-brand");
    let newNameCollection = nameCollection[i].getAttribute("data-name");
    let newSizeCollection = sizeCollection[i].getAttribute("data-size");
    let keyPressed = event.keyCode;
    if (
      newBrandsCollection.includes(userSearch) ||
      newNameCollection.includes(userSearch) ||
      newSizeCollection.includes(userSearch)
    ) {
      brandCollection[i].style.display = "flex";
      nameCollection[i].style.display = "flex";
      sizeCollection[i].style.display = "flex";
    } else {
      brandCollection[i].style.display = "none";
      nameCollection[i].style.display = "none";
      sizeCollection[i].style.display = "none";
    }

    if (
      (userInput === "" && keyPressed === 37) ||
      keyPressed === 38 ||
      keyPressed === 39 ||
      keyPressed === 40 ||
      keyPressed === 8 ||
      keyPressed === 16
    ) {
      brandCollection[i].style.display = "none";
      nameCollection[i].style.display = "none";
      sizeCollection[i].style.display = "none";
    }
  }
});
