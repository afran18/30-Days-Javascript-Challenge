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
})