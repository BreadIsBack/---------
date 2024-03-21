import Swiper, {Pagination, Navigation} from 'swiper';

Swiper.use([Pagination, Navigation]);

const bullets = document.querySelectorAll('.swiper-pagination-bullet');

bullets.forEach(bullet => {
  bullet.setAttribute('tabindex', 0);
  bullet.addEventListener("keyup", function (event) {

    if (event.keyCode === 9) {
      bullet.click();
    }

  })
});

const reviewsSlider = new Swiper('.services-modal__swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.services-modal__pagination',
    clickable: true,
  },
});

const productsSlider = new Swiper('.products-swiper', {
  slidesPerView: 1,
  navigation: {
    prevEl: '.products-swiper__prev',
    nextEl: '.products-swiper__next',
    clickable: true,
  },
});

const reviewPanelSlider = new Swiper('.review-panel__swiper', {
  slidesPerView: 1,
  navigation: {
    prevEl: '.review-panel__prev',
    nextEl: '.review-panel__next',
    clickable: true,
  },
});

const certificatelSlider = new Swiper('.certificate-panel__swiper', {
  slidesPerView: 1,
  navigation: {
    prevEl: '.certificate-panel__prev',
    nextEl: '.certificate-panel__next',
    clickable: true,
  },
});

const portfolioSlider = new Swiper('.portfolio__swiper', {
  slidesPerView: 1,
  navigation: {
    prevEl: '.portfolio__btn-prev',
    nextEl: '.portfolio__btn-next',
    clickable: true,
  },
});

const portfolioInnerSlider = new Swiper('.portfolio-modal__swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.portfolio-modal__pagination',
    clickable: true,
  },
});
