const url = 'https://api.unsplash.com/search/photos?query=cats&per_page=30&orientation=landscape&client_id=04ufwLfYkUW_uO9OlQOojuE9hQFxR0veEPagGYh0VGA'
// get data from API
async function getData () {
    const res = await fetch(url);
    const data = await res.json();
    const mainContainer = document.querySelector('.main-container');
    // create img and insert it into main
    const img = document.createElement('img');
    img.classList.add('gallery-img');
    img.src = `${data.results[0].urls.regular}`;
    img.alt = 'image';
    mainContainer.append(img);
}

getData();
