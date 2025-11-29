const regex=/[.!?]/;
const texto = "Hola. Cómo estás? Bien!";
const oraciones = texto.split(regex);
console.log(oraciones);