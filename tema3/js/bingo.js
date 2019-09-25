var saludoNombre = prompt("Bienvenido al Bingo EFM, cómo te llamas");
console.log("Bienvenido "+saludoNombre+" a nuestro Bingo EFM.");

var bombo = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var carton = {
    linea1 : [1,2,3,4,5],
    linea2 : [6,7,8,9,10],
    linea3 : [11,12,13,14,15]
};

function sacarBola(){

    var numBola = bombo[Math.floor(Math.random()*bombo.length+0)];
    return numBola;
}

function consultarLinea(numero) {
    return numero === "X";
}


function eliminarBola( arr, item ) {
    var i = arr.indexOf( item );
    arr.splice( i, 1 );
}

function listarCarton(){
    return carton.linea1+","+carton.linea2+","+carton.linea3;
}

function verificarLinea(arr){
    if(arr.every(consultarLinea)){
        return "LINEA!!! Pero saca otra bola para completar el bingo!"
    }else{
        return "Saque otra bola."
    }
}

function consultarCarton(){
    var bola = sacarBola();
    for(var x = 0; x < 5; x++){

        if(carton.linea1[x] === bola){

            console.log("Número de bola: "+bola);
            eliminarBola(bombo, bola);
            carton.linea1[x] = "X";
            console.log("Cartón: "+listarCarton());
            console.log(verificarLinea(carton.linea1));
            return bombo.length ? nuevoTurno() : console.log('BINGO!!!');
            
        }else if(carton.linea2[x] === bola){

            console.log("Número de bola: "+bola);
            eliminarBola(bombo, bola);
            carton.linea2[x] = "X";
            console.log("Cartón: "+listarCarton());
            console.log(verificarLinea(carton.linea2));
            return bombo.length ? nuevoTurno() : console.log('BINGO!!!');

        }else if(carton.linea3[x] === bola){

            console.log("Número de bola: "+bola);
            eliminarBola(bombo, bola);
            carton.linea3[x] = "X";
            console.log(verificarLinea(carton.linea3));
            return bombo.length ? nuevoTurno() : console.log('BINGO!!!');
            
        }
    }
       
}

function nuevoTurno(){
    var nuevoTurno = window.confirm("Quieres sacar otra bola?");
    if(nuevoTurno){
        return consultarCarton();
    }else{
        return "Gracias por venir a Bingos EFM, vuelva a nuestro bingo cuando quiera!";
    }
}

console.log(consultarCarton());






