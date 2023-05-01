// // Мобільне меню
// function burgerMenu() {
//   const burger = document.querySelector('.burger')
//   const menu = document.querySelector('.menu')
//   const body = document.querySelector('body')
//   burger.addEventListener('click', () => {
//     if (!menu.classList.contains('active')) {
//       menu.classList.add('active')
//       burger.classList.add('active-burger')
//       body.classList.add('locked')
//     } else {
//       menu.classList.remove('active')
//       burger.classList.remove('active-burger')
//       body.classList.remove('locked')
//     }
//   })
// // Ось тут ми ставимо брейкпоінт навбару
//   window.addEventListener('resize', () => {
//     if (window.innerWidth > 991.98) {
//       menu.classList.remove('active')
//       burger.classList.remove('active-burger')
//       body.classList.remove('locked')
//     }
//   })
// }
// burgerMenu()


// // Викликаємо цю функцію, якщо потрібно зафіксувати меню при скролле.
// function fixedNav() {
//   const nav = document.querySelector('nav')

// // Тут вказуємо в пікселях, скільки потрібно проскролити щоб наше меню стало фіксованим
//   const breakpoint = 1
//   if (window.scrollY >= breakpoint) {
//     nav.classList.add('fixed__nav')
//   } else {
//     nav.classList.remove('fixed__nav')
//   }
// }
// window.addEventListener('scroll', fixedNav)
