(function(){
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('nav');
  if(toggle && nav){
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
    document.addEventListener('click', (e) => {
      const t = e.target;
      if(!nav.contains(t) && !toggle.contains(t)){
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
})();
