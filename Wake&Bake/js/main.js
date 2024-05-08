(function () {
  const burgerIcon = document.querySelector('.burger-icon');
  const body = document.body;
  const navItems = document.querySelectorAll('.nav__item');

  burgerIcon.addEventListener('click', () => {
    body.classList.toggle('body--opened-menu');
  });

  navItems.forEach((navItem) => {
    if (document.documentElement.clientWidth <= 900) {
      navItem.addEventListener('click', () => {
        body.classList.toggle('body--opened-menu');
      });
    }
  });
})();

// ===========================================================================

(function () {
  const modal = document.querySelector('.modal')
  const openModal = document.querySelector('.about__img-button')
  const closeModal = document.querySelector('.modal__cancel')

  const modalForm = document.querySelector('.modal__form')


  openModal.addEventListener('click', (event) => {
    event.preventDefault()
    modal.classList.add('modal--open')
  })

  document.addEventListener('click', (event) => {
  if (event.target && event.target.classList.contains('modal') || event.target.classList.contains('modal__cancel')) {
    modal.classList.remove('modal--open')
    }
  })
})()