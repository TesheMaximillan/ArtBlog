const hambergerIcon = document.querySelector('#hamberger');
const iconMenu = document.querySelector('.icon-menu');
const iconCross = document.querySelector('.icon-cross');
const navMobile = document.querySelector('.nav-mobile');

hambergerIcon.addEventListener('click', () => {
  if (iconMenu.classList.contains('hide-icon')) {
    iconMenu.classList.remove('hide-icon');
    iconCross.style.display = 'none';
    navMobile.style.display = 'none';
  } else {
    iconMenu.classList.add('hide-icon');
    iconCross.style.display = 'inline-block';
    navMobile.style.display = 'flex';
  }
});