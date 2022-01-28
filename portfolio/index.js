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
    })
}

// const button = document.querySelectorAll('.button');
// if (button) {
//     button.forEach (x => x.addEventListener('click', function(q) {
//         button.forEach(x => x.classList.remove('active'))
//     }))
// }

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

// if (button) {
//     button.forEach (x => x.addEventListener('click', changeImage));

//     function changeImage (e) {
//         const buttonClick = e.target;
        
//     }
// }