
var bombo = [1,2,3,4,5];
var carton = [1,2,3,4,5];

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

function consultarCarton(){
    var bola = sacarBola();
    if(carton.every(consultarLinea) === true){
        return "LINEA!!!";
    }else{
        for(var x = 0; x < carton.length; x++){
            if(carton[x] === bola){
                console.log("Número de bola: "+bola);
                eliminarBola(bombo, bola);
                carton[x] = "X";
                return "Bien!! ya me queda un número menos!!";
            }
        }
            
    }
}



console.log(consultarCarton());
console.log(consultarCarton());
console.log(consultarCarton());
console.log(consultarCarton());
console.log(consultarCarton());
console.log(consultarCarton());





