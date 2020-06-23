const fs = require("fs");

let preguntasFrecuentes = {
    bd: "./data/faqs.json",
    titulo: "Preguntas Frecuentes",
    leerJSON: function(){
        let faqsJson = fs.readFileSync(this.bd, "utf-8");
        let faqs = JSON.parse(faqsJson);
        return faqs
    },
    cantidad: function(){
        return this.leerJSON().total_faqs
    },
    listarPreguntas: function(){
        let faqs = this.leerJSON();
        let preguntas = faqs.faqs
        return preguntas
    }
}
module.exports = preguntasFrecuentes