let randomPage = getRandomArbitrary (1, 334);
const url = `https://api.unsplash.com/search/photos?page=${randomPage}&query=cats&per_page=30&orientation=landscape&client_id=04ufwLfYkUW_uO9OlQOojuE9hQFxR0veEPagGYh0VGA`
const main = document.querySelector('main');
const form = document.querySelector('.form');
const search = document.querySelector('.search');

// generate random page number
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

// receive data from API
function getData() {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
    showData(data.results);
    });
}

// dispay pictures from API on the page
function showData(data) {
    main.innerHTML = '';
    data.forEach(photo => {
        const {urls, alt_description} = photo;
        
        const div = document.createElement('div');
        div.classList.add('div-photo');
        main.append(div);

        const modalDiv = document.createElement('div');
        modalDiv.classList.add('modal-div');
        main.append(modalDiv);

        const img = document.createElement('img');
        img.classList.add('photo');
        img.src = urls.small;
        img.alt = alt_description;
        div.appendChild(img);

        const modalImg = document.createElement('img');
        modalImg.classList.add('modal-img');
        modalImg.src = urls.regular;
        modalImg.alt = alt_description;
        modalDiv.appendChild(modalImg);
    });
}

// call main function
getData();

// search
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = search.value;
    const searchURL = `https://api.unsplash.com/search/photos?page=${randomPage}&query=${searchTerm}&per_page=30&orientation=landscape&client_id=04ufwLfYkUW_uO9OlQOojuE9hQFxR0veEPagGYh0VGA`
    if (searchTerm) {
        fetch(searchURL)
        .then((res) => res.json())
        .then((data) => {
        showData(data.results);
        });
    }
})