document.addEventListener('DOMContentLoaded', function() {
  // |FYI|: Configuring the Glide.js plugin
  const swiper = new Glide('.glide', {
    type: 'carousel',
    perView: 3.2,
    gap: 24,
    autoplay: 3000,
  }).mount()

  // |FYI|: Acceptance of cookies
  const btnCookie = document.querySelector('.bottom-footer__btn'),
        boxCookie = document.querySelector('.site-footer__bottom')

  btnCookie.addEventListener('click', () => {
    boxCookie.style.display = 'none'
  })

  // |FYI|: Configuring ScrollReveal
  ScrollReveal().reveal('.site-header', { delay: 300, origin: 'top', distance: '50px' })
  ScrollReveal().reveal('.section-hero__title', { delay: 500, origin: 'left', distance: '100px' })
  ScrollReveal().reveal('.section-hero__desc', { delay: 800, origin: 'left', distance: '100px' })
  ScrollReveal().reveal('.section-hero__box', { delay: 800, origin: 'left', distance: '100px' })
  ScrollReveal().reveal('.section-hero__list', { delay: 800, origin: 'left', distance: '100px' })
  ScrollReveal().reveal('.section-hero__slogan', { delay: 400, origin: 'center', scale: 0.85 })
  ScrollReveal().reveal('.section-development__left', { delay: 400, origin: 'left', distance: '100px' })
  ScrollReveal().reveal('.section-development__picture', { delay: 400, origin: 'right', distance: '100px' })
  ScrollReveal().reveal('.section-remote__title', { delay: 400, origin: 'top', distance: '100px' })
  ScrollReveal().reveal('.section-remote__picture', { delay: 440, origin: 'left', distance: '150px' })
  ScrollReveal().reveal('.section-remote__desc', { delay: 400, origin: 'right', distance: '150px' })
  ScrollReveal().reveal('.section-remote__box', { delay: 400, origin: 'bottom', distance: '100px' })
  ScrollReveal().reveal('.section-testimonials__title', { delay: 400, origin: 'top', distance: '100px' })
  ScrollReveal().reveal('.glide', { delay: 400, origin: 'left', distance: '150px' })
  ScrollReveal().reveal('.section-testimonials__list', { delay: 400, origin: 'right', distance: '150px' })
  ScrollReveal().reveal('.section-start__title', { delay: 400, origin: 'top', distance: '100px' })
  ScrollReveal().reveal('.section-start__left', { delay: 400, origin: 'left', distance: '150px' })
  ScrollReveal().reveal('.section-start__right', { delay: 400, origin: 'right', distance: '150px' })
  ScrollReveal().reveal('.top-footer__panel', { delay: 400, origin: 'center', scale: 0.85 })
  ScrollReveal().reveal('.top-footer__box', { delay: 450, origin: 'center', scale: 0.55 })
  ScrollReveal().reveal('.footer-container', { delay: 450, origin: 'center'})
})
