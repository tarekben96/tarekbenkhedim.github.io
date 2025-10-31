// ===============================
//  TAREK BENKHEDIM — SCRIPT UPDATED
//  Language toggle + Animated mobile menu + Scroll to top
// ===============================

// ----- Language Switcher -----
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

// ----- Scroll to Top -----
const toTop = document.getElementById('toTop');
if (toTop) toTop.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));

// ----- Animated Mobile Menu -----
const menuBtn = document.getElementById('menuBtn');
const navlinks = document.querySelector('.navlinks');

if (menuBtn && navlinks) {
  menuBtn.addEventListener('click', ()=>{
    const isShown = navlinks.classList.toggle('show');
    menuBtn.classList.toggle('open', isShown);
    menuBtn.textContent = isShown ? '✖' : '☰';
    menuBtn.setAttribute('aria-label', isShown ? 'Close menu' : 'Open menu');
  });
}

// Close menu on link click (mobile)
document.querySelectorAll('.navlinks a').forEach(link=>{
  link.addEventListener('click', ()=>{
    if(window.innerWidth < 640){
      navlinks.classList.remove('show');
      menuBtn.classList.remove('open');
      menuBtn.textContent = '☰';
    }
  });
});
