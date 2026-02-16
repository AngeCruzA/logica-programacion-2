
let celsius = Number (prompt ("Ingresa grados Celsius: "));
//console.log (typeof celsius);

if (typeof celsius === Number){
    console.log ("Entrada: " +celsius+ " grados Celsius")

let kelvin = celsius + 273.15;
let fahrenheit = (celsius * 1.8) + 32; 

console.log ("Conversión de grados");
console.log ("Salida grados Kelvin: " +kelvin);
console.log ("Salida grados Fahrenheit: " +fahrenheit);
} 
// else {
    // throw new Error ('Entrada incorrecta. Ingrese un número:');    
//}


