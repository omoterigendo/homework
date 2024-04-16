

// const btnOpen = document.querySelector('.btn-open')
// const modal = document.querySelector('.modal')
// const modalCloseBtn = document.querySelector('.modal__close-button')

// btnOpen.addEventListener('click', () => {
// modal.style.display = 'flex';
// })

// modalCloseBtn.addEventListener('click', () => {
// modal.style.display = 'none'
// })

// modal.addEventListener('click', () => {
// modal.style.display = 'none'
// })
// ========================


const btnOpen = document.querySelector('.btn-open')
const modal = document.querySelector('.modal')
const modalCloseBtn = document.querySelector('.modal__close-button')
const body = document.body

const openModal = () => {
  modal.classList.add('modal--open')
  body.classList.add('body--fixed')
}
const closeModal = () => {
  modal.classList.remove('modal--open')
  body.classList.remove('body--fixed')
}


btnOpen.addEventListener('click', openModal)

modal.addEventListener('click', (event) => {
  if (event.target && event.target.classList.contains('modal') || event.target.classList.contains('modal__close-button')) {
    closeModal()
  }
})

document.addEventListener('keydown', (event) => {
if (event.code === 'Escape' && modal.classList.contains('modal--open')) {
  closeModal()
}
})