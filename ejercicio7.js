const boton= document.getElementById("boton");
const contenedor=document.getElementById("contenedor");
boton.addEventListener("click", ()=>{
    fetch("https://jsonplaceholder.typicode.com/users/2")
    .then(response=>response.json())
    .then(usuario=>{
        contenedor.textContent=usuario.name+" - ";
        contenedor.textContent+=usuario.email+" - ";
        contenedor.textContent+=usuario.address.city;
    })
    .catch(error=>{
        console.error("Error:", error.message);
    });
})
