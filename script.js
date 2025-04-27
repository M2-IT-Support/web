document.addEventListener('DOMContentLoaded', () => {
  const languageSwitcher = document.getElementById('languageSwitcher');
  const elementsToTranslate = document.querySelectorAll('[data-translate]');

  function setLanguage(lang) {
    if (!translations[lang]) return;
    elementsToTranslate.forEach(el => {
      const key = el.getAttribute('data-translate');
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
    localStorage.setItem('selectedLanguage', lang);
  }

  // Event: Sprachwechsel
  languageSwitcher.addEventListener('change', (e) => {
    setLanguage(e.target.value);
  });

  // Event: Lade vorherige Sprache beim Seitenaufruf
  const savedLanguage = localStorage.getItem('selectedLanguage') || 'de';
  languageSwitcher.value = savedLanguage;
  setLanguage(savedLanguage);

  // Ladeanimation
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) loader.style.display = 'none';
  }, 1000);
});
