const slidesTag = document.querySelectorAll(".slides");
const indicators = document.querySelectorAll(".indicator-item");
let currentIndex = 0;
const slideTime = 4000;

// Function for slider
function startSlider() {
  if (slidesTag.length === 0 || indicators.length === 0) return;

  slidesTag[currentIndex].classList.remove("active");
  indicators[currentIndex].classList.remove("active-bar");

  currentIndex = (currentIndex + 1) % slidesTag.length;

  slidesTag[currentIndex].classList.add("active");
  indicators[currentIndex].classList.add("active-bar");
}

// After page load execute functions
window.onload = () => {
  // start slider
  if (indicators.length > 0) {
    indicators[0].classList.add("active-bar");
    setInterval(startSlider, slideTime);
  }
};
