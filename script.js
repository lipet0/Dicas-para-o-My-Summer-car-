// Função para alternar entre os temas
function toggleTheme() {
  const body = document.body;
  const currentTheme = body.classList.contains('dark') ? 'dark' : 'light';
  
  // Alterna entre os temas
  if (currentTheme === 'dark') {
    body.classList.remove('dark');
    localStorage.setItem('theme', 'light'); // Salva a preferência
  } else {
    body.classList.add('dark');
    localStorage.setItem('theme', 'dark'); // Salva a preferência
  }
}

// Verificar a preferência de tema salva no localStorage
function loadTheme() {
  const savedTheme = localStorage.getItem('theme');
  const body = document.body;
  
  if (savedTheme === 'dark') {
    body.classList.add('dark');
  } else {
    body.classList.remove('dark');
  }
}

// Chama a função para carregar o tema assim que a página for carregada
loadTheme();

// Event listener para o botão de alternância do tema
document.addEventListener('DOMContentLoaded', function() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }
});

// Código para navegação suave
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.navigate-btn');

  // Adicionar o evento de clique para cada botão
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Pegar o alvo do botão
      const targetId = button.getAttribute('data-target');
      
      // Encontrar o elemento de destino (div) e rolar até ele
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

