import { initIntro } from './intro.js';

// DOM Elements
const heroText = document.getElementById('hero-text');
const products = document.querySelectorAll('.product');

// 1. Intro Sequence & Hero Fade In
initIntro();




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
