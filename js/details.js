
const movie = JSON.parse(localStorage.getItem("movieDetails"));
console.log(`Movie loaded: ${movie.id}, ${movie.title}, ${movie.synopsis}, ${movie.poster}`)

const ytUrl = `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=82dee234aef66950b6815f5e7f5c7ee8&language=en-US`
console.log("Youtube link: " + ytUrl);


fetch(ytUrl)
.then((response)=>{
    return response.json();
})
.then((jsonData)=> {
    const ytLinkArray = jsonData.results;
    const ytLink = "https://www.youtube.com/watch?v=" + ytLinkArray[0].key;
    console.log("Youtube url is: " + ytLink);
    document.querySelector("a").href = ytLink;
})
.catch((err)=>{
    console.log("Error: " + err);
});

document.querySelector("img").src = movie.poster;
document.querySelector("h3").innerText = movie.title;
document.querySelector("p").innerText = movie.synopsis;
document.querySelector("a").innerText = movie.title.toUpperCase() + " TRAILER";