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

document.addEventListener('DOMContentLoaded', function () {
  const tipsInner = document.querySelector('#tips-inner');
  const toggleButton = document.querySelector('.p-tips__toggle');
  const toggleText = document.querySelector('.p-tips__toggle-text');
  if (!tipsInner || !toggleButton || !toggleText) return;

  const updateState = () => {
    const isclosed = tipsInner.classList.contains('_close');
    toggleButton.setAttribute('aria-expanded', String(!isclosed));
    toggleButton.dataset.state = isclosed ? 'closed' : 'open';
    toggleText.textContent = isclosed ? '開く' : '閉じる';
  };

  toggleButton.addEventListener('click', function () {
    tipsInner.classList.toggle('_close');
    updateState();
  });
  updateState();
});
