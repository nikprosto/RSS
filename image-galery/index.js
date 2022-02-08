const url = 'https://api.unsplash.com/search/photos?query=cats&per_page=30&orientation=landscape&client_id=04ufwLfYkUW_uO9OlQOojuE9hQFxR0veEPagGYh0VGA'
const main = document.querySelector('main');

function getData() {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        showData(data.results);
      });
  }

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

getData();