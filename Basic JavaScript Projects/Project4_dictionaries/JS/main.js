function my_Dictionary()  {
    var movie = {
        Title:"The Avengers",
        Genre: "Drama",
        Producer: "John Aria",
        Rating: "X rated",
     };
     delete movie.producere; // this will remove  the producer KVP
     document.getElementById("Dictionary"). innerHTML =movie.producer;
}