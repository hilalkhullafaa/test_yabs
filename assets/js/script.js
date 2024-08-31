// HERO SLIDER
let slideIndex = 1;
showSlider(slideIndex);
function plusSlider(n) {
  showSlider((slideIndex += n));
}

function showSlider(n) {
  let i;
  let slider = document.querySelectorAll(".slide");
  if (n > slider.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slider.length;
  }
  for (i = 0; i < slider.length; i++) {
    slider[i].style.display = "none";
  }
  slider[slideIndex - 1].style.display = "block";
}

// TOGGLE NAVBAR
const navbar = document.querySelector(".navbar");
const openNav = document.querySelector(".open-btn");
const closeNav = document.querySelector(".close-btn");
openNav.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
closeNav.addEventListener("click", () => {
  navbar.classList.remove("active");
});
