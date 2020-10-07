// slide show logic

let slideIndex = 0;
let slideIndexTwo = 0;


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
  var slides = document.getElementsByClassName('middle-slide');
   for(i = 0; i < slides.length; i++){
     slides[i].style.display = 'none';
   }
   slideIndexTwo++;
   if(slideIndexTwo > slides.length){slideIndexTwo = 1}
  slides[slideIndexTwo - 1].style.display = 'block';
  setTimeout(showSlidesTwo, 5000);
}
