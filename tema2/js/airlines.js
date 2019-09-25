saludoNombre = prompt("Bienvenido a EFM Airlines, cómo te llamas");
var flights = [
    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },
    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },
    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }
];
document.write("Bienvenido a EFM Airlines "+"<b>"+saludoNombre+"</b>"+"<br>");

//CREAMOS UNA FUNCIÓN EN LA CUAL LE PASAMOS POR ARGUMENTO UNA ARRAY Y UNA CONDICIÓN, DENTRO DE LA FUNCIÓN UTILIZAMOS EL MÉTODO .FILTER QUE NOS CREARÁ OTRA ARRAY NUEVA
//PERO CON LA CONDICIÓN YA APLICADA, EVALUAMOS SI HACE SCALE O NO (FALSE O TRUE)
function filterFlights(flightsToFilter, condition) {
    return flightsToFilter.filter(function(flight){
      return flight.scale === condition;
    })
}

//CREAMOS UNA FUNCIÓN QUE LE PASAMOS COMO ARGUMENTO UNA ARRAY PARA EVALUAR Y QUE NOS DIGA LOS ÚLTIMOS 5 VUELOS, O SEA LAS ÚLTIMAS 5 POSICIONES
function lastFligths(flightsToFilter) {
    return flightsToFilter.filter(function(flight){
      return flight.id > 5;
    })
}

//METEMOS LOS RESULTADOS DE LAS FUNCIONES EN UNA ARRAY PARA RECORRERLAS
var vuelosAFiltrarT = filterFlights(flights, true);
var vuelosAFiltrarF = filterFlights(flights, false);
var ultimosVuelos = lastFligths(flights);

//HACEMOS UNA FUNCIÓN PARA RECORRER LA ARRAY QUE LE PASEMOS POR ARGUMENTO
function printFlights(flightsToDisplay){
    for(var x = 0; x < flightsToDisplay.length; x++){
        document.write("Origen: "+flightsToDisplay[x].from+", destino: "+flightsToDisplay[x].to+", coste: "+flightsToDisplay[x].cost+" €.<br>");
    }

}

document.write("<br><b>VUELOS QUE HACEN ESCALA:</b><br>");
printFlights(vuelosAFiltrarT);
document.write("<br><b>VUELOS QUE NO HACEN ESCALA:</b><br>");
printFlights(vuelosAFiltrarF);
document.write("<br><b>ÚLTIMOS VUELOS:</b><br>");
printFlights(ultimosVuelos);

//HACEMOS UNA MEDIA DEL COSTE DE LOS 11 VUELOS CON UN FOR
document.write("<br><b>MOSTRAMOS EL COSTE MEDIO DE LOS VUELOS CON UN FOR:</b><br>");
var sumaTotal = 0;
    for(var x = 0; x < flights.length; x++){
       sumaTotal += flights[x].cost;
    };
var calculo = Math.round(sumaTotal/11);
document.write("El coste medio de todos los vuelos es de: "+calculo+" €."+"<br>");


//HACEMOS UNA MEDIA DEL COSTE DE LOS 11 VUELOS CON EL METODO .REDUCE()
document.write("<br><b>MOSTRAMOS EL COSTE MEDIO DE LOS VUELOS CON EL METODO .REDUCE():</b><br>");
var suma = flights.reduce(function(a, b){
  return {cost: a.cost + b.cost}
});
var calculoReduce = Math.round(suma.cost/11);
document.write("El coste medio de todos los vuelos es de: "+calculoReduce+" €."+"<br>");