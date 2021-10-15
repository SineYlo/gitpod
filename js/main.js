document.addEventListener('DOMContentLoaded', function() {
  // |FYI|: Configuring the Glide.js plugin
  const swiper = new Glide('.glide', {
    type: 'carousel',
    perView: 3.2,
    gap: 24,
    autoplay: 3000,
  }).mount()
})
