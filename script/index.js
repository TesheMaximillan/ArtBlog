const header = document.querySelector('.header');
const headerBody = document.querySelector('.header-body');
const hambergerIcon = document.querySelector('#hamberger');
const iconMenu = document.querySelector('#icon-menu');
const iconCross = document.querySelector('#icon-cross');
const artCardContainer = document.querySelector('.main-container__art');
const showMore = document.querySelector('.main-container__detail');
const speakersContainer = document.querySelector('.featured-speakers');

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
    artist: 'Dan Cristian',
    site: 'https://www.pexels.com/',
  },
  {
    img: '../assets/images/pexels-dazzle-jam-1038041-min.jpg',
    alt: 'Dazzel Jam img',
    artist: 'Dazzel Jam',
    site: 'https://www.pexels.com/',
  },
  {
    img: '../assets/images/pexels-min-an-962312-min.jpg',
    alt: 'Min An img',
    artist: 'Min An',
    site: 'https://www.pexels.com/',
  },
  {
    img: '../assets/images/pexels-pixabay-159862-min.jpg',
    alt: 'Pixabay img',
    artist: 'Pixabay',
    site: 'https://www.pexels.com/',
  },
  {
    img: '../assets/images/pexels-pixabay-161154-min.jpg',
    alt: 'Pixabay img 2',
    artist: 'Pixabay',
    site: 'https://www.pexels.com/',
  },
  {
    img: '../assets/images/pexels-pixabay-73873-min.jpg',
    alt: 'Pixabay img 3',
    artist: 'Pixabay',
    site: 'https://www.pexels.com/',
  },
  {
    img: '../assets/images/pexels-sharon-mccutcheon-1209843-min.jpg',
    artist: 'Sharon Mccutcheon',
    site: 'https://www.pexels.com/',
    alt: 'Sharon Mccutcheon img',
  },
  {
    img: '../assets/images/pexels-una-laurencic-20967-min.jpg',
    alt: 'Una Laurencic img',
    artist: 'Una Laurencic',
    site: 'https://www.pexels.com/',
  },
];

for (let i = 0; i < arts.length; i += 1) {
  const artCard = document.createElement('div');
  const cardImg = document.createElement('img');
  const cardDesc = document.createElement('div');
  const artist = document.createElement('p');
  const site = document.createElement('small');

  artCard.className = 'main-container__art--card';
  cardImg.className = 'card-img';
  cardDesc.className = 'card-desc';
  artist.className = 'card-desc__artist';
  site.className = 'card-desc__site';

  cardImg.src = arts[i].img;
  cardImg.alt = arts[i].alt;
  artist.textContent = arts[i].artist;
  site.textContent = arts[i].site;

  artCard.appendChild(cardImg);
  cardDesc.appendChild(artist);
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

// /////////////////// Featured Speakers
const featuredSpeakers = [
  {
    picture: '../assets/images/carton woman.jpg',
    name: 'Julia Leda',
    alt: 'Julia Leda img 1',
    title: 'Artist who is participants of the pexel site',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laboriosam ea, error perferendis officia culpa beatae dolore porro magni in voluptatem at consequuntur dolorem sed facilis commodi ratione voluptatum iusto.',
  },
  {
    picture: '../assets/images/carton man.jpg',
    name: 'Dan Cristian',
    alt: 'Dan Cristian img 1',
    title: 'Artist who is participants of the pexel site',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laboriosam ea, error perferendis officia culpa beatae dolore porro magni in voluptatem at consequuntur dolorem sed facilis commodi ratione voluptatum iusto.',
  },
  {
    picture: '../assets/images/carton man.jpg',
    name: 'Dan Cristian',
    alt: 'Dan Cristian img 2',
    title: 'Artist who is participants of the pexel site',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laboriosam ea, error perferendis officia culpa beatae dolore porro magni in voluptatem at consequuntur dolorem sed facilis commodi ratione voluptatum iusto.',
  },
  {
    picture: '../assets/images/carton woman.jpg',
    name: 'Julia Leda',
    alt: 'Julia Leda img 2',
    title: 'Artist who is participants of the pexel site',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laboriosam ea, error perferendis officia culpa beatae dolore porro magni in voluptatem at consequuntur dolorem sed facilis commodi ratione voluptatum iusto.',
  },
  {
    picture: '../assets/images/carton woman.jpg',
    name: 'Julia Leda',
    alt: 'Julia Leda img 3',
    title: 'Artist who is participants of the pexel site',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laboriosam ea, error perferendis officia culpa beatae dolore porro magni in voluptatem at consequuntur dolorem sed facilis commodi ratione voluptatum iusto.',
  },
  {
    picture: '../assets/images/carton man.jpg',
    name: 'Dan Cristian',
    alt: 'Dan Cristian img 3',
    title: 'Artist who is participants of the pexel site',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laboriosam ea, error perferendis officia culpa beatae dolore porro magni in voluptatem at consequuntur dolorem sed facilis commodi ratione voluptatum iusto.',
  },
];

const speakers = document.createElement('div');
const speakersTitle = document.createElement('h2');
const artists = document.createElement('div');
const moreSpeaker = document.createElement('button');

speakers.className = 'speakers';
speakersTitle.className = 'speakers__main-title';
speakersTitle.textContent = 'Featured Speakers';
moreSpeaker.id = 'speakers__button';
moreSpeaker.textContent = 'More';
artists.classList.add('speakers__main-artists', 'overflow');
artists.id = 'overflow';

speakers.appendChild(speakersTitle);

for (let i = 0; i < featuredSpeakers.length; i += 1) {
  const artist = document.createElement('div');
  const artistPicture = document.createElement('img');
  const aboutArtist = document.createElement('div');
  const artistName = document.createElement('p');
  const aritstTitle = document.createElement('p');
  const borderLine = document.createElement('div');
  const artistDesc = document.createElement('p');

  artist.className = 'speakers__main-artists--artist';
  artist.id = 'artist';
  artistPicture.className = 'artist-picture';
  aboutArtist.className = 'about-artist';
  artistName.className = 'artist-name';
  aritstTitle.className = 'artist-title';
  borderLine.className = 'line';
  artistDesc.className = 'artist-desc';

  artistPicture.src = featuredSpeakers[i].picture;
  artistPicture.alt = featuredSpeakers[i].alt;
  artistName.textContent = featuredSpeakers[i].name;
  aritstTitle.innerHTML = featuredSpeakers[i].title;
  artistDesc.innerHTML = featuredSpeakers[i].content;

  artist.appendChild(artistPicture);
  aboutArtist.appendChild(artistName);
  aboutArtist.appendChild(aritstTitle);
  aboutArtist.appendChild(borderLine);
  aboutArtist.appendChild(artistDesc);
  artist.appendChild(aboutArtist);
  artists.appendChild(artist);
}

speakers.appendChild(artists);
speakers.appendChild(moreSpeaker);
speakersContainer.appendChild(speakers);

moreSpeaker.addEventListener('click', () => {
  if (artists.classList.contains('overflow')) {
    artists.classList.remove('overflow');
    moreSpeaker.textContent = 'Collapse';
  } else {
    artists.classList.add('overflow');
    moreSpeaker.textContent = 'Expand';
  }
});
