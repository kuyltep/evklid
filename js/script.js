const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

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
    hide: true,
  },
});


document.querySelectorAll(".section-ask-text").forEach((item) => 
item.addEventListener(".click", () =>{
  const parent = item.parentNode;

  if (parent.classList.contains("section-ask-item-active")){
    parent.classList.remove('section-ask-item-active');
  } else{
    document
      .querySelectorAll(".section-ask-item")
      forEach((child) => child.classList.remove("section-ask-item-active"))
      parent.classList.toogle('section-ask-item-active')
  }

  parent.classList.toogle("section-ask-item-active");
} )
)