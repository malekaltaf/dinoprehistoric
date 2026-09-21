fetch('partials/navbar.html')
  .then(r => r.text())
  .then(html => document.getElementById('site-navbar').innerHTML = html);
