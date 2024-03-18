import Swiper, {Pagination, Navigation} from 'swiper';

Swiper.use([Pagination, Navigation]);

const reviewsSlider = new Swiper('.services-modal__swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.services-modal__pagination',
    clickable: true,
  },
});

const bullets = document.querySelectorAll('.swiper-pagination-bullet');

bullets.forEach(bullet => {
  bullet.setAttribute('tabindex', 0);
  bullet.addEventListener("keyup", function (event) {

    if (event.keyCode === 9) {
      bullet.click();
    }

  })
});


