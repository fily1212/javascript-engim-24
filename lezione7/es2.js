function evidenzia(){
    /*document.getElementById("lista").children.forEach(p => {
        p.classList.add("fw-bold");
    });*/
    for(let p of document.getElementById("lista").children){
        if(p.innerHTML==="Chiara")
        p.classList.add("fw-bold");
    }
}