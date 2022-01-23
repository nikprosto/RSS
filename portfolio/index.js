const iconMenu = document.querySelector ('.menu-icon');
const nav = document.querySelector ('.nav');
if (iconMenu) {
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('lock');
        iconMenu.classList.toggle('active');
        nav.classList.toggle('active');
    }
    )
}

if (iconMenu.classList.contains('active')) {
    document.body.classList.remove('lock');
    iconMenu.classList.remove('active');
    nav.classList.remove('active');
}