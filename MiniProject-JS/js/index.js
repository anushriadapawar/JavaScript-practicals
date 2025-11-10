// === Simple Interactive JS for E-Learning Platform ===

// Testimonial Carousel
const testimonials = document.querySelectorAll(".testimonial");
let currentIndex = 0;
if (testimonials.length > 0) {
  function showNextTestimonial() {
    testimonials[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % testimonials.length;
    testimonials[currentIndex].classList.add("active");
  }
  setInterval(showNextTestimonial, 4000);
}

// Navbar mobile toggle
const navLinks = document.querySelector(".nav-links");
const logo = document.querySelector(".logo");
if (logo && navLinks) {
  logo.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

console.log("E-Learnify initialized 🚀");
