var elementi = [];
function click_aggiungi(){
    let testo_input = document.getElementById("input-elemento").value;
    elementi.push(testo_input);
    let nuovo_li = document.createElement("li");
    // <li> </li>
    nuovo_li.innerHTML = testo_input;
    // <li> ... testo_input ... </li>
    nuovo_li.className = "list-group-item d-flex justify-content-between";
    let bottone_cancella = document.createElement("button");
    bottone_cancella.className = "btn btn-outline-danger btn-sm";
    bottone_cancella.innerHTML = "-";
    bottone_cancella.setAttributeNode(document.createAttribute("type", "button"))
    nuovo_li.appendChild(bottone_cancella);
    document.getElementById("lista").appendChild(nuovo_li);
    
}
//<button type="button" class="btn btn-outline-danger">-</button>
