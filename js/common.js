// Mobile menu toggle
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  if (navLinks) navLinks.classList.toggle('show');
}

// Footer last modified date
const full = document.querySelector('#full');
if (full) {
  const today = new Date(document.lastModified);
  full.textContent = 'Last Modified: ' + today.toLocaleString();
}

// Lazy loading for images
function lazyLoadImages() {
  const lazyImages = document.querySelectorAll('img.lazy');

  const options = {
    root: null,
    threshold: 0.2
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        obs.unobserve(img);
      }
    });
  }, options);

  lazyImages.forEach(img => observer.observe(img));
}
