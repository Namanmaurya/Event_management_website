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

// Active navbar

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const currentPage = window.location.pathname.split("/").pop();
  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});



// Get all navbar links
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

// Loop through each link
navLinks.forEach((link) => {
  // Check if the current page URL matches the link's href
  if (window.location.href.includes(link.href)) {
    link.classList.add("active");
  }
});

