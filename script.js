// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Fade-in on scroll animation
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));

// Parallax effect for hero section
const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
});

// Service cards hover effect
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-10px)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
  });
});

// Form validation and submission
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Add loading state to button
  const button = form.querySelector('button');
  const originalText = button.textContent;
  button.textContent = 'Sending...';
  button.disabled = true;
  
  // Simulate form submission (replace with actual form submission)
  setTimeout(() => {
    button.textContent = 'Message Sent!';
    button.style.background = 'linear-gradient(135deg, #00C853 0%, #69F0AE 100%)';
    
    // Reset form after 2 seconds
    setTimeout(() => {
      form.reset();
      button.textContent = originalText;
      button.disabled = false;
      button.style.background = '';
    }, 2000);
  }, 1500);
});

// Add cursor effect
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// Add hover effect to interactive elements
const interactiveElements = document.querySelectorAll('a, button, .card, .portfolio-item');
interactiveElements.forEach(element => {
  element.addEventListener('mouseenter', () => {
    cursor.classList.add('cursor-hover');
  });
  element.addEventListener('mouseleave', () => {
    cursor.classList.remove('cursor-hover');
  });
});