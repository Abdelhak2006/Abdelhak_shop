let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
  currentSlide = index;
}

nextBtn.addEventListener("click", () => {
  let next = (currentSlide + 1) % slides.length;
  showSlide(next);
});

prevBtn.addEventListener("click", () => {
  let prev = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(prev);
});


setInterval(() => {
  let next = (currentSlide + 1) % slides.length;
  showSlide(next);
}, 6000);
