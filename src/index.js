const homePage = require("./homePage");
const enCartelera = require("./enCartelera");
const masVotadas = require("./masVotadas")
const contacto = require("./contacto")
const preguntasFrecuentes = require("./preguntasFrecuentes")
const sucursales = require("./sucursales");

let index = {
    homePage: function(res){
        //titulo
        res.write(homePage.titulo)
        // cantidad de peliculas
        res.write("\n\nTotal de pelculas en cartelera: " + homePage.cantidad())
        //titulos de las peliculas ordenadas
        res.write(("\n\nLista de peliculas:\n").toUpperCase())
        res.write("----------------------\n")

        let titleMovies = homePage.listarPelis();
        titleMovies.forEach(function(title){
            res.write(title)
            res.write("\n")
        })

        res.write("\nRecordá que podés visitar las secciones:\n*En Cartelera\n*Más Votadas\n*Sucursales\n*Contaco\n*Preguntas Frecuetes\n")
        res.end("homePage")   
    },

    enCartelera: function(res){
        //titulo
        res.write(enCartelera.titulo)
        // cantidad de peliculas
        res.write("\n\nTotal de pelculas en cartelera: " + enCartelera.cantidad())
        //titulos de las peliculas ordenadas + reseña
        res.write(("\n\nListado de peliculas:\n").toUpperCase())

        let moviesOverview = enCartelera.listarPelis();
        moviesOverview.forEach(function(movie){
            res.write("\n" + movie.title + "\n")
            res.write("----------------------\n")
            res.write("Reseña: " + movie.overview + "\n")
        })

        res.end("enCartelera")
    },

    masVotadas: function(res){
        //titulo
        res.write(masVotadas.titulo)
        // cantidad de peliculas con ranking mayor a 7
        res.write("\n\nTotal de pelculas: " + masVotadas.cantidad())
        //titulos de las peliculas ordenadas + ranking y reseña
        res.write(("\n\nRating promedio: ").toUpperCase() + masVotadas.promedio().toFixed(2))
        let moviesRanking = masVotadas.listarPelis();
        moviesRanking.forEach(function(movie){
            res.write("\n" + movie.title + "\n")
            res.write("----------------------\n")
            res.write("Rating: " + movie.vote_average + "\n")
            res.write("Reseña: " + movie.overview + "\n")
        })

        res.end("masVotadas")
        
    },
    
    sucursales: function(res){
        //titulo
        res.write(sucursales.titulo)
        // cantidad de sucursales
        res.write("\n\nTotal de salas: " + sucursales.cantidad())
        //información de las sucursales
        res.write(("\n\nListado de salas:\n").toUpperCase())
        let theaters = sucursales.listarTheaters();
        theaters.forEach(function(theater){
            res.write("\n" + theater.name + "\n")
            res.write("----------------------\n")
            res.write(theater.address + "\n")
            res.write(theater.description + "\n")
        })

        res.end("sucursales")
        
    },

    contacto: function(res){
        //titulo
        res.write(contacto.titulo)
        // contenido
        res.write(contacto.Contenido)

        res.end("contacto")
        
    },
    
    preguntasFrecuentes: function(res){
            //titulo
            res.write(preguntasFrecuentes.titulo)
            // cantidad de preguntas
            res.write("\n\nTotal de preguntas: " + preguntasFrecuentes.cantidad())
            //Listado de preguntas
            res.write(("\n\nListado de preguntas:\n").toUpperCase())
            res.write("----------------------\n")
            let faqs = preguntasFrecuentes.listarPreguntas();
            faqs.forEach(function(preguntas){
                res.write("\n" + preguntas.faq_title + "\n")
                res.write("*" + preguntas.faq_answer + "\n")
                res.write("----------------------\n")
            })
    
            res.end("preguntasFrecuentes")
    }
    
}
module.exports = index