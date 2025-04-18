const swiperBase = new Swiper('.slider-base', {
  // Optional parameters
  // direction: 'vertical',
  // loop: true,
  slidesPerView: 3,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const swiperExample1 = new Swiper('.slider__example-1', {
  // slidesPerView: 3,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const swiperExample2 = new Swiper('.slider__example-2', {
  slidesPerView: 3,
  spaceBetween: 10,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const swiperExample3 = new Swiper('.slider__example-3', {
  slidesPerView: 3,
  spaceBetween: 10,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next3',
    prevEl: '.swiper-button-prev3',
  },
});

const swiperBaseGroup = new Swiper('.slider-base--group', {
  // Optional parameters
  // direction: 'vertical',
  // loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  slidesPerGroup: 3,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperBaseOut = new Swiper('.slider-base--out', {
  // Optional parameters
  // direction: 'vertical',
  // loop: true,
  slidesPerView: 3,
  spaceBetween: 10,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next__out',
    prevEl: '.swiper-button-prev__out',
  },

  pagination: {
    el: '.swiper-pagination',
  },
});

const swiperBaseTypeProgressbar = new Swiper('.slider-base__type--progressbar', {
  // Optional parameters
  // direction: 'vertical',
  // loop: true,
  slidesPerView: 3,
  spaceBetween: 10,

  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
});

const swiperBaseTypeFraction = new Swiper('.slider-base__type--fraction', {
  // Optional parameters
  // direction: 'vertical',
  // loop: true,
  slidesPerView: 3,
  spaceBetween: 10,

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
});

const swiperBaseTypeCustom = new Swiper('.slider-base__type--custom', {
  // Optional parameters
  // direction: 'vertical',
  // loop: true,
  slidesPerView: 3,
  spaceBetween: 10,

  pagination: {
    el: '.swiper-pagination',
    type: 'custom',
  },
});

const swiperBaseBreakpoints = new Swiper('.swiper__base-breakpoints', {
  slidesPerView: 3,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperOutBreakpoints = new Swiper('.swiper__out-breakpoints', {
  slidesPerView: 3,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
