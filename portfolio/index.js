const i18Obj = {
    'en': {
      'skills': 'Skills',
      'portfolio': 'Portfolio',
      'video': 'Video',
      'price': 'Price',
      'contacts': 'Contacts',
      'hero-title': 'Alexa Rise',
      'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
      'hire': 'Hire me',
      'skill-title-1': 'Digital photography',
      'skill-text-1': 'High-quality photos in the studio and on the nature',
      'skill-title-2': 'Video shooting',
      'skill-text-2': 'Capture your moments so that they always stay with you',
      'skill-title-3': 'Rotouch',
      'skill-text-3': 'I strive to make photography surpass reality',
      'skill-title-4': 'Audio',
      'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
      'winter': 'Winter',
      'spring': 'Spring',
      'summer': 'Summer',
      'autumn': 'Autumn',
      'price-description-1-span-1': 'One location',
      'price-description-1-span-2': '120 photos in color',
      'price-description-1-span-3': '12 photos in retouch',
      'price-description-1-span-4': 'Readiness 2-3 weeks',
      'price-description-1-span-5': 'Make up, visage',
      'price-description-2-span-1': 'One or two locations',
      'price-description-2-span-2': '200 photos in color',
      'price-description-2-span-3': '20 photos in retouch',
      'price-description-2-span-4': 'Readiness 1-2 weeks',
      'price-description-2-span-5': 'Make up, visage',
      'price-description-3-span-1': 'Three locations or more',
      'price-description-3-span-2': '300 photos in color',
      'price-description-3-span-3': '50 photos in retouch',
      'price-description-3-span-4': 'Readiness 1 week',
      'price-description-3-span-5': 'Make up, visage, hairstyle',
      'order': 'Order shooting',
      'contact-me': 'Contact me',
      'send-message': 'Send message'
    },
    'ru': {
      'skills': 'Навыки',
      'portfolio': 'Портфолио',
      'video': 'Видео',
      'price': 'Цены',
      'contacts': 'Контакты',
      'hero-title': 'Алекса Райс',
      'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
      'hire': 'Пригласить',
      'skill-title-1': 'Фотография',
      'skill-text-1': 'Высококачественные фото в студии и на природе',
      'skill-title-2': 'Видеосъемка',
      'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
      'skill-title-3': 'Ретушь',
      'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
      'skill-title-4': 'Звук',
      'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
      'winter': 'Зима',
      'spring': 'Весна',
      'summer': 'Лето',
      'autumn': 'Осень',
      'price-description-1-span-1': 'Одна локация',
      'price-description-1-span-2': '120 цветных фото',
      'price-description-1-span-3': '12 отретушированных фото',
      'price-description-1-span-4': 'Готовность через 2-3 недели',
      'price-description-1-span-5': 'Макияж, визаж',
      'price-description-2-span-1': 'Одна-две локации',
      'price-description-2-span-2': '200 цветных фото',
      'price-description-2-span-3': '20 отретушированных фото',
      'price-description-2-span-4': 'Готовность через 1-2 недели',
      'price-description-2-span-5': 'Макияж, визаж',
      'price-description-3-span-1': 'Три локации и больше',
      'price-description-3-span-2': '300 цветных фото',
      'price-description-3-span-3': '50 отретушированных фото',
      'price-description-3-span-4': 'Готовность через 1 неделю',
      'price-description-3-span-5': 'Макияж, визаж, прическа',
      'order': 'Заказать съемку',
      'contact-me': 'Свяжитесь со мной',
      'send-message': 'Отправить'
    }
  }

let lang;
let theme;

const langToggle = document.querySelectorAll('.lang-toggle')
if (langToggle) {
    langToggle.forEach (x => x.addEventListener('click', function langToggleClick(e) {
        const langToggleClick = e.target;
        if (langToggle) {
            langToggle.forEach(x => x.classList.remove('active'));
            e.target.classList.add('active');
        }
    }))
}

const en = document.querySelector('.en');
const ru = document.querySelector('.ru');
const translateElement = document.querySelectorAll ('[data-i18n]');
function getTranslate(language) {
    translateElement.forEach(x => x.textContent = i18Obj[language][x.dataset.i18n]);
}
en.addEventListener ('click', () => getTranslate('en'));
ru.addEventListener ('click', () => getTranslate('ru'));


const iconMenu = document.querySelector ('.menu-icon');
const nav = document.querySelector ('.nav');
const navLink = document.querySelectorAll ('.nav-link');
if (iconMenu) {
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('lock');
        iconMenu.classList.toggle('active');
        nav.classList.toggle('active');
        navLink.forEach(x => x.classList.toggle('active'));
    }
    )
}

