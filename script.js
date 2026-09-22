const menuButton = document.querySelector('.menu-button');
const mobileNav = document.querySelector('.mobile-nav');
const form = document.querySelector('#bypass-form');
const input = document.querySelector('#url-input');
const message = document.querySelector('#form-message');

menuButton?.addEventListener('click', () => {
  const open = mobileNav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.mobile-nav a').forEach((link) => link.addEventListener('click', () => {
  mobileNav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const value = input.value.trim();
  if (!value) return;
  const button = form.querySelector('button');
  button.disabled = true;
  button.innerHTML = 'Processing <span>…</span>';
  message.className = 'form-message';
  message.textContent = 'Checking your link…';
  window.setTimeout(() => {
    message.className = 'form-message success';
    message.textContent = 'UI demo ready — connect your RoNN API endpoint to process links.';
    button.disabled = false;
    button.innerHTML = 'Process link <span>↗</span>';
  }, 700);
});

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
}), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
