// Language toggle, mobile menu, scroll to top
const langButtons = document.querySelectorAll('.btn-chip[data-set-lang]');
const setLang = (lang) => {
  document.querySelectorAll('[data-lang]').forEach(el => {
    el.style.display = el.getAttribute('data-lang') === lang ? '' : 'none';
  });
  langButtons.forEach(b=>{
    const isActive = (b.dataset.setLang || b.dataset.set_lang) === lang;
    b.classList.toggle('active', isActive);
    b.setAttribute('aria-pressed', isActive);
  });
  document.documentElement.lang = (lang === 'ar') ? 'ar' : 'en';
};
langButtons.forEach(b=> b.addEventListener('click', ()=> setLang(b.dataset.setLang || b.dataset.set_lang)) );
setLang('en');

const toTop = document.getElementById('toTop');
if (toTop) toTop.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));

const menuBtn = document.getElementById('menuBtn');
const navlinks = document.querySelector('.navlinks');
if (menuBtn && navlinks) {
  menuBtn.addEventListener('click', ()=>{
    const visible = window.getComputedStyle(navlinks).display !== 'none';
    if (visible) {
      navlinks.style.display = 'none';
      menuBtn.setAttribute('aria-label', 'Open menu');
    } else {
      navlinks.style.display = 'flex';
      navlinks.style.flexWrap = 'wrap';
      menuBtn.setAttribute('aria-label', 'Close menu');
    }
  });
}
