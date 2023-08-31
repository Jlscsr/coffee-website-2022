import "./styles/main.scss";

import landingSectionBg from "./assets/LandingPage-img.jpg";
import aboutSectionImageSrc from "./assets/About-img.jpg";
import parallaxImage1Bg from "./assets/parallax-img1.jpg";
import parallaxImage2Bg from "./assets/parallax-img2.jpg";

const landingSectionElement = document.getElementById("landingPage");
const aboutSectionImageElement = document.getElementById("aboutSectionImg");
const firstParallaxImageElement = document.getElementById("parallaxImg1");
const secondParallaxImageElement = document.getElementById("parallaxImg2");

landingSectionElement.style.backgroundImage = `url(${landingSectionBg})`;
firstParallaxImageElement.style.backgroundImage = `url(${parallaxImage1Bg})`;
secondParallaxImageElement.style.backgroundImage = `url(${parallaxImage2Bg})`;

aboutSectionImageElement.src = aboutSectionImageSrc;
aboutSectionImageElement.loading = "lazy";

const menuButtonElement = document.getElementById("hamburger-menu");
const navBarElement = document.getElementById("navbar-slide");
const landingPageElement = document.getElementById("landing-page");

menuButtonElement.addEventListener("click", () => {
  navBarElement.classList.toggle("active");
  landingPageElement.classList.toggle("active");
});
