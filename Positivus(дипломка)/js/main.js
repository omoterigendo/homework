
// Бургер

(function () {
  const burgerIcon = document.querySelector('.burger-icon')
  const body = document.body
  const nav = document.querySelector('.nav')

  nav.addEventListener('click', (event) => {
    if (event.target.closest('body') && event.target.closest('.burger-icon') || event.target.closest('.nav__item') || event.target.closest('.header__request')) {

      body.classList.toggle('body--opened-menu')
    }
  })

  burgerIcon.addEventListener('click', () => {
    body.classList.toggle('body--opened-menu')
  })
})();




// Модалка

(function () {
  const modal = document.querySelector('.modal')
  const modalWindow = document.querySelector('.modal-window')
  const modalOpen = document.querySelector('.hero__button')

  modalOpen.addEventListener('click', (event) => {
    event.preventDefault()
    modal.classList.add('modal--opened')
  })

  modal.addEventListener('click', (event) => {
    if (event.target && event.target.closest('.modal__close') || event.target.classList.contains('modal')) {
      modal.classList.remove('modal--opened')
    }

  })
})();


// Аккордеон (мое любимое)

(function () {
  const accordionList = document.querySelector('.accordion-list')

  accordionList.addEventListener('click', (event) => {
    const accordionButton = event.target.closest('.accordion-list__control')
    if (!accordionButton) return

    const accordionOpenedItem = document.querySelector('.accordion-list__item--opened')
    const accordionItem = accordionButton.parentElement
    const accordionContent = accordionButton.nextElementSibling
    const accordionOpenedContent = document.querySelector('.accordion-list__item--opened .accordion-list__content')

    if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
      accordionOpenedItem.classList.remove('accordion-list__item--opened')
      accordionOpenedContent.style.maxHeight = null
    }

    accordionItem.classList.toggle('accordion-list__item--opened')

    if (accordionItem.classList.contains('accordion-list__item--opened')) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
    }
    else {
      accordionOpenedContent.style.maxHeight = null
    }

  })
})()



  // Слайдер-отзывы

  (function () {

    const swiper = new Swiper('.testimonials__slider', {

      pagination: {
        el: '.swiper-pagination',
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    });
  })()