const navLinks = document.querySelectorAll ('.nav-link');
if (navLinks.length > 0) {
    navLinks.forEach (navLink => {
        navLink.addEventListener ("click", navLinkClick);
    })

    function navLinkClick(e) {
        const navLink = e.target;
        if (iconMenu.classList.contains('active')) {
            document.body.classList.remove('lock');
            iconMenu.classList.remove('active');
            nav.classList.remove('active');
        }
    }
}

if (navLink) {
    navLink.forEach (x => x.addEventListener('click', function(q) {
        navLink.forEach(x => x.classList.remove('active'));
    }))
}

const themeToggle = document.querySelector ('.theme-toggle');
const html = document.querySelector ('.html');
const sun = document.querySelector ('.sun');
const moon = document.querySelector ('.moon');
const skillTitle = document.querySelectorAll ('.skill-title');
const skillText = document.querySelectorAll ('.skill-text');
const sectionTitle = document.querySelectorAll ('.section-title');
const sectionTitleStripe = document.querySelectorAll ('.section-title-stripe');
const buttonSeasons = document.querySelectorAll ('.button');
const priceCartName = document.querySelectorAll ('.price-cart-name');
const priceCartText = document.querySelectorAll ('.price-cart-text');
if (themeToggle) {
    themeToggle.addEventListener("click", function(t) {
        themeToggle.classList.toggle('light');
        iconMenu.classList.toggle('light');
        html.classList.toggle('light');
        nav.classList.toggle('light');
        navLink.forEach(x => x.classList.toggle('light'));
        skillTitle.forEach(x => x.classList.toggle('light'));
        skillText.forEach(x => x.classList.toggle('light'));
        sectionTitle.forEach(x => x.classList.toggle('light'));
        sectionTitleStripe.forEach(x => x.classList.toggle('light'));
        buttonSeasons.forEach(x => x.classList.toggle('light'));
        priceCartName.forEach(x => x.classList.toggle('light'));
        priceCartText.forEach(x => x.classList.toggle('light'));
        if (themeToggle.classList.contains('light')) {
            moon.classList.remove('off');
            sun.classList.add('off');
        } else {
            sun.classList.remove('off');
            moon.classList.add('off');
        }
    })
}

const button = document.querySelectorAll('.button');
const portfolioImages = document.querySelectorAll('.photo')
if (button) {
    button.forEach (x => x.addEventListener('click', buttonClick));
    
    function buttonClick(e) {
        const buttonClick = e.target;
        if (button) {
            button.forEach(x => x.classList.remove('active'));
            e.target.classList.add('active');
        }
        if (e.target.classList.contains('winter')) {
            portfolioImages.forEach((img, index) => img.src = `assets/img/winter/${index + 1}.jpg`);
        }
        if (e.target.classList.contains('spring')) {
            portfolioImages.forEach((img, index) => img.src = `assets/img/spring/${index + 1}.jpg`);
        }
        if (e.target.classList.contains('summer')) {
            portfolioImages.forEach((img, index) => img.src = `assets/img/summer/${index + 1}.jpg`);
        }
        if (e.target.classList.contains('autumn')) {
            portfolioImages.forEach((img, index) => img.src = `assets/img/autumn/${index + 1}.jpg`);
        }
    }
}

let themeIcon;
function setLocalStorage() {
    if (ru.classList.contains('active')) {
        lang = 'ru';
    } else {
        lang = 'en';
    }
    localStorage.setItem('lang', lang);
    
    if (themeToggle.classList.contains('light')) {
        theme = 'light';
    } else {
        theme = 'dark';
    }
    localStorage.setItem('theme', theme);
}
window.addEventListener('beforeunload', setLocalStorage);


function getLocalStorage() {
  if(localStorage.getItem('lang')) {
    const langRestore = localStorage.getItem('lang');  
    getTranslate(langRestore);
    if (langRestore == ru.textContent) {
        langToggle.forEach(x => x.classList.remove('active'));
        ru.classList.add('active');
    }
  } else {
        langToggle.forEach(x => x.classList.remove('active'));
        en.classList.add('active');
  }
  if (localStorage.getItem('theme') == 'light') {
    const themeRestore = localStorage.getItem('theme');
    themeToggle.classList.add('light');
    iconMenu.classList.add('light');
    html.classList.add('light');
    nav.classList.add('light');
    navLink.forEach(x => x.classList.add('light'));
    skillTitle.forEach(x => x.classList.add('light'));
    skillText.forEach(x => x.classList.add('light'));
    sectionTitle.forEach(x => x.classList.add('light'));
    sectionTitleStripe.forEach(x => x.classList.add('light'));
    buttonSeasons.forEach(x => x.classList.add('light'));
    priceCartName.forEach(x => x.classList.add('light'));
    priceCartText.forEach(x => x.classList.add('light'));
    moon.classList.remove('off');
    sun.classList.add('off');
  }
}
window.addEventListener('load', getLocalStorage);