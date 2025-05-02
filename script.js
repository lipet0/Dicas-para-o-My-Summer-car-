const button = document.getElementById('themeToggle');
button.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});

const whatsappButton = document.querySelector('.whatsapp-btn');

whatsappButton.addEventListener('click', function() {
    const phoneNumber = '5511967339208'; // Número com código do país
    const message = encodeURIComponent('Tire suas dúvidas comigo');
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank'); // Abre o link em uma nova janela
});
