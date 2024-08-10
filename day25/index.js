// Activity 2: Fetching Movie Data
// Task 3: Use the fetch API to get movie data from a public movie API (e.g., OMDB API or The Movie Database API). Log the response data to the console.

let API_key = "71fc72ac"

const searchMovie = async (movie) => {
    try {
        let response = await fetch(`http://www.omdbapi.com/?t=${movie}&apikey=${API_key}`);
        let data = await response.json();
        console.log(data);

        let img = document.getElementById("poster");
        let title = document.getElementById("title");
        let release = document.getElementById("release");
        let rating = document.getElementById("rating");
        let plot = document.getElementById("plot");

        if (data.Poster == "N/A") {
            img.setAttribute('src', "./Images/movie.jpg")
        } else {
            img.setAttribute('src', data.Poster)
        }
        title.innerHTML = data.Title;
        release.innerHTML = `Realeased: ${data.Released}`;
        rating.innerHTML = `IMDB Ratings: ${data.imdbRating}`;
        plot.innerHTML = `<b>Plot:</b> ${data.Plot}`;

    } catch(err) {
        console.log("Movie search error:", err);
        
    }
}

searchMovie("Avengers");

document.getElementById("movie-search").addEventListener("submit", (e) => {
    e.preventDefault();
    let movie = document.getElementById("search").value;
    searchMovie(movie);
});


// Get modal elements
const modal = document.getElementById('modal');
const closeModal = document.getElementsByClassName('close')[0];

const openModal = (movie) => {
    let img = document.getElementById('modal-poster');
    img.setAttribute('src', movie.Poster)
    document.getElementById('modal-title').innerHTML = movie.Title;
    document.getElementById('modal-release').innerHTML = `Released: ${movie.Released}`;
    document.getElementById('modal-rating').innerHTML = `IMDB Ratings: ${movie.imdbRating}`;
    document.getElementById('modal-plot').innerHTML = `<b>Plot:</b> ${movie.Plot}`;
    document.getElementById('modal-director').innerHTML = `<b>Director:</b> ${movie.Director}`;
    document.getElementById('modal-actors').innerHTML = `<b>Actors:</b> ${movie.Actors}`;
    document.getElementById('modal-genre').innerHTML = `<b>Genre: </b>${movie.Genre}`
    modal.style.display = "flex";
}

closeModal.onclick = () => {
    modal.style.display = "none";
}

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Modify the "More Info" button to open the modal
document.getElementById('more-info').addEventListener('click', () => {
    let movieTitle = document.getElementById("title").innerText;
    fetchMovieDetails(movieTitle); // Function to fetch movie details
});

// Function to fetch detailed movie info
const fetchMovieDetails = async (movieTitle) => {
    try {
        let response = await fetch(`http://www.omdbapi.com/?t=${movieTitle}&apikey=${API_key}`);
        let data = await response.json();
        openModal(data);
    } catch (err) {
        console.log("Error fetching movie details:", err);
    }
}
