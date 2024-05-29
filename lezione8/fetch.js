var risposta = [{"line":"13","hour":"15:17:28","realtime":true},{"line":"13","hour":"15:23:50","realtime":false},{"line":"13","hour":"15:28:50","realtime":false},{"line":"13","hour":"15:38:50","realtime":true},{"line":"13","hour":"15:48:50","realtime":false},{"line":"13","hour":"15:58:20","realtime":true},{"line":"13","hour":"16:07:50","realtime":false},{"line":"13","hour":"16:17:50","realtime":false},{"line":"13","hour":"16:25:50","realtime":false},{"line":"13","hour":"16:32:50","realtime":false},{"line":"13","hour":"16:39:50","realtime":false},{"line":"13","hour":"16:47:50","realtime":false},{"line":"13","hour":"16:54:50","realtime":false},{"line":"13","hour":"17:01:50","realtime":false}];
function mostra(){/*
    let numeroFermata = document.getElementById("numeroFermata").value;
    fetch("http://gpa.madbob.org/query.php?stop="+numeroFermata)
        .then(response => {
      mostraOrario(response);
   })
   .catch(error => console.log("Si è verificato un errore!"));
*/
    mostraOrario(risposta);
}

function mostraOrario(passaggi){
    alert(passaggi)
    for(passaggio of passaggi){

    }

}

/*[{"line":"13","hour":"15:17:28","realtime":true},{"line":"13","hour":"15:23:50","realtime":false},{"line":"13","hour":"15:28:50","realtime":false},{"line":"13","hour":"15:38:50","realtime":true},{"line":"13","hour":"15:48:50","realtime":false},{"line":"13","hour":"15:58:20","realtime":true},{"line":"13","hour":"16:07:50","realtime":false},{"line":"13","hour":"16:17:50","realtime":false},{"line":"13","hour":"16:25:50","realtime":false},{"line":"13","hour":"16:32:50","realtime":false},{"line":"13","hour":"16:39:50","realtime":false},{"line":"13","hour":"16:47:50","realtime":false},{"line":"13","hour":"16:54:50","realtime":false},{"line":"13","hour":"17:01:50","realtime":false}] */