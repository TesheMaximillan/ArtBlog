const header = document.querySelector('.header');
const headerBody = document.querySelector('.header-body');
const hambergerIcon = document.querySelector('#hamberger');
const iconMenu = document.querySelector('#icon-menu');
const iconCross = document.querySelector('#icon-cross');
const artCardContainer = document.querySelector('.main-container__art');
const showMore = document.querySelector('.main-container__detail');

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
const navItems = ['About', 'Program', 'Join', 'Sponsor', 'News'];

for (let i = 0; i < navItems.length; i += 1) {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.textContent = navItems[i];
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
    ul.style.display = 'flex';
  }
});

// /////////////////// Main Arts
const arts = [
  {
    img: '../assets/images/pexels-dan-cristian-pădureț-1193743-min.jpg',
    alt: 'Dan Cristian img',
    author: 'Dan Cristian',
    site: 'https://www.pexels.com/',
  },
  {
    img: '../assets/images/pexels-dazzle-jam-1038041-min.jpg',
    alt: '',
    author: 'Dazzel Jam',
    site: 'https://www.pexels.com/',
  },
  {
    img: '../assets/images/pexels-min-an-962312-min.jpg',
    alt: 'Min An img',
    author: 'Min An',
    site: 'https://www.pexels.com/',
  },
  {
    img: '../assets/images/pexels-pixabay-159862-min.jpg',
    alt: 'Pixabay img',
    author: 'Pixabay',
    site: 'https://www.pexels.com/',
  },
  {
    img: '../assets/images/pexels-pixabay-161154-min.jpg',
    alt: 'Pixabay img 2',
    author: 'Pixabay',
    site: 'https://www.pexels.com/',
  },
  {
    img: '../assets/images/pexels-pixabay-73873-min.jpg',
    alt: 'Pixabay img 3',
    author: 'Pixabay',
    site: 'https://www.pexels.com/',
  },
  {
    img: '../assets/images/pexels-sharon-mccutcheon-1209843-min.jpg',
    author: 'Sharon Mccutcheon',
    site: 'https://www.pexels.com/',
    alt: 'Sharon Mccutcheon img',
  },
  {
    img: '../assets/images/pexels-una-laurencic-20967-min.jpg',
    alt: 'Una Laurencic img',
    author: 'Una Laurencic',
    site: 'https://www.pexels.com/',
  },
];

for (let i = 0; i < arts.length; i += 1) {
  const artCard = document.createElement('div');
  const cardImg = document.createElement('img');
  const cardDesc = document.createElement('div');
  const author = document.createElement('p');
  const site = document.createElement('small');

  artCard.className = 'main-container__art--card';
  cardImg.className = 'card-img';
  cardDesc.className = 'card-desc';
  author.className = 'card-desc__author';
  site.className = 'card-desc__site';

  cardImg.src = arts[i].img;
  cardImg.alt = arts[i].alt;
  author.textContent = arts[i].author;
  site.textContent = arts[i].site;

  artCard.appendChild(cardImg);
  cardDesc.appendChild(author);
  cardDesc.appendChild(site);
  artCard.appendChild(cardDesc);
  artCardContainer.appendChild(artCard);
}
// /////////////////// Main Arts show more content
showMore.addEventListener('click', (event) => {
  event.preventDefault();

  if (artCardContainer.classList.contains('open')) {
    artCardContainer.classList.remove('open');
    artCardContainer.style.maxHeight = '25.5rem';
    showMore.textContent = 'Expand';
  } else {
    artCardContainer.classList.add('open');
    artCardContainer.style.maxHeight = 'max-content';
    showMore.textContent = 'Collapse';
  }
});
