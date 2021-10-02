var apiKey = "55fe3800";

document.querySelector("#submit-btn").addEventListener("click", function() {
    //capture user input
    var userInput = document.querySelector("#search").value;

    //generate Weather info
    //movie(userInput);
    currentMovie(userInput);
});

var currentMovie = function(Title) {
    fetch(`http://www.omdbapi.com/?t=${Title}&apikey=55fe3800`).then(function(res) {
        return res.json(res)
    }).then(function(data) {
        console.log(data);
    var template = `
    <div class = "text-center">
        <h1>${data.Title} ${data.Year}</h1>
        <img src = "${data.Poster}">
        <h5>${data.Rated}</h5>
        <h5>${data.Ratings[1].Value} Rotten Tomatoes</h5>
        <h5>${data.Plot}</h5>
    </div>

    `;

    document.querySelector(".current-movie").innerHTML = template;
    });
}