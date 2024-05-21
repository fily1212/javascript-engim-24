var numero = 0;
document.getElementById("titolo").innerHTML = numero;

function incrementa(){
    if(numero < 10){
        numero++;
    }
    document.getElementById("titolo").innerHTML = numero;
}

function decrementa(){
    if(numero > 0){
        numero--;
    }
    document.getElementById("titolo").innerHTML = numero;
}

/*
if(CONDIZIONE){
    ISTRUZIONI CHE VOGLIAMO FARE SOLO SE 
    LA CONDIZIONE È VERA
}
*/



