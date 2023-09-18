// menu
let toggleBtn = document.querySelector("header .container .menu");
let ul = document.querySelector("header ul");
let links = document.querySelectorAll("header ul li a");

toggleBtn.addEventListener("click", function() {
    toggleBtn.classList.toggle("active");
    ul.classList.toggle("active");
});

links.forEach(function(link) {
    link.addEventListener("click", function() {
        toggleBtn.classList.toggle("active");
        ul.classList.toggle("active");
    });
});