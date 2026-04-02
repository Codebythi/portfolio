const navLinks = document.querySelectorAll('menu a.select, nav a.select');

//rolagem suave pelo link
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;

    const menuHeight = document.querySelector('nav').offsetHeight;
    const href = this.getAttribute('href');
    const isMobile = window.matchMedia('(max-width: 891px)').matches;

    let extraOffset;

    if (isMobile) {
      extraOffset = href === '#sobre' ? 70 : 60; //inicio da rolagem mobile
    } else {
      extraOffset = href === '#sobre' ? 60 : 20; //inicio da rolagem telas maiores
    }

    const targetPosition = target.getBoundingClientRect().top + window.scrollY - menuHeight - extraOffset;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});

const menu = document.querySelector('menu');
const header = document.querySelector('header');

/* aparecer ticker header após passar pelo header */
window.addEventListener('scroll', function() {
  const headerBottom = header.offsetHeight;

  if (window.scrollY > headerBottom) {
    menu.classList.add('fixo');
  } else {
    menu.classList.remove('fixo');
  }
});