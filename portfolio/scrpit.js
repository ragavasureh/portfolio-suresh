// Optional JavaScript for functionality such as smooth scroll or animations.
document.addEventListener('DOMContentLoaded', function () {
    const ctaBtn = document.querySelector('.cta-btn');
    ctaBtn.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
    });
  });
  