const button = document.getElementById('themeToggle');
button.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});

const whatsappButton = document.querySelector('.whatsapp-btn');  // Alterado de '.whatsapp-button' para '.whatsapp-btn'

whatsappButton.addEventListener('click', function() {
    const phoneNumber = '11967339208'; // Seu número
    const message = encodeURIComponent('Olá, gostaria de saber mais informações!');
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank'); // Abre o link em uma nova janela
});

