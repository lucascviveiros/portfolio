const header = document.querySelector(".navbar-dark");
console.log(header), window.onscroll = function() {
    window.scrollY >= 100 ? header.classList.add("navbarDark") : header.classList.remove("navbarDark")
};
const navLinks = document.querySelectorAll(".nav-item"),
    menuToggle = document.getElementById("navbarSupportedContent");
navLinks.forEach((e => {
    e.addEventListener("click", (() => {
        new bootstrap.Collapse(menuToggle).toggle()
    }))
}));
