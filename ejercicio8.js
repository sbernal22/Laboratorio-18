const boton= document.getElementById("boton");
const contenedor=document.getElementById("contenedor");
boton.addEventListener("click", async function cargarUsuario(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users/2");
        const usuario = await response.json();
        contenedor.textContent=usuario.name+" - ";
        contenedor.textContent+=usuario.email+" - ";
        contenedor.textContent+=usuario.address.city;
    }
    catch (error){
        console.error("Error:", error);
    }
})