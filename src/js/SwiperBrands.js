var init = false
function swiperCard() {
  if (window.innerWidth <= 767) {
    if (!init) {
      init = true
      swiper = new Swiper('.swiper', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        centerSlides: true,
        watchOverflow: true,
        slideToClickedSlide: true,
        sliderPerGroup: 'auto',
        loopFillGroupBlank: false,
        mousewheel: {
          sensitivity: 1
        },
        pagination: {
          el: '.swiper-pagination'
        }
      })
    }
  } else if (init) {
    swiper.destroy()
    init = false
  }
}
swiperCard()
window.addEventListener('resize', swiperCard)
