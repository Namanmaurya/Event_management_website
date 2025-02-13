// ScrollUP

let scrollUp = document.getElementById("scrollUp");
window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollUp.style.display = "block";
  } else {
    scrollUp.style.display = "none";
  }
};



function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");

  // Hamburger Menu Toggle
  hamburger.addEventListener("click", function (event) {
    event.stopPropagation();
    menu.classList.toggle("show");
  });

  document.addEventListener("click", function (event) {
    if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
      menu.classList.remove("show");
    }
  });

  // Navbar Blur Effect on Scroll
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Highlight Active Page in Navbar
  const navLinks = document.querySelectorAll(".menu a");
  navLinks.forEach((link) => {
    if (link.href === window.location.href) {
      link.classList.add("active-link");
    }
  });
});
