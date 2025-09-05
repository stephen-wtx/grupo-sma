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
const navLinks = navMenu.querySelectorAll('a');

// Função para remover a classe active de todos os links
function removeActiveClasses() {
  navLinks.forEach(link => link.classList.remove('active'));
}

// Função para ativar o link com base no hash da URL
function setActiveLinkFromHash() {
  const hash = window.location.hash;
  if (hash) {
    removeActiveClasses();
    const activeLink = navMenu.querySelector(`a[href="${hash}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
    }
  }
}

// Adicionar evento de clique aos links do menu
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    removeActiveClasses();
    link.classList.add('active');
    // Fechar o menu hamburger ao clicar em um link (em telas menores)
    if (hamburgerToggle.checked) {
      hamburgerToggle.checked = false;
      navMenu.classList.remove('active');
    }
  });
});

// Ativar o link inicial com base no hash da URL (se houver)
setActiveLinkFromHash();

// Atualizar o link ativo ao mudar o hash da URL
window.addEventListener('hashchange', setActiveLinkFromHash);

// Usar IntersectionObserver para detectar a seção visível ao rolar
const sections = document.querySelectorAll('section[id]');
const observerOptions = {
  root: null,
  rootMargin: '-50% 0px -50% 0px', // Ativar quando a seção ocupa o centro da tela
  threshold: 0
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const sectionId = entry.target.id;
      removeActiveClasses();
      const activeLink = navMenu.querySelector(`a[href="#${sectionId}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
}, observerOptions);

sections.forEach(section => observer.observe(section));

// Menu hambúrguer
hamburgerToggle.addEventListener('change', () => {
  if (hamburgerToggle.checked) {
    navMenu.classList.add('active');
  } else {
    navMenu.classList.remove('active');
  }
});
