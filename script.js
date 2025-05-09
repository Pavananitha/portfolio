// Typing animation for intro
const introText = "Hello! 👋 I'm Kolle Pavan, passionate about AI and Web Development!";
const introElement = document.getElementById('intro-text');
let index = 0;

function typeText() {
  if (index < introText.length) {
    introElement.innerHTML += introText.charAt(index);
    index++;
    setTimeout(typeText, 50);
  }
}
document.addEventListener('DOMContentLoaded', typeText);

// Animate elements on scroll
const animatedElements = document.querySelectorAll('.animate');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = '0.3s';
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

animatedElements.forEach(el => observer.observe(el));

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});

// Contact form validation
const contactForm = document.getElementById('contact-form');
const formResponse = document.getElementById('form-response');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && message) {
    formResponse.textContent = 'Thank you for your message!';
    formResponse.style.color = 'green';
    contactForm.reset();
  } else {
    formResponse.textContent = 'Please fill out all fields.';
    formResponse.style.color = 'red';
  }
});
