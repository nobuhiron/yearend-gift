// 1) すべてを関数に閉じ込める
function initUI() {
  // ----- Scroll to top -----
  const scrollTopBtn = document.querySelector('.c-scroll-top');
  if (scrollTopBtn) {
    const scrollThreshold = 600;

    const handleScroll = () => {
      if (window.scrollY > scrollThreshold) {
        scrollTopBtn.classList.add('is-active');
      } else {
        scrollTopBtn.classList.remove('is-active');
      }
    };

    // 初期状態 & 監視
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    scrollTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ----- Tips toggle -----
  const tipsInner = document.querySelector('#tips-inner');
  const toggleButton = document.querySelector('.p-tips__toggle');
  const toggleText = document.querySelector('.p-tips__toggle-text');

  if (tipsInner && toggleButton && toggleText) {
    const updateState = () => {
      const isClosed = tipsInner.classList.contains('_close');
      toggleButton.setAttribute('aria-expanded', String(!isClosed));
      toggleButton.dataset.state = isClosed ? 'closed' : 'open';
      toggleText.textContent = isClosed ? '開く' : '閉じる';
    };

    toggleButton.addEventListener('click', () => {
      tipsInner.classList.toggle('_close');
      updateState();
    });

    // 初期同期
    updateState();
  }
}

// 2) 実行タイミングを二重にケア
//    - SSR の通常ページ読み込み
document.addEventListener('DOMContentLoaded', initUI);

//    - Astro のクライアント遷移/水和後（使っていれば必須）
document.addEventListener('astro:page-load', initUI);
