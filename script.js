// ============================================
//  TAREK BENKHEDIM — PORTFOLIO SCRIPT (FINAL)
//  Smooth menu, scroll reveal, fade effects
// ============================================

// ----- Mobile Menu Toggle -----
const menuBtn = document.getElementById('menuBtn');
const navlinks = document.querySelector('.navlinks');

if (menuBtn && navlinks) {
  menuBtn.addEventListener('click', () => {
    const isShown = navlinks.classList.toggle('show');
    menuBtn.classList.toggle('open', isShown);
    menuBtn.textContent = isShown ? '✖' : '☰';
    menuBtn.setAttribute('aria-label', isShown ? 'Close menu' : 'Open menu');
  });
}

// Close menu when a link is clicked (on mobile)
document.querySelectorAll('.navlinks a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 640) {
      navlinks.classList.remove('show');
      menuBtn.classList.remove('open');
      menuBtn.textContent = '☰';
    }
  });
});

// ----- Scroll to Top -----
const toTop = document.getElementById('toTop');
if (toTop) {
  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ----- Scroll Reveal Animation (Multi-direction) -----
const revealElements = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const revealTop = el.getBoundingClientRect().top;
    if (revealTop < windowHeight - 100) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  });
};
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ----- Fade-in Effect for Project Images -----
const projectImages = document.querySelectorAll('.project-img');
const fadeInImages = () => {
  const windowHeight = window.innerHeight;
  projectImages.forEach(img => {
    const top = img.getBoundingClientRect().top;
    if (top < windowHeight - 100) {
      img.classList.add('visible');
    }
  });
};
window.addEventListener('scroll', fadeInImages);
window.addEventListener('load', fadeInImages);

// ----- Intersection Observer Alternative (optional performance boost) -----
// This can be used instead of scroll events for better performance:
/*
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

revealElements.forEach(el => observer.observe(el));
projectImages.forEach(img => observer.observe(img));
*/
