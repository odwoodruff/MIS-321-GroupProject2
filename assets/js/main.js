(function () {
  function setActiveNav() {
    var path = location.pathname.split('/').pop() || 'index.html';
    var links = document.querySelectorAll('nav a');
    links.forEach(function (a) {
      var href = a.getAttribute('href');
      if (!href) return;
      var file = href.split('/').pop();
      if (file === path) {
        a.classList.add('active');
      }
    });
  }

  function setYear() {
    var yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  function initThemeToggle() {
    var themeToggle = document.getElementById('theme-toggle');
    var moonIcon = document.getElementById('moon-icon');
    var sunIcon = document.getElementById('sun-icon');
    
    if (!themeToggle || !moonIcon || !sunIcon) return;

    // Check for saved theme preference or default to dark mode
    var savedTheme = localStorage.getItem('theme') || 'dark';
    
    function setTheme(theme) {
      if (theme === 'light') {
        document.body.classList.add('light-mode');
        moonIcon.classList.add('active');
        sunIcon.classList.remove('active');
      } else {
        document.body.classList.remove('light-mode');
        sunIcon.classList.add('active');
        moonIcon.classList.remove('active');
      }
      localStorage.setItem('theme', theme);
    }

    // Set initial theme
    setTheme(savedTheme);

    // Toggle theme on button click
    themeToggle.addEventListener('click', function () {
      var currentTheme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
      var newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    setActiveNav();
    setYear();
    initThemeToggle();
  });
})();
