//PEDIMOS EL NOMBRE DEL CONCURSANTE CON PROMPT Y LE DAMOS LA BIENVENIDA A NUESTRO BINGO
var saludoNombre = prompt("Bienvenido al Bingo EFM, cómo te llamas");
console.log("Bienvenido "+saludoNombre+" a nuestro Bingo EFM.");

//CREAMOS DOS ARRAYS, UNA DEL BOMBO PARA IR SACANDO BOLAS, OTRA DEL CARTON CON EL QUE JUGAREMOS
var bombo = [1,2,3,4,5];
var carton = [1,2,3,4,5];

//HACEMOS UNA FUNCIÓN PARA QUE CADA VEZ QUE LA LLAMEMOS NOS DÉ UN NÚMERO RANDOM DESDE 0
// HASTA LA LONGITUD DE LA ARRAY
function sacarBola(){

    var numBola = bombo[Math.floor(Math.random()*bombo.length+0)];
    return numBola;
}

//HACEMOS ESTA FUNCIÓN PARA LUEGO PODER EVALUAR TODAS LAS POSICIONES DE LA ARRAY CON EL EVERY
function consultarLinea(numero) {
    return numero === "X";
}

//HACEMOS ESTA FUNCIÓN PARA IR ELIMINANDO LAS BOLAS DEL BOMBO, LE PASAMOS COMO ARGUMENTOS UNA
//ARRAY QUE SERÁ EL BOMBO Y UN ITEM QUE SERÁ LA BOLA QUE SAQUEMOS ALEATORIAMENTE Y ASÍ HAREMOS
//QUE NO SALGA NINGUNA BOLA REPETIDA. UTILIZAMOS INDEXOF PARA QUE NOS DÉ LA POSICIÓN CUANDO COINCIDA
//LA BOLA CON LA POSICIÓN DEL BOMBO, Y LUEGO INDICAMOS QUE SOLO QUEREMOS ELIMINAR 1 POSICIÓN
function eliminarBola( arr, item ) {
    var i = arr.indexOf( item );
    arr.splice( i, 1 );
}

//HACEMOS UNA FUNCIÓN PARA CONSULTAR EL CARTÓN
function consultarCarton(){
    var bola = sacarBola();//SACAMOS NÚMERO ALEATORIAMENTE DEL BOMBO
    if(carton.every(consultarLinea)){//EN EL CASO DE QUE TODAS LAS LINEAS SEAN TRUE, SERÁ LINEA
        return "LINEA!!!";
    }else{
        //HACEMOS UN FOR PARA RECORRER EL CARTÓN, SI HAY UNA POSICIÓN EN LA ARRAY QUE SEA IGUAL A LA BOLA
        //CONTINUA LA SENTENCIA, ELIMINAREMOS LA BOLA DEL BOMBO, ASIGNAREMOS X A LA COINCIDENCIA ENTRE X Y BOLA
        //Y LLAMAREMOS AL MÉTODO NUEVO TURNO PARA VER SI QUEREMOS HACER OTRA TIRADA O DEJAR DE JUGAR.
        for(var x = 0; x < carton.length; x++){
            if(carton[x] === bola){
                console.log("Número de bola: "+bola);
                eliminarBola(bombo, bola);
                carton[x] = "X";
                console.log("Bien!! ya me queda un número menos!!");
                console.log("Cartón: "+carton);
                return bombo.length ? nuevoTurno() : console.log('Goodbye');
            }
        }
            
    }
}

//HACEMOS ESTA FUNCIÓN PARA CUANDO EVALUEMOS LA PRIMERA BOLA DIGAMOS SI QUEREMOS VOLVER A SACAR OTRA BOLA
//CON WINDOWS.CONFIRM SI SE ACEPTA SE EJECUTA LA SENTENCIA SINO, NO. SI SE EJECUTA VOLVEMOS A CONSULTARCARTON.
function nuevoTurno(){
    var nuevoTurno = window.confirm("Quieres sacar otra bola?");
    if(nuevoTurno){
        return consultarCarton();
    }else{
        return "Vuelva a nuestro bingo cuando quiera!";
    }
}

console.log(consultarCarton());
