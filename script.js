window.onload = function() {
    console.log("js conectado");
}
window.onload = function() {

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    function dibujar() {
        console.log("canvas listo");
    }

}
function plot(x, y) {
    ctx.fillRect(x * 20, y * 20, 20, 20);
}