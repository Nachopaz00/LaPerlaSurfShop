function toggleMenu() {
    var menu = document.querySelector('.menu ul');
    menu.classList.toggle('show');
  }
  
  window.addEventListener('resize', function() {
    var menu = document.querySelector('.menu ul');
    if (window.innerWidth > 768) {
      menu.classList.remove('show');
    }
  });