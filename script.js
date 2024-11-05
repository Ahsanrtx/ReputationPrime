// JavaScript File: script.js

// Smooth scroll to section with slide effect
$(document).ready(function () {
  // Smooth scroll and active animation effect
  $('nav ul li a').on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault();
      const hash = this.hash;

      // Remove 'active' class from all slide sections
      $('.slide-section').removeClass('active');

      // Scroll smoothly to the target section
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top,
        },
        1000,
        'swing',
        function () {
          window.location.hash = hash;

          // Add 'active' class to the section for sliding effect
          $(hash).addClass('active');
        }
      );
    }
  });

  // Initial activation for the first load
  const hash = window.location.hash;
  if (hash) {
    $(hash).addClass('active');
  }
});
