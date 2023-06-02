// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
  var anchorLinks = document.querySelectorAll('a[href^="#"]');
  for (var i = 0; i < anchorLinks.length; i++) {
    anchorLinks[i].addEventListener('click', function(e) {
      e.preventDefault();
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  }
});

// Contact form submission
document.addEventListener('DOMContentLoaded', function() {
  var contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      var formData = new FormData(contactForm);
      fetch('/contact', {
        method: 'POST',
        body: formData
      })
        .then(function(response) {
          if (response.ok) {
            alert('Message sent successfully!');
            contactForm.reset();
          } else {
            alert('Error sending message. Please try again later.');
          }
        })
        .catch(function(error) {
          alert('Error sending message. Please try again later.');
        });
    });
  }
});
