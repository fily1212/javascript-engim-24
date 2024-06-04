/*<div class="card col-6 col-md-3">
                <h1>Nome</h1>
                <p>username</p>
                <p>email@emai.com</p>
            </div> */ 
function creaCard(nome, username, email){
    let card = document.createElement("div");
    card.className = "card col-6 col-md-3";
    let h1 = document.createElement("h1");
    h1.innerHTML = nome;
    let p1 = document.createElement("p");
    p1.innerHTML = username;
    let p2 = document.createElement("p");
    p2.innerHTML = email;
    card.appendChild(h1);
    card.appendChild(p1);
    card.appendChild(p2);
    document.getElementById("lista").appendChild(card); 
}

/*https://jsonplaceholder.typicode.com/users*/

fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(json=>{
       for(utente of json)
           creaCard(utente.name, utente.username, utente.email);
       
   });