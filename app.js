// Declarations

let slideIndex = 0;
let slideIndexTwo = 0;
let navButton = document.querySelector('.nav-btn');
let navMenu = document.querySelector('#navMenu');
let navCloseButton = document.querySelector('.nav-close-btn');
let navList = document.querySelector('.navList');
let closeSearchButon = document.querySelector('.close-search-btn');
let searchBarDiv = document.querySelector('.search-bar');
let searchButton = document.querySelector('.search-btn');

// slide show logic
showSlides();
showSlidesTwo();

function showSlides(){
  var i;
  var slides = document.getElementsByClassName('slide');
   for(i = 0; i < slides.length; i++){
     slides[i].style.display = 'none';
   }
   slideIndex++;
   if(slideIndex > slides.length){slideIndex = 1}
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 5000);
}

function showSlidesTwo(){
  var i;
  var slides = document.getElementsByClassName('middle-slide-img');
   for(i = 0; i < slides.length; i++){
     slides[i].style.display = 'none';
   }
   slideIndexTwo++;
   if(slideIndexTwo > slides.length){slideIndexTwo = 1}
  slides[slideIndexTwo - 1].style.display = 'block';
  setTimeout(showSlidesTwo, 5000);
}


// Navigation logic

function showNav(){
  navMenu.style.transform = 'translateX(0%)' ;

}

function closeNav(){
  navMenu.style.transform = 'translateX(-100%)';
}

navButton.addEventListener('click',showNav);

navCloseButton.addEventListener('click', closeNav);


// Items array

let itemsCollectionMen = [{ gender: 'male', brand: 'nike',
 size: '7 uk', name: 'Airmax 270', price: '£80',
 image: 'Images/MaleTrainers/maleTrainer1.jpg'
}, 
{ gender: 'male', brand: 'nike',
size: '8 uk', name: 'Air force 1 low', price: '£60', 
image: 'Images/MaleTrainers/maleTrainer2.jpg'
}, 
{ gender: 'male', brand: 'nike',
size: '9 uk', name: 'Air force 1 mid', price: '£70', 
image: 'Images/MaleTrainers/maleTrainer3.jpg'
}, 
{ gender: 'male', brand: 'nike',
size: '10 uk', name: 'Air force 1 low suede', price: '£75', 
image: 'Images/MaleTrainers/maleTrainer4.jpg'
}, 
{ gender: 'male', brand: 'adidas',
size: '8 uk', name: 'Air force 1', price: '£60', 
image: 'Images/MaleTrainers/maleTrainer5.jpg'
}, 
{ gender: 'male', brand: 'nike',
size: '8.5 uk', name: 'Air force 1 suede', price: '£70', 
image: 'Images/MaleTrainers/maleTrainer6.jpg'
}, 
{ gender: 'male', brand: 'nike',
size: '11 uk', name: 'Air force 1', price: '£70', 
image: 'Images/MaleTrainers/maleTrainer7.jpg'
}, 
{ gender: 'male', brand: 'nike',
size: '9 uk', name: 'Airmax 95', price: '£90', 
image: 'Images/MaleTrainers/maleTrainer8.jpg'
}, 
{ gender: 'male', brand: 'nike',
size: '8 uk', name: 'Tiempo', price: '£70', 
image: 'Images/MaleTrainers/maleTrainer9.jpg'
}, 
{ gender: 'male', brand: 'nike',
size: '11 uk', name: 'Jordan retro 8', price: '£70', 
image: 'Images/MaleTrainers/maleTrainer10.jpg'
}, 
{ gender: 'male', brand: 'nike',
size: '9 uk', name: 'Air force 1 suede', price: '£70', 
image: 'Images/MaleTrainers/maleTrainer11.jpg'
}, 
{ gender: 'male', brand: 'nike',
size: '10 uk', name: 'Air force 1', price: '£70', 
image: 'Images/MaleTrainers/maleTrainer12.jpg'
}, 
{ gender: 'male', brand: 'adidas',
size: '8 uk', name: 'campus', price: '£70', 
image: 'Images/MaleTrainers/maleTrainer13.jpg'
}, 
{ gender: 'male', brand: 'adidas',
size: '9.5 uk', name: 'classics', price: '£70', 
image: 'Images/MaleTrainers/maleTrainer14.jpg'
}, 
{ gender: 'male', brand: 'nike',
size: '8 uk', name: 'Airmax 97', price: '£90', 
image: 'Images/MaleTrainers/maleTrainer15.jpg'
}, 
{ gender: 'male', brand: 'nike',
size: '7 uk', name: 'Jordan flight 32', price: '£90', 
image: 'Images/MaleTrainers/maleTrainer16.jpg'
}, { gender: 'male', brand: 'nike',
size: '9 uk', name: 'Tiempo', price: '£50', 
image: 'Images/MaleTrainers/maleTrainer17.jpg'
}, { gender: 'male', brand: 'nike',
size: '8 uk', name: 'Jordan retro 1', price: '£90', 
image: 'Images/MaleTrainers/maleTrainer18.jpg'
}, { gender: 'male', brand: 'nike',
size: '7 uk', name: 'Air force 1', price: '£70', 
image: 'Images/MaleTrainers/maleTrainer19.jpg'
}, { gender: 'male', brand: 'nike',
size: '7.5 uk', name: 'Road runners', price: '£70', 
image: 'Images/MaleTrainers/maleTrainer20.jpg'
}, { gender: 'male', brand: 'nike',
size: '9.5 uk', name: 'Jordan retro 4', price: '£90', 
image: 'Images/MaleTrainers/maleTrainer21.jpg'
}];

