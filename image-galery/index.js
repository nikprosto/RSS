let randomPage = getRandomArbitrary (1, 334);
const url = `https://api.unsplash.com/photos?page=${randomPage}&per_page=30&client_id=04ufwLfYkUW_uO9OlQOojuE9hQFxR0veEPagGYh0VGA`;
const main = document.querySelector('main');
const form = document.querySelector('.form');
const search = document.querySelector('.search');

// generate random page number
function getRandomArbitrary(min, max) {
    pageNumber = Math.random() * (max - min) + min;
    return Math.round(pageNumber);
}

// receive data from API
function getData() {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
          //showData(data.results) if url is a search
          showData(data);
          openPhoto();
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

        const img = document.createElement('img');
        img.classList.add('photo');
        img.src = urls.regular;
        img.alt = alt_description;
        div.appendChild(img);
    });
}

// call main function
getData();

// search
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = search.value;
    const searchURL = `https://api.unsplash.com/search/photos?page=1&query=${searchTerm}&per_page=30&client_id=04ufwLfYkUW_uO9OlQOojuE9hQFxR0veEPagGYh0VGA`
    if (searchTerm) {
        fetch(searchURL)
        .then((res) => res.json())
        .then((data) => {
            const searchURLmodified = `https://api.unsplash.com/search/photos?page=${getRandomArbitrary(1, data.total_pages)}&query=${searchTerm}&per_page=30&client_id=04ufwLfYkUW_uO9OlQOojuE9hQFxR0veEPagGYh0VGA`
            fetch(searchURLmodified)
            .then((res) => res.json())
            .then((data) => {
                showData(data.results);
                openPhoto();
            })           
        });
    }
})

// open large picture
function openPhoto() {
    const photos = document.querySelectorAll('.photo');
    let photoSrc;
    photos.forEach((photo) => {
        photo.addEventListener('click', (e) => {
            photoSrc = e.target.src;
            photoModal (photoSrc);
        })
    })

    //create modal window
    let photoModal = (src) => {
        const modalDiv = document.createElement('div');
        modalDiv.classList.add('modal-div');
        main.append(modalDiv);
        //put photo into modal window
        const fullPhoto = document.createElement('img');
        fullPhoto.setAttribute('src', src);
        modalDiv.append(fullPhoto);
        //create close button
        const closeBtn = document.createElement("i");
        closeBtn.setAttribute("class", "fas fa-times close-button");
        //close modal window
        closeBtn.addEventListener('click', (e) => {
            modalDiv.remove();
        })
        modalDiv.addEventListener('click', (e) => {
            modalDiv.remove();
        })          
        modalDiv.append(fullPhoto, closeBtn);
    }
}