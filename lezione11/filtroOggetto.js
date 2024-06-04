let persone = [
{"nome": "Alyssa", "colore" : "green"},
{"nome": "Gianni", "colore" : "red"}, 
{"nome": "Giacomo", "colore" : "yellow"}, 
{"nome": "Claudio", "colore" : "purple"}, 
{"nome": "Grey", "colore" : "yellow"}, 
{"nome": "Filippo", "colore" : "orange"}
];

let personeDaVisualizzare = [];
for(persona of persone){
    personeDaVisualizzare.push(persona);
}

mostraPersone();

function mostraPersone(){
    let contenitore = document.getElementById("contenitore-card");
    contenitore.innerHTML = ""; 

    for(persona of personeDaVisualizzare){
        let h5 = document.createElement("h5");
        h5.innerHTML=persona.nome;
        h5.style.color = persona.colore;
        h5.className="card-title";
        let card = document.createElement("div");
        card.className = "card";
        card.appendChild(h5);
        contenitore.appendChild(card);
    }

}

function filtro(){
    let iniziale = document.getElementById("inizialeText").value;
    personeDaVisualizzare = [];
    for(persona of persone){
        if(persona.nome.toLowerCase().startsWith(iniziale.toLowerCase()))
            personeDaVisualizzare.push(persona);
    }

    personeDaVisualizzare = persone.filter((persona)=>{
       return persona.nome.toLowerCase().startsWith(iniziale.toLowerCase()); 
    });
    mostraPersone();
}

function inizia(persona){
    let iniziale = document.getElementById("inizialeText").value;
    
    return persona.nome.toLowerCase().startsWith(iniziale.toLowerCase());   
}
