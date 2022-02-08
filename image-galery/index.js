const url = 'https://api.unsplash.com/search/photos?query=cats&per_page=30&orientation=landscape&client_id=04ufwLfYkUW_uO9OlQOojuE9hQFxR0veEPagGYh0VGA'
async function getData () {
    const res = await fetch(url);
    const data = await res.json();
    const mainContainer = document.querySelector('.main-container');
const img = document.createElement('img');
img.classList.add('gallery-img');
img.src = `${data.results[0].urls.regular}`;
img.alt = 'image';
mainContainer.append(img);
    console.log(data.results[0].urls.regular);
}
getData();

// const mainContainer = document.querySelector('.main-container');
// const img = document.createElement('img');
// img.classList.add('gallery-img');
// img.src = `${data.results[0].urls.regular}`;
// img.alt = 'image';
// mainContainer.append(img);