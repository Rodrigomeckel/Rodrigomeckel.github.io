function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Função para abrir o link em uma nova guia
function openInNewTab(url) {
  const newTab = window.open(url, '_blank');
  newTab.focus();
}

// Adiciona o evento de clique aos botões do GitHub
document.querySelectorAll('.btn.project-btn').forEach((button, index) => {
  button.addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do botão

    // Dependendo do índice do botão, abre um link diferente
    let url;
    switch(index) {
      case 0:
        url = 'https://github.com/Rodrigomeckel/Projeto_web-clinica-hospitalar';
        break;
      case 1:
        url = 'https://github.com/Rodrigomeckel/Automacao-de-certificado-com-py';
        break;
      case 2:
        url = 'https://github.com/project3';
        break;
      default:
        url = 'https://facebook.com';
    }
    openInNewTab(url);
  });
});

// Adiciona o evento de clique aos ícones das redes sociais
document.querySelectorAll('#socials-container .icon').forEach((icon, index) => {
  icon.addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão

    // Dependendo do índice do ícone, abre um link diferente
    let url;
    switch(index) {
      case 0:
        url = 'https://www.linkedin.com/in/rodrigo-meckelburg-174502229/';
        break;
      case 1:
        url = 'https://github.com/Rodrigomeckel';
        break;
      default:
        url = '#';
    }

    openInNewTab(url);
  });
});



// Toggle Menu
function toggleMenu() {
  var menuLinks = document.querySelector('.menu-links');
  var hamburgerIcon = document.querySelector('.hamburger-icon');

  menuLinks.classList.toggle('open');
  hamburgerIcon.classList.toggle('open');
}

// Toggle Dark Mode
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');

  var darkModeIcon = document.getElementById('dark-mode-icon');
  var profilePic = document.getElementById('profile-pic');
  
  if (document.body.classList.contains('dark-mode')) {
    darkModeIcon.textContent = '🌜';  // Lua
    profilePic.src = './assets/profile-pic-dark.png', './assets/linkedin2.png';  // Troca para imagem do modo escuro
  } else {
    darkModeIcon.textContent = '🌞';  // Sol
    profilePic.src = './assets/profile-pic.png';  // Troca para imagem do modo claro
  }
}

document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);
