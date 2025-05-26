let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
  section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });
}

// Inside your main.js or a script tag
document.addEventListener('DOMContentLoaded', function () {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false,
    offset: 120,
    delay: 100,
    anchorPlacement: 'top-bottom',

    // ❗ Enable animations on mobile by default
    disable: false
  });

  window.addEventListener('resize', function () {
    AOS.refresh();
  });
});







document.addEventListener("DOMContentLoaded", function () {
  const roles = [
    "UI/UX Designer",
    "Frontend Developer"
   
  ];

  let index = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenWords = 2000;

  const textElement = document.getElementById("typing-text");

  function type() {
    if (!textElement) return; // Safety check

    const currentText = roles[index];

    if (isDeleting) {
      charIndex--;
      textElement.textContent = currentText.substring(0, charIndex);
    } else {
      charIndex++;
      textElement.textContent = currentText.substring(0, charIndex);
    }

    let timeout = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentText.length) {
      timeout = delayBetweenWords;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % roles.length;
      timeout = typingSpeed;
    }

    setTimeout(type, timeout);
  }

  type(); // Start the typing animation
});

 window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });



