// Atualizar ano no footer
document.getElementById('year').textContent = new Date().getFullYear();

// Formulário de contacto
document.getElementById('form-contacto').addEventListener('submit', (e) => {
  e.preventDefault();
  document.getElementById('form-msg').textContent = 'Obrigado pelo contacto! Responderemos em breve.';
  e.target.reset();
});

// Menu hambúrguer
const hamburgerToggle = document.getElementById('hamburger-toggle');
const navMenu = document.getElementById('nav-menu');

hamburgerToggle.addEventListener('change', () => {
  if (hamburgerToggle.checked) {
    navMenu.classList.add('active');
  } else {
    navMenu.classList.remove('active');
  }
});
