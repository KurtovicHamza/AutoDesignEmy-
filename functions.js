  /*Functions for galleries and  sliding images*/


  /*For opening an image when clicking spesific one*/
  function openPic() {
    document.getElementById("myModal").style.display = "block";
  }
  
  /*For closing an image, connected with X button from html*/
  function closePic() {
    document.getElementById("myModal").style.display = "none";
  }
  
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  /*For moving through images*/
  function nextSlide(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
 
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
   
    /*Two if's for resetting the slides to the beginning position or to the last one,
     without these, we cant access slides and their indexes after going through gallery once*/

    if (n > slides.length) {
      slideIndex = 1
    }

    if (n < 1) {
      slideIndex = slides.length
    }

    /*for actual display of images as modals*/

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
   
    slides[slideIndex-1].style.display = "block";
   
  }