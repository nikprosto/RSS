const iconMenu = document.querySelector ('.menu-icon');
const nav = document.querySelector ('.nav');
const navLink = document.querySelectorAll ('.nav-link');
const shadow = document.querySelector ('.shadow');
if (iconMenu) {
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('lock');
        iconMenu.classList.toggle('active');
        nav.classList.toggle('active');
        shadow.classList.toggle('active');
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