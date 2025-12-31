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

// Function for nav bar active
function handleNavbarActive() {
  const currentLocation = window.location.href;
  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach((item) => {
    const link = item.querySelector(".nav-link");
    if (link && link.getAttribute("href") !== "#") {
      if (currentLocation.includes(link.getAttribute("href"))) {
        item.classList.add("active");
      }
    }
  });

  // If link in dropdown active parent
  const dropdownItems = document.querySelectorAll(".dropdown-item");
  dropdownItems.forEach((dropItem) => {
    if (currentLocation.includes(dropItem.getAttribute("href"))) {
      const parentNavItem = dropItem.closest(".nav-item.dropdown");
      if (parentNavItem) {
        parentNavItem.classList.add("active");
      }
    }
  });
}

// After page load execute functions
window.onload = () => {
  // start slider
  if (indicators.length > 0) {
    indicators[0].classList.add("active-bar");
    setInterval(startSlider, slideTime);
  }

  // start nav-item active
  handleNavbarActive();
};
