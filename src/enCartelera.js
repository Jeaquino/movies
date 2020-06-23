const fs = require("fs");

let enCartelera = {
    db: "./data/movies.json",
    titulo: "En cartelera",
    leerJSON: function(){
        let moviesJson = fs.readFileSync(this.db, "utf-8");
        let movies = JSON.parse(moviesJson);
        return movies
    },
    cantidad: function(){
        return this.leerJSON().total_movies
    },
    listarPelis: function(){
        let movies = this.leerJSON();
        let moviesEnCartelera = movies.movies
        moviesEnCartelera.sort(function(a,b){
            return ((a.title < b.title) ? -1 : ((a.title > b.title) ? 1 : 0));
        })
        return moviesEnCartelera
    }
}
module.exports = enCartelera