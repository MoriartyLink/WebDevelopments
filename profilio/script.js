// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Form submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add form submission logic here
    alert('Thank you for your message! I will respond shortly.');
});

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

document.querySelectorAll('.skill-card, .project-card').forEach((el) => {
    observer.observe(el);
});

function showPopup() {
    document.getElementById('popup').style.display = 'flex';
  }
  
  function hidePopup() {
    document.getElementById('popup').style.display = 'none';
  }
  
  // Trigger this after submitting a recommendation
  document.querySelector('#recommendation-form').addEventListener('submit', (e) => {
    e.preventDefault();
    showPopup();
  });