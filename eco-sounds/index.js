const headerLogo = document.querySelector('.header-logo');
const solovey = document.querySelector('.solovey');
const drozd = document.querySelector('.drozd');
const malinovka = document.querySelector('.malinovka');
const zhavoronok = document.querySelector('.zhavoronok');
const slavka = document.querySelector('.slavka');
const main = document.querySelector('.main');
const audio = document.querySelector('audio');
const button = document.querySelector('.button');

function playAudio() {
    audio.currentTime = 0;
    audio.play();
  }
function pauseAudio() {
    audio.pause();
}

button.addEventListener ('click', function (e) {
    const buttonClick = e.target;
    if (buttonClick.classList.contains('active')) {
        buttonClick.classList.remove('active');
        pauseAudio();
    } else {
        buttonClick.classList.add('active');
        playAudio();
    }
})

if (headerLogo) {
    headerLogo.addEventListener('click', function (q) {
        main.style.backgroundImage = "url(assets/img/forest.jpg)";
        audio.src = 'assets/audio/forest.mp3';
        button.classList.add('active');
        playAudio();
    })
}

if (solovey) {
    solovey.addEventListener('click', function (q) {
        main.style.backgroundImage = "url(assets/img/solovey.jpg)";
        audio.src = 'assets/audio/solovey.mp3';
        button.classList.add('active');
        playAudio();
    }) 
}

if (drozd) {
    drozd.addEventListener('click', function (q) {
        main.style.backgroundImage = "url(assets/img/drozd.jpg)";
        audio.src = 'assets/audio/drozd.mp3';
        button.classList.add('active');
        playAudio();
    }) 
}

if (malinovka) {
    malinovka.addEventListener('click', function (q) {
        main.style.backgroundImage = "url(assets/img/malinovka.jpg)";
        audio.src = 'assets/audio/malinovka.mp3';
        button.classList.add('active');
        playAudio();
    }) 
}

if (zhavoronok) {
    zhavoronok.addEventListener('click', function (q) {
        main.style.backgroundImage = "url(assets/img/zhavoronok.jpg)";
        audio.src = 'assets/audio/zhavoronok.mp3';
        button.classList.add('active');
        playAudio();
    }) 
}

if (slavka) {
    slavka.addEventListener('click', function (q) {
        main.style.backgroundImage = "url(assets/img/slavka.jpg)";
        audio.src = 'assets/audio/slavka.mp3';
        button.classList.add('active');
        playAudio();
    }) 
}