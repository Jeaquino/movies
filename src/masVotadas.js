const fs = require("fs");

let masVotadas = {
    bd: "./data/movies.json",
    titulo: "Más Votadas",
    
    leerJSON: function(){
        let moviesJson = fs.readFileSync(this.bd, "utf-8");
        let movies = JSON.parse(moviesJson);
        return movies
    },

    listarPelis: function(){
        let movies = this.leerJSON();
        let peliculasMasVotadas = movies.movies.filter(movie => movie.vote_average >=7)
        peliculasMasVotadas.sort(function(a,b){
            return ((a.title < b.title) ? -1 : ((a.title > b.title) ? 1 : 0));
        })    
        return peliculasMasVotadas
    },

    cantidad: function(){
        let peliculasMasVotadas = this.listarPelis()
        return peliculasMasVotadas.length
    },

    promedio:function(){
        let peliculasMasVotadas = this.listarPelis()
        let promedio = 0 
        peliculasMasVotadas.forEach(function(peli){
            promedio = promedio + peli.vote_average
        })
        promedio = promedio/this.cantidad()
        return promedio
    }

}
module.exports = masVotadas