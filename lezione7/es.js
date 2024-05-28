var nomi = ["Chiara", "Giorgia", "Valerio", "Santa", "Francesco"]
// cicli
/*while(CONDIZIONE){
    AZIONI... 
}*/
let i = 0;
let listaDiv = document.getElementById("lista");

while(i < 5){
    let p = document.createElement("p");
    p.innerHTML = nomi[i];
    listaDiv.appendChild(p);
    //alert(nomi[i]);
    i++;
}

nomi.forEach(function(elem){
    let p = document.createElement("p");
    p.innerHTML = elem;
    listaDiv.appendChild(p);
});

nomi.forEach((elem)=>{
    let p = document.createElement("p");
    p.innerHTML = elem;
    listaDiv.appendChild(p);
});