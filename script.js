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
      extraOffset = href === '#sobre' ? 70 : 110; //inicio da rolagem mobile
    } else {
      extraOffset = href === '#sobre' ? 70 : 80; //inicio da rolagem telas maiores
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
  
  // Offset diferente para PC e mobile
  const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
  const offset = isDesktop ? 240 : 80;

  if (window.scrollY > headerBottom - offset) {
    menu.classList.add('fixo');
  } else {
    menu.classList.remove('fixo');
  }
});

// proteção contra span e mailto para enviar uma mensagem pro email
const user = "codebythi";
const domain = "gmail.com";
document.getElementById("email-link").href = `mailto:${user}@${domain}`;

// criando uma animação de abrir e fechar no details
document.querySelectorAll('details.descrição').forEach(detail => {
  const inner = detail.querySelector('.content-inner');
  const summary = detail.querySelector('summary');

  summary.addEventListener('click', e => {
    e.preventDefault();

    if (detail.open) {
      inner.style.maxHeight = inner.scrollHeight + 'px';
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          inner.style.maxHeight = '0';
        });
      });
      inner.addEventListener('transitionend', () => {
        detail.open = false;
      }, { once: true });
    } else {
      detail.open = true;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          inner.style.maxHeight = inner.scrollHeight + 'px';
        });
      });
      inner.addEventListener('transitionend', () => {
        inner.style.maxHeight = 'none';
      }, { once: true });
    }
  });
});