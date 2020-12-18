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
let userInput = document.getElementById('userInput');

// Navigation logic

function showNav(){
    navMenu.style.transform = 'translateX(0%)' ;
  
  }
  
  function closeNav(){
    navMenu.style.transform = 'translateX(-100%)';
  }
  
  navButton.addEventListener('click',showNav);
  
  navCloseButton.addEventListener('click', closeNav);

  // Search bar logic

searchButton.addEventListener('click', function(){
    searchBarDiv.style.transform = 'translateY(0%)';
  })
  
  closeSearchButon.addEventListener('click', function(){
    searchBarDiv.style.transform = 'translateY(-100%)';
  })