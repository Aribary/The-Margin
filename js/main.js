// Category filter
function filterCat(cat, btn) {
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const cards = document.querySelectorAll('.article-grid .card');
  const hero  = document.getElementById('hero-article');

  cards.forEach(card => {
    if (cat === 'all' || card.dataset.cat === cat) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });

  if (hero) {
    hero.style.display = (cat === 'all' || cat === 'cost-of-living') ? '' : 'none';
  }
}

// Mobile menu
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

// Read URL param on load (so links like index.html?cat=policy work)
window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const cat = params.get('cat');
  if (cat) {
    const btn = [...document.querySelectorAll('.cat-btn')]
      .find(b => b.textContent.toLowerCase().replace(/\s+/g, '-') === cat
              || b.getAttribute('onclick')?.includes(cat));
    if (btn) filterCat(cat, btn);
  }
});
