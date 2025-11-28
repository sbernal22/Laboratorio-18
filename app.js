import multiplicar, { dividir } from "./multiplicacionDivision.js";
import { sumar, restar } from "./sumaResta.js";
console.log(multiplicar(10, 3));
console.log(sumar(2, 3));
console.log(restar(8, 4));
try{
    console.log(dividir(67, 0));
}
catch(e){
    console.log("Error:", e.message);
}