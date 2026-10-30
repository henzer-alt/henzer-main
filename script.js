const button = document.querySelector('.menu');
const navigation = document.querySelector('#navigation');
function closeMenu() { button.setAttribute('aria-expanded', 'false'); navigation.classList.remove('open'); }
button.addEventListener('click', () => { const open = button.getAttribute('aria-expanded') !== 'true'; button.setAttribute('aria-expanded', String(open)); navigation.classList.toggle('open', open); });
navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') { closeMenu(); button.focus(); } });
window.matchMedia('(min-width: 1101px)').addEventListener('change', closeMenu);
document.querySelector('#year').textContent = new Date().getFullYear();
