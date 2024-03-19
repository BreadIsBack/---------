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

console.log(document.querySelector('.swiper-button-prev'));
