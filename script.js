'use strict';

///////////////////////////////////////
// Modal window
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');



const openModal = function (e) {
 e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click',openModal));


btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


//Learn More Scrolling
btnScrollTo.addEventListener('click',function(e){
  section1.scrollIntoView({behavior:'smooth'});
})

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');
// const allSections = document.querySelector('.section');
// console.log(allSections);

// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);


//creating and inserting elements
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML = 'We use cookies for improved functionality and analytics. <button class = "btn  btn--close-cookie">Got it!</button>';
// //header.prepend(message);
// header.append(message);
//header.append(message.childNode(true))
//header.before(message);
//header.after(message);

//deleting elements
// document.querySelector('.btn--close-cookie').addEventListener('click',function(){
//   message.remove();
// });

// //styles
// message.style.backgroundColor = "#37383d";
// message.style.width = '120%';
// console.log(message.style.backgroundColor);

// message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// document.documentElement.style.setProperty('--color-primary','orangered');

// //attributes

// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src); 

// logo.alt = 'Beautiful minimalist logo';
// console.log(logo.designer)
// console.log(logo.setAttribute('company','Bankist'))

// const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// //Data Attributes
// console.log(logo.dataset.versionNumber);

// //classes
// logo.classList.add('c','j');
// logo.classList.remove('c','j');
// logo.classList.toggle('c','j');
// logo.classList.contains('c','j');



// const h1 = document.querySelector('h1');
// const alertH1 = function(e){
//     alert('addEventListener: Great! you are reading the heading :D')

//     h1.removeEventListener('mouseenter',alertH1)
//   }


// h1.addEventListener('mouseenter',alertH1);
// setTimeout(() => h1.removeEventListener('mouseenter',alertH1),3000);
//   alert('addEventListener: Great! you are reading the heading :D')
// })

// const randomInt = (min,max) => 
// Math.floor(Math.random()*(max-min+1) + min);
// const randomColor = () =>
// `rgb(${randomInt(0,255)}, ${randomInt(0,255)}, ${randomInt(0,255)})`;
// console.log(randomColor(0,255));

 
////////////////////////////// 

// document.querySelectorAll('.nav__links').forEach(element => {
//   element.addEventListener('click',function(e){
//     e.preventDefault();
    
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({behavior: 'smooth'})
//   });  
// });

//1. Add event listener to common parent element 
//2. Determine what element originated the event 

document.querySelector('.nav__links').addEventListener('click',function(e){
  console.log(e.target);
  e.preventDefault();

  //Matching strategy 
  if(e.target.classList.contains('nav__link')){
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  }
})

// const h1 = document.querySelector('h1');
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';

// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);

// [...h1.parentElement.children].forEach(function(el){
//   if(el !== h1) el.style.tranform = 'scale(0.5)';
// })




tabs.forEach(t => t.addEventListener('click',() => console.log('TAB')));

tabsContainer.addEventListener('click',function(e){
  const clicked = e.target.closest('.operations__tab');


  //guard clause
    if(!clicked) return;

    //remove active classes 
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  clicked.classList.add('operations__tab--active');


  //activate content area 
 
document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');

});

//menu fade animation
const handleHover = function(e){


  if(e.target.classList.contains('nav__link')){
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if(el !== link) el.style.opacity = this;
  });
    logo.style.opacity = this;
  }
}
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout',handleHover.bind(1));

//Sticky Navigation
// const initialCoords = section1.getBoundingClientRect()
// console.log(initialCoords);
// window.addEventListener('scroll',function(e){
//   console.log(window.scrollY);
//   if(this.window.scrollY > initialCoords.top)nav.classList.add('sticky') 
  
//   else nav.classList.remove('sticky');
// });

// const obsCallback = function(entries, observer){
//   entries.forEach(entry => {
//     console.log(entry);
//   })
// }

// const observerOptions = {
//   root: null,
//   threshold: [0, 0.2],
// }

// const observer = new IntersectionObserver(obsCallback,observerOptions);
// observer.observe(section1);


const stickyNav = function(entries){
  const [entry] = entries;
  console.log(entry);

  if(!entry.isIntersecting) nav.classList.add('sticky')
  else nav.classList.remove('sticky')  
}
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);

const headerObserver = new IntersectionObserver(stickyNav, {
  root:null,
  threshold: 0,
  rootMargin: `${navHeight}px`
});

headerObserver.observe(header);

//reveal sections
const allSections = document.querySelectorAll('.section');
const revealSection = function(entries, observer){
  const [entry] = entries;
  console.log(entry);

  if(!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
}
const sectionObserver = new IntersectionObserver(revealSection,{
  root: null,
  threshold: 0.15,
})
allSections.forEach(function(section){
  sectionObserver.observe(section)
  section.classList.add('section--hidden');
})
