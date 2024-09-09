window.onload = function(){
    const urlParams = new URLSearchParams(window.location.search);
    const emergencia = urlParams.get("emergencia");
    const mascota = urlParams.get("mascota");

    const volver = document.getElementById("volver");

    volver.addEventListener("click", function() {
        window.location.href = './emergencies.html?tipo='+mascota
    })
}