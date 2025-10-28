document.addEventListener('DOMContentLoaded', function () {
  const splide = new Splide('.splide', {
    type: 'slide',
    perPage: 3,
    perMove: 1,
    gap: '20px',
    padding: { left: 170, right: 60 },
    breakpoints: {
      930: {
        perPage: 1,
        padding: '20px',
      },
      1240: {
        perPage: 2,
        gap: '1rem',
        padding: '20px',
      },
    },

    arrows: true,
    pagination: true,
  });

  splide.mount();
});

document.addEventListener('DOMContentLoaded', function () {
  const splide2 = new Splide('.splide2', {
    type: 'slide',
    perPage: 1,
    perMove: 1,
    gap: '40px',
    padding: { left: 170, right: 60 },
    arrows: true,
    pagination: true,

    breakpoints: {
      1080: {
        perPage: 1,
        gap: '1rem',
        padding: '20px',
      },
    },
  });

  splide2.mount();
});
