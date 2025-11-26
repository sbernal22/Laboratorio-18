async function cargarUsuarios(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const usuarios = await response.json();
        usuarios.forEach(usuario => {
            console.log(usuario.name);
        }); 
    }
    catch (error){
        console.error("Error:", error.message);
    }
}
cargarUsuarios();