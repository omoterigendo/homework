

(function () {
  const burgerIcon = document.querySelector('.burger-icon')
  const body = document.body
  const navItems = document.querySelectorAll('.nav__item')

  burgerIcon.addEventListener('click', () => {
    body.classList.toggle('body--opened-menu')
  })

  navItems.forEach((navItem) => {
    navItem.addEventListener('click', () => {
      body.classList.toggle('body--opened-menu')
    })
  })

})()