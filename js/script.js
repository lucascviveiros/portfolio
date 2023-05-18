const header = document.querySelector(".navbar-dark");
console.log(header);

let scrollTimeout; // Declare a variable to hold the timeout reference

window.onscroll = function() {
  clearTimeout(scrollTimeout); // Clear any existing timeout

  scrollTimeout = setTimeout(function() {
    if (window.scrollY >= 100) {
      header.classList.add("navbarDark");
    } else {
      header.classList.remove("navbarDark");
    }
  }, 3000); // Set the desired delay time in miliseconds
};

const navLinks = document.querySelectorAll(".nav-item");
const menuToggle = document.getElementById("navbarSupportedContent");

navLinks.forEach((e) => {
  e.addEventListener("click", () => {
    new bootstrap.Collapse(menuToggle).toggle();
  });
});
