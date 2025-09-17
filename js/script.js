let swiperCards = new Swiper('.card_content', {
    // // Optional parameters
    // direction: 'vertical',
    // loop: true,

    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    breakpoints:{
      0:{
        slidesPerView:1,
        spaceBetween:10,
      },
      640:{
        slidesPerView:2,
        spaceBetween:20,
      },
      1024:{
        slidesPerView:2,
        spaceBetween:30,
      },
      1440:{
        slidesPerView:3,
        spaceBetween:30,
      },
    },
  
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
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });