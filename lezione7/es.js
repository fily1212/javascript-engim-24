var nomi = ["Chiara", "Giorgia", "Valerio", "Santa", "Francesco"]
// cicli
/*while(CONDIZIONE){
    AZIONI... 
}*/
let i = 0;
listaDiv = document.getElementById("lista");
let p = document.createElement("p");
p.innerHTML = nomi[i];
listaDiv.appendChild(p);

while(i < 5){
    //alert(nomi[i]);
    i++;
}