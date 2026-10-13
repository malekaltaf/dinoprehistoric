const siteNavbar = document.getElementById('site-navbar');
if (siteNavbar) {
  fetch('partials/navbar.html')
    .then(r => r.text())
    .then(html => { siteNavbar.innerHTML = html; })
    .catch(() => {});
}
