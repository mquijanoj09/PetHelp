window.onload = function () {
// Tiempo en milisegundos (por ejemplo, 5000 ms = 5 segundos)
    const tiempo = 5000;

// URL a la que quieres redirigir
    const url = "./user-login.html";

// Usamos setTimeout para esperar el tiempo especificado antes de redirigir
    setTimeout(() => {
        window.location.href = url;
    }, tiempo);

}