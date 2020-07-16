const nowPlayingEndPoint = "https://api.themoviedb.org/3/movie/now_playing?api_key=82dee234aef66950b6815f5e7f5c7ee8";

let moviePosters = [];
let movieTitles = [];
let movieSysnopses = [];
let movieIDs = [];

fetch(nowPlayingEndPoint)
.then((response)=>{
    return response.json();
})
.then((moviesJSON) => {
    let movies = moviesJSON.results;
    let container = document.querySelector(".container");
    container.innerHTML = "";
    for (let i = 0; i < movies.length; i++) {
        let movieTitle = movies[i].title;
        console.log(`Movie name: ${movieTitle}`);

        

        let synopsis = movies[i].overview;
        let poster = `https://image.tmdb.org/t/p/w185_and_h278_bestv2${movies[i].poster_path}`

        movieTitles.push(movieTitle);
        movieSysnopses.push(synopsis);
        moviePosters.push(poster);
        movieIDs.push(movies[i].id);

        if(synopsis.length > 150) {
            synopsis = synopsis.substring(0, 150) + ".....";
        }

        container.innerHTML += `<div class="movie" id="${i}"> \ 
                                <img src="${poster}" id="img-${i}" \
                                alt="${movieTitle} poster">\
                                <div class="movie-text" id="div-${i}">\
                                <h3 id="h3-${i}">${movieTitle}</h3>\
                                <p id="p-${i}">${synopsis}</p>\
                                </div>\
                                </div>`;
    }

})
.catch((err)=>{
    console.log("Error: " + err);
});

document.querySelector(".container").addEventListener("click", (event) => {
    const element = event.target;
    
    const dashIdx = element.id.indexOf("-");
    const arrayIndex = parseInt(element.id.substring(dashIdx+1));


    console.log("Movie clicked index: " + arrayIndex)

    const saveInfo = {"id": movieIDs[arrayIndex], "title": movieTitles[arrayIndex], "poster": moviePosters[arrayIndex], "synopsis": movieSysnopses[arrayIndex]};
    console.log(`info to save: ${saveInfo.id}, ${saveInfo.title}, ${saveInfo.poster}, ${saveInfo.synopsis}`);

    localStorage.setItem("movieDetails", JSON.stringify(saveInfo));

    document.location.href = "html/movieDetails.html";
});