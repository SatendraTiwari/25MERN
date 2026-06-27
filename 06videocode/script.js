
document.addEventListener("DOMContentLoaded",function(){
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');

  navToggle.addEventListener('click', function(){
    const isOpen = mainNav.classList.toggle('open');
    console.log(isOpen);
    navToggle.setAttribute('aria-expanded',String(isOpen));
  })


  mainNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', function(){
      if(mainNav.classList.contains('open')){
        mainNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded','false')
      }
    })
  })

})