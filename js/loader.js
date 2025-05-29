  window.addEventListener('load', function () {
    const loader = document.getElementById('loader');
    loader.style.opacity = '0';
    loader.style.transition = 'opacity 0.5s ease';
    setTimeout(() => loader.style.display = 'none', 500);
  });


document.querySelectorAll('.dropdown .menu-item').forEach(item => {
  item.addEventListener('click', function () {
    const parent = this.closest('.dropdown');
    parent.classList.toggle('open');
  });
});
