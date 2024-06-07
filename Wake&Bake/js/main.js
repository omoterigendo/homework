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

// Табы (я заебался очень сильно 0_о)

(function () {
  const tabControls = document.querySelector('.tab-controls')
  tabControls.addEventListener('click', event => {
    event.preventDefault()

    const tabButton = event.target.closest('.tab-controls__link')
    if (!tabButton) return

    if (tabButton.classList.contains('tab-controls__link--active')) return

    // ПОЯСНЕНИЯ К СТРОЧКАМ НИЖЕ - Значение href не ссылается на саму кнопку, а указывает на ID элемента, который содержит информацию для отображения, когда выбрана эта вкладка. 
    // То есть, если кнопка вкладки имеет href="#section1", то tabContentId будет равен "#section1". Это означает, что мы не ищем саму кнопку снова, а ищем элемент на странице, который имеет id="section1".

    // Проще говоря, наш tabContentId равен значению href кнопки, по которой мы нажали. Если мы нажали на кнопку с href="#section1", то значение tabContentId теперь будет #section1
    const tabContentId = tabButton.getAttribute('href')

    // теперь когда мы получили значение #section1, мы в документе ищем элемент с таким же айдишником
    const tabContent = document.querySelector(tabContentId)

    //ищем в документе нашу "аткивную кнопку", т.е класс, которая прописана нашей активной кнопке
    const activeButton = document.querySelector('.tab-controls__link--active')

    // тоже самое, только теперь активный tab-content
    const activeContent = document.querySelector('.tab-content--show')

    if (activeButton) {
      activeButton.classList.remove('tab-controls__link--active')
    }
    if (activeContent) {
      activeContent.classList.remove('tab-content--show')
    }

    tabButton.classList.add('tab-controls__link--active')
    tabContent.classList.add('tab-content--show')
  })
})();


// АККОРДЕОН

(function () {
  // Находим все элементы аккордеона
  const accordionLists = document.querySelectorAll('.accordion-list');

  // Находим класс открытой вкладки аккордеона, тоже самое делаем и с контентом, а далее присваиваем нужные стили нашему контенту

  const openedItem = document.querySelector('.accordion-list__item--opened');
  if (openedItem) {
    const openedContent = openedItem.querySelector('.accordion-list__content');
    openedContent.style.maxHeight = openedContent.scrollHeight + 'px';
  }
  const accordionList = document.querySelectorAll('.accordion-list__item')

  // Для каждого элемента аккордеона добавляем обработчик событий клика

  accordionLists.forEach(element => {

    element.addEventListener('click', event => {

      const accordionControl = event.target.closest('.accordion-list__control');
      if (!accordionControl) return;
      event.preventDefault()

      const accordionItem = accordionControl.parentElement;
      const accordionContent = accordionControl.nextElementSibling;

      // Закрываем все открытые вкладки аккордеона, кроме текущей
      accordionList.forEach(element => {
        if (element !== accordionItem) {
          element.classList.remove('accordion-list__item--opened')
          element.querySelector('.accordion-list__content').style.maxHeight = null
        }
      })
      // Переключаем класс на текущем элементе
      accordionItem.classList.toggle('accordion-list__item--opened');
      if (accordionItem.classList.contains('accordion-list__item--opened')) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      } else {
        accordionContent.style.maxHeight = null;
      }
    });
  });
})();

// СЛАЙДЕР ГАЛЛЕРЕЯ

(function () {
  new Swiper('.gallery__slider', {
    spaceBetween: 15,
    slidesPerView: 1.5,

    pagination: {
      el: '.gallery__pagination',
      type: 'fraction',
    },

    navigation: {
      nextEl: '.gallery__next',
      prevEl: '.gallery__prev',
    },

    breakpoints: {
      451: {
        spaceBetween: 32,
        slidesPerView: 2,
      },

      601: {
        spaceBetween: 32,
        slidesPerView: 3,
      },

      801: {
        spaceBetween: 32,
      },

      1101: {
        slidesPerView: 4,
      }
    }
  });
})();

// СЛАЙДЕР ОТЗЫВОВ

(function () {
  new Swiper('.feedback__slider', {
    spaceBetween: 0,
    slidesPerView: 1,
    centeredSlides: true,
    initialSlide: 1,
    slideToClickedSlide: true,

    navigation: {
      nextEl: '.feedback__next',
      prevEl: '.feedback__prev',
    },

    scrollbar: {
      el: '.feedback__scrollbar',
      draggable: true,
    },


    breakpoints: {
      451: {
        slidesPerView: 1,
      },

      601: {
        slidesPerView: 1.2,
      },

      901: {
        slidesPerView: 1.5,
      },

      1201: {
        slidesPerView: 2.1,
      },
    }

  });
})();

// МАСКА ДЛЯ ТЕЛЕФОНА

(function () {
  const telInputs = document.querySelectorAll('input[type="tel"]')

  const im = new Inputmask('+7(999)999-99-99');
  im.mask(telInputs);
})();







