/* ==========================================================================
   NovaMart — Search
   ========================================================================== */

function initSearch(inputSelector) {
  const inputs = document.querySelectorAll(inputSelector);
  inputs.forEach(input => {
    input.addEventListener('input', (e) => {
      const term = e.target.value.trim().toLowerCase();
      if (typeof NOVA_PRODUCTS === 'undefined') return;

      const cards = document.querySelectorAll('.product-card[data-name]');
      if (!cards.length) return;

      cards.forEach(card => {
        const name = card.getAttribute('data-name') || '';
        card.style.display = name.includes(term) ? '' : 'none';
      });
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const term = encodeURIComponent(e.target.value.trim());
        if (term) window.location.href = `shop.html?q=${term}`;
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initSearch('.nav-search input, .mobile-search input');
});
