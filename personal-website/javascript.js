const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', e => {
  e.preventDefault();
  if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
    alert('Please fill in all fields');
  } else {
    form.submit();
  }
});

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('nav ul');

let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menu.classList.add('show');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menu.classList.remove('show');
    menuOpen = false;
  }
});

const navLinks = document.querySelectorAll('nav a');
 
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const sectionId = link.getAttribute('href');
    const section = document.querySelector(sectionId);
    section.scrollIntoView({behavior: "smooth"});
  });
});