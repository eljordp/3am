
// DOM Elements
const heroText = document.getElementById('hero-text');
const products = document.querySelectorAll('.product');

// Intro Elements
const introScreen = document.getElementById('intro-screen');
const introText = document.getElementById('intro-text-1');
const enterSiteBtn = document.getElementById('enter-site-btn');

// 1. Intro Sequence & Hero Fade In
// 1. Intro Sequence & Hero Fade In
window.addEventListener('load', () => {
  // Check if previously entered
  if (sessionStorage.getItem('3am_entered') === 'true') {
    // Skip Intro
    introScreen.style.display = 'none';
    document.body.style.overflow = '';
    heroText.classList.add('fade-in');
  } else {
    // Lock Scroll
    document.body.style.overflow = 'hidden';

    // 1. Fade in Intro Text
    setTimeout(() => {
      introText.classList.add('visible');
    }, 1000);

    // 2. Fade in Enter Button
    setTimeout(() => {
      enterSiteBtn.classList.add('visible');
    }, 2500);
  }
});

// Enter Site Logic
enterSiteBtn.addEventListener('click', () => {
  // Set flag
  sessionStorage.setItem('3am_entered', 'true');

  // Fade out intro
  introScreen.classList.add('hidden');

  // Unlock scroll
  document.body.style.overflow = '';

  // Trigger Hero Text
  setTimeout(() => {
    heroText.classList.add('fade-in');
  }, 500);
});

// 2. Intersection Observer for Scroll Reveals
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
    }
  });
}, observerOptions);

products.forEach(p => observer.observe(p));
