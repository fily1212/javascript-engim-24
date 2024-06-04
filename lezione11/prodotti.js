/*Creare una pagina Prodotti.html 
che mostra in un div un elenco di card 
per il seguente oggetto:

let prodotti  = [ {"titolo": "Maglia", "prezzo": 25.00, "stelle": 4}, {"titolo": "Pantaloni", "prezzo": 21.00, "stelle": 3}, {"titolo": "T-shirt", "prezzo": 15.00, "stelle": 4.7}, {"titolo": "Felpa", "prezzo": 29.00, "stelle": 4.5}, {"titolo": "Giacca", "prezzo": 55.00, "stelle": 3.9} ] 

Aggiungere un form con tre campi 
(titolo, prezzo, stelle) e un pulsante 
Aggiungi che aggiunge una card nuova al fondo. */

let prodotti  = [ {"titolo": "Maglia", "prezzo": 25.00, "stelle": 4}, {"titolo": "Pantaloni", "prezzo": 21.00, "stelle": 3}, {"titolo": "T-shirt", "prezzo": 15.00, "stelle": 4.7}, {"titolo": "Felpa", "prezzo": 29.00, "stelle": 4.5}, {"titolo": "Giacca", "prezzo": 55.00, "stelle": 3.9} ] 

for(let prodotto of prodotti)
    creaCard(prodotto.titolo,prodotto.prezzo,prodotto.stelle);


/*  <div class="card col-6 col-md-3">
                <h1>Maglia</h1>
                <p>50,00€</p>
                <p>4.4 <img src="star.png" /></p>
            </div>  */

function creaCard(titolo, prezzo, stelle){
    let card = document.createElement("div");
    // Opzione 1
    card.className = "card col-6 col-md-3";
    // opzione 2
   /* card.classList.add("card");
    card.classList.add("col-6");
    card.classList.add("col-md-3");*/
    
    let h1 = document.createElement("h1");
    h1.innerHTML = titolo;
    let p1 = document.createElement("p");
    p1.innerHTML = prezzo + " €";
    let p2 = document.createElement("p");
    p2.innerHTML = stelle;
    let img = document.createElement("img");
    img.src="star.png";
    p2.appendChild(img);
    card.appendChild(h1);
    card.appendChild(p1);
    card.appendChild(p2);
    document.getElementById("lista").appendChild(card); 
}

function aggiungi(){
    creaCard(document.getElementById("titolo").value,
    document.getElementById("prezzo").value,
    document.getElementById("stelle").value);
}