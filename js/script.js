const header = document.querySelector(".navbar-dark");
console.log(header);

window.onscroll = function() {
  window.scrollY >= 100
    ? header.classList.add("navbarDark")
    : header.classList.remove("navbarDark");
};

const navLinks = document.querySelectorAll(".nav-item");
const menuToggle = document.getElementById("navbarSupportedContent");

navLinks.forEach((e) => {
  e.addEventListener("click", () => {
    // Add a delay before scrolling to the target
    setTimeout(() => {
      new bootstrap.Collapse(menuToggle).toggle();
    }, 2000); // Adjust the delay time (in milliseconds) to control the scroll speed
  });
});
