let index = require("./src/index")

let router = function(url,res){
switch(url){
    case "/":
        index.homePage(res)
        console.log("Home")
    case "/en-cartelera":
        index.enCartelera(res)
        console.log("En cartelera")
    case "/mas-votadas":
        index.masVotadas(res)
        console.log("Más votadas")
    case "/sucursales":
        index.sucursales(res)
        console.log("Sucursales")
    case "/contacto":
        index.contacto(res)
        console.log("Contacto")
    case "/preguntas-frecuentes":
        index.preguntasFrecuentes(res)
        console.log("Preguntas Frecuentes")
    default:
        res.end("404 pagina no encontrada")
    }   
}

module.exports = router