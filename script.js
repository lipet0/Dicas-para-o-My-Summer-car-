// Função para alternar entre os temas
function toggleTheme() {
  const body = document.body;
  const currentTheme = body.classList.contains('dark-theme') ? 'dark' : 'light';
  
  // Alterna entre os temas
  if (currentTheme === 'dark') {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    localStorage.setItem('theme', 'light'); // Salva a preferência
  } else {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark'); // Salva a preferência
  }
}

// Verificar a preferência de tema salva no localStorage
function loadTheme() {
  const savedTheme = localStorage.getItem('theme');
  const body = document.body;
  
  if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
  } else {
    body.classList.add('light-theme');
  }
}

// Chama a função para carregar o tema assim que a página for carregada
loadTheme();

// Suponha que você tenha um botão para alternar entre os temas
document.getElementById('theme-toggle-btn').addEventListener('click', toggleTheme);
