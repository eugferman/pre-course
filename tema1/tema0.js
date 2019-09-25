//CREAMOS UNA VARIABLE CON NUESTRO NOMBRE
var nombre = "Eugenio";
console.log(nombre);

//CREAMOS UNA VARIABLE CON NUESTRA EDAD
var edad = 31;
console.log(edad);

//CREAMOS UNA ARRAY
var persona = ["Eugenio", "Fernandez", 31];
console.log(persona);

//RECORREMOS TODAS LAS POSICIONES DE LA ARRAY CON UN BUCLE FOR
for(var x=0;x<persona.length;x++){

    console.log(persona[x]);

}

//CREAMOS UN OBJETO CON NUESTROS DATOS DENTRO
var coche = {
    marca : "Seat",
    modelo : "Leon",
    cavallos : 184
}
console.log("Marca: "+coche.marca+", Modelo: "+coche.modelo+", Cavallos: "+coche.cavallos);

//CREAMOS UN FLUJO CON IF
var a = 100;
var b = 100;
if(a < b){

    console.log("A es menor que B.");

}else{
    console.log("A es igual o mayor que B.");
}

//CREAMOS UN FLUJO CON IF ELSE
if(a < b){
    console.log("A es menor que B.");
}else if(a = b){
    console.log("A es igual a B.");
}else{
    console.log("A es mayor que B.");
}

//CREAMOS UNA ARRAY Y LA RECORREMOS, INDICAMOS QUE CUANDO LLEGUEMOS A LA MITAD DE LA ARRAY NOS LANCE UN MENSAJE.
var contador = [1,2,3,4,5]
console.log(contador.length);
for(var s = 0; s < contador.length; s++){  
    if(s == 3){
        console.log("Hemos llegado a la mitad del contador.");
    }   
}

//HACEMOS UNA VALIDACIÓN DE NOMBRE O EDAD EN UN IF
if(nombre === "Eugenio" || edad ===31){
    console.log("Acceso condedido");
}else{
    console.log("Acceso denegado.");
}

//BUSCAMOS UN DATO EN UNA ARRAY Y LO IMPRIMOS CUANDO LO ENCUENTRE
var cena = ["Eugenio", "Alberto", "Mama", "Papa", "Patri", "Enzo", "Markel"]
for(var c = 0; c < cena.length; c++){
    if(cena[2] == cena[c]){
        console.log("La mama viene a la cena.");
    }
}

//IMPRIMIMOS TODAS LAS POSICIONES DE LA ARRAY
for (var r = 0; r < cena.length; r++){
    console.log(cena[r]);
}

