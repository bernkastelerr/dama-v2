function atualizarHorario() {
    var url = "http://localhost/damav2/horario"
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://localhost/damav2/horario.php", true)
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 3) {
            console.log("Carregando conteudo");
        }

        if(xhr.readyState == 4) {
            var horario = document.getElementById("horario");
            horario.innerHTML = xhr.responseText;
        }
    }

    xhr.send(null);
}

setInterval(() => {
    atualizarHorario()
}, 1000);