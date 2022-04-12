const bar = document.querySelector("#mobile");
const nav = document.querySelector("#nav-links");

const mobileMenu = () => {
    bar.classList.toggle("is-active")
    nav.classList.toggle("active");
};

bar.addEventListener("click", mobileMenu);


const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars) {
      bar.classList.toggle('is-active');
      nav.classList.remove('active');
    }
  };
  
  nav.addEventListener('click', hideMobileMenu);



 