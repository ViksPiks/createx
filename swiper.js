const swiper = new Swiper(".jumbotron", {
  speed: 500,
  crossFade: true,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return `
        <label class="${className}">
          <span>0${index + 1}</span>
        </label>
      `;
    },
  },
});
