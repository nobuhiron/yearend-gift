const scrollTopBtn = document.querySelector('.c-scroll-top');

function handleScroll() {
  const scrollThreshold = 600; // Show after scrolling 400px
  if (window.scrollY > scrollThreshold) {
    scrollTopBtn?.classList.add('is-active');
  } else {
    scrollTopBtn?.classList.remove('is-active');
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