let itemsCollectionWomen = [{ gender: 'female', brand: 'nike',
size: '5 uk', name: 'Wedges', price: '£70', 
image: 'Images/FemaleTrainers/femaleTrainer1.jpg'
}, 
{ gender: 'female', brand: 'puma',
size: '4 uk', name: 'classics suede', price: '£30', 
image: 'Images/FemaleTrainers/femaleTrainer2.jpg'
}, 
{ gender: 'female', brand: 'nike',
size: '4.5 uk', name: 'cortez', price: '£60', 
image: 'Images/FemaleTrainers/femaleTrainer3.jpg'
}, 
{ gender: 'female', brand: 'nike',
size: '3 uk', name: 'Wedges suede', price: '£70', 
image: 'Images/FemaleTrainers/femaleTrainer4.jpg'
}, 
{ gender: 'female', brand: 'other',
size: '5 uk', name: 'platform', price: '£80', 
image: 'Images/FemaleTrainers/femaleTrainer5.jpg'
}, 
{ gender: 'female', brand: 'nike',
size: '6 uk', name: 'Airmax thea', price: '£90', 
image: 'Images/FemaleTrainers/femaleTrainer6.jpg'
}, 
{ gender: 'female', brand: 'reebok',
size: '4 uk', name: 'Hitop', price: '£50', 
image: 'Images/FemaleTrainers/femaleTrainer7.jpg'
}, 
{ gender: 'female', brand: 'adidas',
size: '5 uk', name: 'Zx flux', price: '£70', 
image: 'Images/FemaleTrainers/femaleTrainer8.jpg'
}, 
{ gender: 'female', brand: 'nike',
size: '6.5 uk', name: 'Hitop', price: '£80', 
image: 'Images/FemaleTrainers/femaleTrainer9.jpg'
}, 
{ gender: 'female', brand: 'adidas',
size: '3.5 uk', name: 'Continentals', price: '£50', 
image: 'Images/FemaleTrainers/femaleTrainer10.jpg'
}, 
{ gender: 'female', brand: 'nike',
size: '5 uk', name: 'Wedges', price: '£70', 
image: 'Images/FemaleTrainers/femaleTrainer11.jpg'
},
{ gender: 'female', brand: 'nike',
size: '5.5 uk', name: 'Cortez', price: '£60', 
image: 'Images/FemaleTrainers/femaleTrainer12.jpg'
}, 
{ gender: 'female', brand: 'adidas',
size: '4.5 uk', name: 'La trainers', price: '£50', 
image: 'Images/FemaleTrainers/femaleTrainer13.jpg'
}, 
{ gender: 'female', brand: 'adidas',
size: '4 uk', name: 'Zx flux', price: '£60', 
image: 'Images/FemaleTrainers/femaleTrainer14.jpg'
}, 
{ gender: 'female', brand: 'nike',
size: '6 uk', name: 'Huarache', price: '£80', 
image: 'Images/FemaleTrainers/femaleTrainer15.jpg'
}];




// Search bar logic

searchButton.addEventListener('click', function(){
  searchBarDiv.style.transform = 'translateY(0%)';
})

closeSearchButon.addEventListener('click', function(){
  searchBarDiv.style.transform = 'translateY(-100%)';

})

 
