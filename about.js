let myIndex = 0;
carousel();

function carousel() {
  let i;
  let slidesCarousel = document.getElementsByClassName("carouselHistory");
  for (i = 0; i < slidesCarousel.length; i++) {
    slidesCarousel[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > slidesCarousel.length) {myIndex = 1}    
  slidesCarousel[myIndex-1].style.display = "block";  
  setTimeout(carousel, 5000); // Change image every 2 seconds
}