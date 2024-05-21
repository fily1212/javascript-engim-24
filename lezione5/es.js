/*var giorniDellaSettimana = [
    "lun", "mar", "mer", "gio", "ven", "sab", "dom"
];
console.log(giorniDellaSettimana);
console.log(giorniDellaSettimana[0]);
giorniDellaSettimana[0] = "Lunedì";
console.log(giorniDellaSettimana);*/

var elementi = [];
function click_aggiungi(){
    let testo_input = document.getElementById("input-elemento").value;
    elementi.push(testo_input);
    let nuovo_li = document.createElement("li");
    // <li> </li>
    nuovo_li.innerHTML = testo_input;
    // <li> ... testo_input ... </li>
    nuovo_li.className = "list-group-item";
    document.getElementById("lista").appendChild(nuovo_li);
    
}