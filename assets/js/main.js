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

  document.addEventListener('DOMContentLoaded', function () {
    setActiveNav();
    setYear();
  });
})();
