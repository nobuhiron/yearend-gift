// Scroll to top button functionality
const scrollTopBtn = document.querySelector('.c-scroll-top');

function handleScroll() {
  const scrollThreshold = 600; // Show after scrolling 400px
  if (window.scrollY > scrollThreshold) {
    scrollTopBtn?.classList.add('is-visible');
  } else {
    scrollTopBtn?.classList.remove('is-visible');
  }
}

window.addEventListener('scroll', handleScroll);

// Handle click to smooth scroll to top
scrollTopBtn?.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
