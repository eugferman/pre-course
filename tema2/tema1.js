//CREAMOS UNA FUNCIÓN Y LE PASAMOS LOS ARGUMENTOS PARA QUE NOS DEVUELVA LA INFORMACIÓN.
var nom = "Alberto";
var ed = 31;
function saludo(nombre, edad){
    return "Me llamo "+nombre+" y tengo "+edad+" años.";
}
console.log(saludo(nom,ed));

//ASIGNAMOS A UNA VARIABLE LA FUNCIÓN Y LA IMPRIMIMOS
var miFuncion = saludo(nom,ed);
console.log(miFuncion);

//CONCATENAMOS RESULTADOS DE FUNCIONES
function obtenerNombre(nom){
    return nom;
    
}
console.log(obtenerNombre(nom));
function obtenerEdad(ed){
    return ed;
}
function obtenerNum(){
    var valor = Math.random();
    return valor;

}
console.log(obtenerNombre(nom)+obtenerEdad(ed));
var name = obtenerNombre(nom);
console.log("hola "+name);
//EN LA FUNCIÓN VEHICULO RECOGEMOS DATOS DE LAS FUNCIONES DE ARRIBA Y LAS UTILIZAMOS DENTRO DE LA FUNCION PADRE, EVALUAMOS QUE SI NO ERES EUGENIO NO SIGUE LA FUNCIÓN.
function persona(){
    var name = obtenerNombre(nom);
    if("Eugenio" == name){
    var age = obtenerEdad(obtenerNum());
    return name+" y mi edad es: "+age;
    }else{
    return "Usted no es Eugenio."
    }
    
}
console.log(persona());








