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
//MOSTRAMOS LOS VUELOS QUE NO HACEN ESCALA
document.write("<br><b>MOSTRAMOS LOS VUELOS QUE NO HACEN ESCALA:</b><br>");
for(var x = 0; x < flights.length; x++){
    if(flights[x].scale == false){
    var origen = flights[x].from;
    var destino = flights[x].to;
    var coste = flights[x].cost;
    document.write("El vuelo con origen: "+origen+", y destino: "+ destino+" tiene un coste de: "+coste+" y no hace escala"+"<br>");
    }
}

//HACEMOS UNA MEDIA DEL COSTE DE LOS 11 VUELOS
document.write("<br><b>MOSTRAMOS EL COSTE MEDIO DE LOS VUELOS:</b><br>");
var media = flights[0].cost+flights[1].cost+flights[2].cost+flights[3].cost+flights[4].cost+flights[5].cost+flights[6].cost+flights[7].cost+flights[8].cost+flights[9].cost+flights[10].cost;
var calcMedia = media/11;
var calculo = Math.round(calcMedia);
document.write("El coste medio de todos los vuelos es de: "+calculo+" €."+"<br>");

//MOSTRAMOS LOS VUELOS QUE HACEN ESCALA
document.write("<br><b>MOSTRAMOS LOS VUELOS QUE HACEN ESCALA:</b><br>");
for(var x = 0; x < flights.length; x++){
    if(flights[x].scale !== false){
    var origen = flights[x].from;
    var destino = flights[x].to;
    var coste = flights[x].cost;
    document.write("El vuelo con origen: "+origen+", y destino: "+ destino+" tiene un coste de: "+coste+" y hace escala"+"<br>");
    }
}

//MOSTRAMOS LOS ÚLTIMOS 5 VUELOS DEL DÍA
document.write("<br><b>MOSTRAMOS LOS ÚLTIMOS VUELOS DEL DÍA:</b>"+"<br>");
var ultVuelos = flights.slice(6,11);
for(var x = 0; x < ultVuelos.length; x++){
    var origen = ultVuelos[x].from;
    var destino = ultVuelos[x].to;
    var coste = ultVuelos[x].cost;
    var escala = ultVuelos[x].scale;
    document.write("Éstos son los últimos vuelos del día con origen: "+origen+", y destino: "+ destino+" tiene un coste de: "+coste+", con escala: "+escala+"<br>");
    
}





