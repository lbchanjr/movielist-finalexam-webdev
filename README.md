# movielist-finalexam-webdev
MADS4007 Web Development Fundamentals
Final Exam

PROBLEM DESCRIPTION
Notes for the Student : This Final Exam is designed to give you practical experience
experience in building Client Side web applications that consume Restful APIs
Background : You will need to have access to a code editor and have a thorough
understanding of HTML5, CSS3, Vanilla JavaScript, Event Driven programming, DOM
manipulation and REST APIs
Overview:
You have been contracted as a Front-End Web Developer by to build a two (2) page movie
website.
Your website does not have to look aesthetically pleasing, i.e, pretty. However, for the
website layout, you MUST use CSS grids and or Flexbox. Thus, you are not allowed to use
any free or paid templates, libraries and/or framework such as Bootstrap, Bulma etc. Failure
to follow the above-mentioned rules will result in a 0 grade being assigned.
Your website must consist of the following two web pages :
● A Latest movie page
● A Details movie page
Final Exam Website Demo:
Please watch this Video of me explaining the features and the required functionality of the
website.
Rules:
The Latest movie page must have the below section:
● Movie container section - For this section you must provide a list of movies in two
column grid format. The movies must be pulled from the Now Playing API created
by TheMovieDB. Each movie must have a title, movie synopsis, image and the date
the movie was released, similarly to the below image in Figure 1.1
2
Figure 1.1
The Latest Movie page must have the below functionality:
● Ensure that each movie poster is clickable and when the user clicks on a respective
poster, the user is navigated to another webpage, specifically the Movie details
page .
● The Movie details page MUST list the title, synopsis, released date, poster and the
trailer of the clicked movie . For Example, if the user clicked on the Greybound
poster then the user should be navigated to the Movie details page, detailing the
respective information for said movie.
● To obtain the endpoint for the above-mentioned API, navigate to the below URL :
https://developers.themoviedb.org/3/movies/get-now-playing
● Click the Try it out tab (which is located next to the Definition tab)
● See below for example Figure 1.2 :
3
Figure 1.2
● The endpoint for the Now Playing API is :
https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>&language=en-US&pag
e=1
● Replace <<api_key>> with your actual api key.
Below is a sample of the results expected from the above API :
4
● Please note, the poster_path key from the JSON results does not provide the base
path for the image, it just returns the name of the image. Thus, you must concatenate
the base path of the URL,i.e,
" https://image.tmdb.org/t/p/w185_and_h278_bestv2 " to the poster_path
for the image to be rendered.
The Movie Details Page functionality :
● Sample of a Movie Details page. Your page could look similar to the below Figure
1.2
Figure 1.3
● Ensure this page has the movie title, synopsis, released date and poster.
● You are also required to display a link to the trailer of the movie. To accomplish this,
you have to send a request to the “ Movie Videos ” API.
● To obtain the endpoint for the “Movie Videos” API, navigate to the URL below :
● https://developers.themoviedb.org/3/movies/get-movie-videos
● See below for example Figure 1.4
Figure 1.4
●
5
The endpoint for the Movie Videos API is :
https://api.themoviedb.org/3/movie/ {movie_id} /videos?api_key= <<api_key>> &langu
age=en-US
● As shown in the above, the Movie Videos API endpoint requires your API key and a
movie id. The movie id passed would be the movie id of the clicked movie on the
home page.
● Rember, every movie returned from the Now Playing API has a unique id, see below
Figure 1.5 (Now Playing API showing the id for each movie)
● The below endpoint will return all the Youtube trailers for movie 516486
● https://api.themoviedb.org/3/movie/516486/videos?api_key=yourAPIKey&lang
uage=en-US
● See expected results :
Figure 1.6
6
● Based on the above results , you would realize that the movie 516486
has multiple trailers. This will not be the case for every movie.
● You will only need to provide a link that will navigate the user to the
Youtube trailer of the clicked movie from the Movie Details page.
● Lastly, the key property that I highlighted in Figure 1.6 , is needed to
get the Youtube trailer video to be displayed.
● See a valid Youtube Trailer :
● https://www.youtube.com/watch?v= TcMBFSGVi1c
● TcMBFSGVi1c is an example of a key that would be “spat” out from
the API
