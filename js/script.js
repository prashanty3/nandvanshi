window.addEventListener('scroll', function () {
    const navbar = document.getElementById('mainNavbar');
    if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const navMenu = document.getElementById('navMenu');

openBtn.addEventListener('click', () => {
    navMenu.classList.add('mobile-nav-active');
    openBtn.style.display = 'none';
    closeBtn.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    navMenu.classList.remove('mobile-nav-active');
    closeBtn.style.display = 'none';
    openBtn.style.display = 'block';
});

// Optional: Reset if window resized
window.addEventListener('resize', () => {
    if (window.innerWidth >= 991) {
        openBtn.style.display = 'none';
        closeBtn.style.display = 'none';
    } else {
        openBtn.style.display = 'block';
    }
});
const slider = document.getElementById("testimonialSlider");
const cards = slider.querySelectorAll(".testimonial-card");
const dots = document.getElementById("testimonialDots").querySelectorAll(".dot");

let index = 0;
const cardCount = cards.length;

function showTestimonial(i) {
    slider.scrollTo({
        left: i * slider.offsetWidth,
        behavior: "smooth",
    });

    dots.forEach(dot => dot.classList.remove("active"));
    dots[i].classList.add("active");
}

// Auto scroll
setInterval(() => {
    index = (index + 1) % cardCount;
    showTestimonial(index);
}, 4000);

// Dot click
dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        index = i;
        showTestimonial(i);
    });
});