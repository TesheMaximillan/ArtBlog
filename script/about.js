const header = document.querySelector('.header');
const headerBody = document.querySelector('.header-body');
const hambergerIcon = document.querySelector('#hamberger');
const iconMenu = document.querySelector('#icon-menu');
const iconCross = document.querySelector('#icon-cross');

// //////////////////// Sticky NavBar
const navbar = document.querySelector('.header-nav');
const sticky = navbar.offsetTop;

window.onscroll = () => {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
    headerBody.classList.add('content');
  } else {
    navbar.classList.remove('sticky');
    headerBody.classList.remove('content');
  }
};

// /////////////////// Mobile Menu
const ul = document.createElement('ul');
ul.classList.add('header-nav-container__nav-bar--link', 'nav-mobile');
const navItems = [
  {
    name: 'Home',
    href: '/index.html',
  },
  {
    name: 'About',
    href: '#',
  },
  {
    name: 'Program',
    href: '#',
  },
  {
    name: 'Join',
    href: '#',
  },
  {
    name: 'Sponsor',
    href: '#',
  },
  {
    name: 'News',
    href: '#',
  },
];

for (let i = 0; i < navItems.length; i += 1) {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.textContent = navItems[i].name;
  a.addEventListener('click', () => {
    window.location.href = navItems[i].href;
  });
  li.className = 'nav-link';
  li.appendChild(a);
  ul.appendChild(li);
}

header.insertBefore(ul, headerBody);

hambergerIcon.addEventListener('click', () => {
  if (iconMenu.classList.contains('hide-icon')) {
    iconMenu.classList.remove('hide-icon');
    iconCross.style.display = 'none';
    ul.style.display = 'none';
  } else {
    iconMenu.classList.add('hide-icon');
    iconCross.style.display = 'inline-block';
    iconCross.style.fill = '#fff';
    ul.style.display = 'flex';
  }
});
