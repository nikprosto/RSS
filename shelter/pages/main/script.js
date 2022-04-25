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

const petContainer = document.querySelector('.pet-card-container');
let cardsArray = [];
const arrowRight = document.querySelector('.arrow-right');

// json
const res = await fetch("../../assets/pets.json");
const pets = await res.json();



function randomNumbers(max) {
    function range(upTo) {
        var result = [];
        for(var i = 0; i < upTo; i++) result.push(i);
        return result;
    }
    function shuffle(o){
        for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    }
    var myArr = shuffle(range(max));
    return function() {
        return myArr.shift();
    };
}






if (window.screen.width >= 1113) {
    cardGenerator(8);
    arrowRight.addEventListener('click', (e) => {
        const petCard = document.querySelectorAll('.pet-card');
        petCard.forEach(petCard => petCard.remove());
        cardGenerator(8);
    });
}



function cardGenerator (n) {
    var randoms = randomNumbers(8),
        rand = randoms(),
        result = [];
    while (rand != null) {
        result.push(rand);
        rand = randoms();
    }
    console.log(result);
    //pet card generation
    for (let i = 0; i < n; i++) {
        // create pet card div
        let petCard = document.createElement('div');
        petCard.classList.add('pet-card');
        //create div for pet image
        let petCardImageDiv = document.createElement('div');
        petCardImageDiv.classList.add('pet-card-image');
        // create pet image
        let petImg = document.createElement('img');
        petImg.classList.add('pet-img');
        petImg.setAttribute('src', `${pets[result[i]].img}`);
        petImg.setAttribute('alt', `${pets[result[i]].name}`);
        // append pet image to its div
        petCardImageDiv.append(petImg);
        // append pet image div to pet card div
        petCard.append(petCardImageDiv);
        // create pet name
        let petName = document.createElement('p');
        petName.classList.add('pet-card-name');
        let petNametext = document.createTextNode(`${pets[result[i]].name}`);
        petName.append(petNametext);
        // append pet name to pet card div
        petCard.append(petName);
        // create div for button
        let buttonDiv = document.createElement('div');
        buttonDiv.classList.add('pet-card-button');
        // create button
        let button = document.createElement('button');
        button.classList.add('pet-button');
        button.setAttribute('name', 'pet');
        button.setAttribute('type', 'button');
        let buttonText = document.createTextNode('Learn more');
        button.append(buttonText);
        // append button to its div
        buttonDiv.append(button);
        // append button div to pet card div
        petCard.append(buttonDiv);
        if (i < 3) {
            petCard.classList.add('active');
        }
        // append all to pet card
        petContainer.append(petCard);
    }
}