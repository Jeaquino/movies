const fs = require("fs");

let sucursales = {
    bd: "./data/theaters.json",
    titulo: "Nuestras salas.",
    leerJSON: function(){
        let theatersJson = fs.readFileSync(this.bd, "utf-8");
        let theaters = JSON.parse(theatersJson);
        return theaters
    },
    cantidad: function(){
        return this.leerJSON().total_theaters
    },
    listarTheaters: function(){
        let theaters = this.leerJSON();
        let listaTheaters = theaters.theaters
        return listaTheaters
    }
}
module.exports = sucursales