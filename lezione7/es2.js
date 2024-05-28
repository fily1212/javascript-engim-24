let persone = [{nome:"Chiara", cognome:"Foniciello"}, 
{nome:"Giorgia", cognome:"Sangiovanni"},
{nome:"Valerio", cognome:"Decaro"}
];

persone.forEach(persona=>{
    let p = document.createElement("p");
    p.innerHTML = persona.nome + " " + persona.cognome; 
    document.getElementById("lista").appendChild(p);
});


function evidenzia(){
    /*document.getElementById("lista").children.forEach(p => {
        p.classList.add("fw-bold");
    });*/
    for(let p of document.getElementById("lista").children){
        if(p.innerHTML==="Chiara")
        p.classList.add("fw-bold");
    }
}




let div = document.createElement("div");
let pnome = document.createElement("p");
pnome.innerHTML = persona.nome;
let pcognome = document.createElement("p");
pcognome.innerHTML = persona.cognome;
div.classList.add("card");
div.appendChild(pnome);
div.appendChild(pcognome);
