// BOTONES
const boton1= document.getElementById("boton2");
boton1.addEventListener("click", borrarTodo);

// Función para cargar el contenido de la segunda página
function loadUser(url) {
    document.getElementById('userDetailFrame').src = url;
}
// Funcion que resetea el contenido del index
function borrarTodo(){
    document.getElementById('userDetailFrame').src = '';
}
