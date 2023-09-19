// SliderFunctions.js
function InitializeSlider(nxtBtn, prvBtn, slides) {
    const numberOfSlides = slides.length;
    let slideNumber = 0;
    let autoSlideInterval;
  
    function nextSlide() {
      slides.forEach((slide) => {
        slide.classList.remove('active');
      });
  
      slideNumber++;
  
      if (slideNumber >= numberOfSlides) {
        slideNumber = 0;
      }
  
      slides[slideNumber].classList.add('active');
    }
  
    function prevSlide() {
      slides.forEach((slide) => {
        slide.classList.remove('active');
      });
  
      slideNumber--;
  
      if (slideNumber < 0) {
        slideNumber = numberOfSlides - 1;
      }
  
      slides[slideNumber].classList.add('active');
    }
  
    function startAutoSlide() {
      autoSlideInterval = setInterval(nextSlide, 4000);
    }
  
    function stopAutoSlide() {
      clearInterval(autoSlideInterval);
    }
  
    nxtBtn.addEventListener('click', () => {
      nextSlide();
      stopAutoSlide();
    });
  
    prvBtn.addEventListener('click', () => {
      prevSlide();
      stopAutoSlide();
    });
  
    slides.forEach((slide) => {
      slide.addEventListener('mouseenter', stopAutoSlide);
      slide.addEventListener('mouseleave', startAutoSlide);
    });
  
    startAutoSlide();
  
    return {
      nextSlide,
      prevSlide,
      startAutoSlide,
      stopAutoSlide
    };
  }
  
  export default InitializeSlider;
  