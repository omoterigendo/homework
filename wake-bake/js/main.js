
(function () {
  const burgerIcon = document.querySelector('.burger-icon');
  const body = document.body;
  const navItems = document.querySelectorAll('.nav__item');

  if (document.documentElement.clientWidth > 900) {
    console.log(document.documentElement.clientWidth);
  };

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
