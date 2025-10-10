// Exemplo de toggle para menu mobile (elemento .navbar-toggle não implementado no HTML, apenas ilustrativo)
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarUl = document.querySelector('.navbar ul');
if (navbarToggle) {
  navbarToggle.addEventListener('click', () => {
    navbarUl.classList.toggle('show');
  });
}
// Handlers de formulário (simulam envio via alertas)
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Obrigado! Entraremos em contacto em breve.');
  this.reset();
});
document.getElementById('newsletterForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Inscrição na newsletter realizada!');
  this.reset();
});
