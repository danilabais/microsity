const swiper = new Swiper('.swiper', {
    effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        allowTouchMove: false,
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,        
          },
    pagination: {
      el: '.swiper-pagination',
    },
    loop: 'true',
  
  });


  const SwiperSecond = new Swiper('.swiper-second', {
        
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    spaceBetween: 100,
  });