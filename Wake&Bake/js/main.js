// Бургер
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

// Модалка
(function () {
  const modal = document.querySelector('.modal')
  const openModal = document.querySelector('.about__img-button')

  openModal.addEventListener('click', (event) => {
    event.preventDefault()
    modal.classList.add('modal--open')
  })
  document.addEventListener('click', (event) => {
    if (event.target && event.target.classList.contains('modal') || event.target.closest('.modal__cancel')) {
      modal.classList.remove('modal--open')
    }
  })
})();

// // Табы (я заебался очень сильно 0_о)

// (function () {
//   const tabControls = document.querySelector('.tab-controls')
//   tabControls.addEventListener('click', event => {
//     event.preventDefault()

//     const tabButton = event.target.closest('.tab-controls__link')
//     if (!tabButton) return

//     if (tabButton.classList.contains('tab-controls__link--active')) return

//     // ПОЯСНЕНИЯ К СТРОЧКАМ НИЖЕ - Значение href не ссылается на саму кнопку, а указывает на ID элемента, который содержит информацию для отображения, когда выбрана эта вкладка. 
//     // То есть, если кнопка вкладки имеет href="#section1", то tabContentId будет равен "#section1". Это означает, что мы не ищем саму кнопку снова, а ищем элемент на странице, который имеет id="section1".

//     // Проще говоря, наш tabContentId равен значению href кнопки, по которой мы нажали. Если мы нажали на кнопку с href="#section1", то значение tabContentId теперь будет #section1
//     const tabContentId = tabButton.getAttribute('href')

//     // теперь когда мы получили значение #section1, мы в документе ищем элемент с таким же айдишником
//     const tabContent = document.querySelector(tabContentId)

//     //ищем в документе нашу "аткивную кнопку", т.е класс, которая прописана нашей активной кнопке
//     const activeButton = document.querySelector('.tab-controls__link--active')

//     // тоже самое, только теперь активный tab-content
//     const activeContent = document.querySelector('.tab-content--show')

//     if (activeButton) {
//       activeButton.classList.remove('tab-controls__link--active')
//     }
//     if (activeContent) {
//       activeContent.classList.remove('tab-content--show')
//     }

//     tabButton.classList.add('tab-controls__link--active')
//     tabContent.classList.add('tab-content--show')

//   })
// })()


(function () {
  const tabControls = document.querySelector('.tab-controls')

  tabControls.addEventListener('click', event => {
    event.preventDefault()
    const tabButton = event.target.closest('.tab-controls__link')
    if (!tabButton) return
    if (tabButton.classList.contains('tab-controls__link--active')) return
  

  const tabControlId = tabButton.getAttribute('href')
  const tabControl = document.querySelector(tabControlId)
  const activeButton = document.querySelector('.tab-controls__link--active')
  const activeTab = document.querySelector('.tab-content--show')

  if (activeButton) {
    activeButton.classList.remove('tab-controls__link--active')
  }
  if (activeTab) {
    activeTab.classList.remove('tab-content--show')
  }

  tabButton.classList.add('tab-controls__link--active')
  tabControl.classList.add('tab-content--show')
})
})()