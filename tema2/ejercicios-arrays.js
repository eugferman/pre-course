//TOSTRING - Método toString() nos convierte una array en una string separados por una coma.
var coches = ["Audi", "Mercedes", "Bmw", "Seat", "Volkswagen"]
var marcas = coches.toString();
console.log(coches,marcas);

//JOIN - Nos convierte la array a String y a parte nos coloca el carácter que le digamos entre cada elemento de la array.
var frutas = ["Plátanos", "Manzanas", "Peras"]
var frutass = frutas.join(" * ");
console.log(frutass);

//POP - Elimina el último elemento de la array.
console.log(frutas);
frutas.pop();
console.log(frutas);

//PUSH - Nos añade un elemento al final de la array.
console.log(frutas);
frutas.push("Mandarinas");
console.log(frutas);

//SHIFT - Elimina el primer elemento de la array, también podemos meter el elemento eliminado en una variable.
console.log(frutas);
var frutaEliminada = frutas.shift();
console.log(frutas);
console.log("La fruta eliminada ha sido: " + frutaEliminada);

//UNSHIFT - Añade un elemento en la primera posición de la array. También nos devuelve el número total de elementos de la array igual que el .length.
frutas.unshift("Sandía");
console.log(frutas.unshift())
console.log(frutas);

//Para modificar un elemento de la array se hace mediante las posiciones de los elementos. Colocamos melones en la posición 0.
console.log(frutas);
frutas[0] = "Melones";
console.log(frutas);
//Pedimos la longitud de la array, y en dicha posición añadimos kiwi. Como la longitud empieza por 1 pero los elementos empiezan por 0, nos añade el elemento al final.
frutas[frutas.length] = "Kiwi";
console.log(frutas);

//DELETE - Para eliminar una posición de una array usamos delete.
delete frutas[3]
console.log(frutas);

//SPLICE - Este método nos deja eliminar y añadir nuevos datos, el primer valor es para indicarle desde que posición queremos empezar, le decimos la posición 1,
// y el segundo valor es para indicarle la cantidad de elementos a eliminar, y a continuación los nuevos elementos a introducir en la array.
console.log(frutas);
frutas.splice(1, 1, "Fresas", "Aguacates");
console.log(frutas);

//SPLICE - también podemos utilizar este método para eliminar elementos de la array, indicamos desde que posición queremos iniciar y cuantos elementos queremos eliminar.
console.log(frutas);
frutas.splice(1, 1);
console.log(frutas);

//CONCAT - Podemos concatenar dos o más arrays, concat nunca nos modifica las arrays, simplemente crea una nueva uniendo varias, también puedes pasarle como argumento 
// variables directamente.
var nombres = ["Eugenio", "Alberto", "Carmen", "Enzo"]
var edades = [31, 34, 55, 7]
var apellidos = ["Fernandez", "Fernandez", "Manrubia", "Fernandez"]
var nomEdad = nombres.concat(edades, apellidos); //añadimos varias arrays.
var nomEdad2 = nombres.concat("Markel"); //añadimos variables directamente por argumentos.
console.log(nomEdad);
console.log(nomEdad2);

//SLICE - Nos hace una copia de la array, no nos modifica la array copiada, mediante parámetros le indicamos desde que posición en adelante queremos que copie, el primer
//valor le indicamos el punto de partida, y el segundo hasta donde queremos que copie, si solo ponemos un valor, ese valor será el punto de partida y copiará hasta el final.
console.log(frutas);
frutas.push("Ciruelas", "Pimientos");
var frutas2 = frutas.slice(1, 3);
console.log("Frutas: " + frutas);
console.log("Frutas 2: " + frutas2);

var response = prompt("This is a prompt message. Please, enter your name and press Ok, or press Cancel to skip that step.");

if (response !== null) {
    //code here
    console.log(response) //That console.log will print what user has introduced. If the input remained empty, it will be an empty string.
    //That code will be executed when user presses the OK button 
} else {
    //code here
    console.log(response) //That console.log will print null
    //That code will be executed when user presses the Cancel button
}
