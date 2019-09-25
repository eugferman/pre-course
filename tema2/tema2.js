//EJERCICIOS DE STRINGS
var nombre = "Eugenio Fernandez";
var contador = nombre.length;//NOS DA LA LONGITUD DEL STRING
var inicioAp = nombre.indexOf("F");//NOS BUSCA LA POSICIÓN DE LA LETRA QUE LE PASAMOS.
var soloNom = nombre.slice(0,7);//LE PASAMOS DOS VALORES QUE SON LAS POSICIONES DEL STRING QUE NOS EXTRAERÁ.
var soloAp = nombre.slice(8,17);//SACAMOS EL APELLIDO SOLO
var union = soloNom+soloAp;//UNIMOS DOS VARIABLES EN UNA
var reemplazo = union.replace(/Eugenio/g,"Mr ");
var mayus = soloAp.toLocaleUpperCase();
var union2 = nombre+" quiere ser programador :)";
var inicialN = nombre.charAt(0);
var inicialA = nombre.charAt(8);
var iniciales = inicialN+"."+inicialA;
/*console.log(contador);
console.log(inicioAp);
console.log(soloNom);
console.log(soloAp);
console.log(union);
console.log(reemplazo);
console.log(mayus);
console.log(union2);
console.log(iniciales);*/

//EJERCICIOS DE ARRAY
var name = "Eugenio Fernandez"
var arrayNom = name.split("");//DIVIDIMOS LA VARIABLE NOMBRE EN UNA ARRAY, SE SEPARA POR EL ESPACIO QUE SE LE INDICA ENTRE PARENTESIS
console.log(arrayNom);
var miApellido = arrayNom[8]+"|"+arrayNom[9]+"|"+arrayNom[10]+"|"+arrayNom[11]+"|"+arrayNom[12]+"|"+arrayNom[13]+"|"+arrayNom[14]+"|"+arrayNom[15]+"|"+arrayNom[16];
console.log(miApellido);
//CON UN FOR RECORREMOS LA ARRAY PARA IMPRIMIR MI NOMBRE
for(var x = 0; x < 7; x++){
    console.log(x+" "+arrayNom[x]);
}
//CON OTRO FOR RECORREMOS LA ARRAY PARA IMPRIMIR MI APELLIDO
for(var y = 8; y < 17; y++){
    console.log(y+" "+arrayNom[y]);
}

//SACO POR PANTALLA LAS INICIALES DE MI NOMBRE Y APELLIDO
var inicialesEF = arrayNom[0]+"."+arrayNom[8];
console.log(inicialesEF);

arrayNom[0] = "Eugenio";
arrayNom[1] = "Fernandez";
console.log(arrayNom);
arrayNom.splice(2,15);
console.log(arrayNom);
arrayNom.push(31);
console.log("Me llamo "+arrayNom[0]+" y tengo "+arrayNom[2]+" años.");
function addCiudad(ciudad){
    arrayNom.push(ciudad);
    return "Hemos añadido "+ciudad;
    
}
console.log(addCiudad("Barcelona"));
console.log(arrayNom);
function delCiudad(){
    var ciuElimi = arrayNom.pop();
    return "Hemos eliminado "+ciuElimi;
}
console.log(delCiudad());
console.log(arrayNom);
arrayNom.shift();
console.log(arrayNom);
arrayNom.unshift("Eugenio");
console.log(arrayNom);

var arrayNum = [1,2,3,4,5,6,7,8,9,10]
var multByTwo = arrayNum.map(function(x) {
    return x * 2;
});
console.log(multByTwo);

var num = 5; // cada número se multiplicará por 3 o el número que le pasemos
function multByNum(num){
    var arrayMult = arrayNum.map(function(x) {
        return x * num;
    })
    arrayMult.sort(function(a,b){return b-a});
    return arrayMult
}
console.log(multByNum(num));

//EJERCICIOS DE NUM

var horaNum = 10.50 ;
var horaStg = horaNum.toString(); //convertimos la variable horaNum a string. 
console.log(horaNum+" "+horaStg);
var numRed = horaNum.toFixed(0); //quitamos los decimales a la variable.
console.log(numRed);
var numRed2 = Math.round(horaNum); //redondeamos la variable
console.log(numRed2);
var a = 44;
var b = 24;
var sum = a + b;
var rest = a - b;
var mult = a * b;
var div = a / b;
console.log("A es igual a ="+a+", B es igual a = "+b);
console.log("Suma: "+sum+", Resta: "+rest+", Multiplicación: "+mult+", División: "+div);
console.log("Multiplicamos un num con un string: "+a*"hola");//al no poder operar con un string y un num nos da error.
//mediante un if vamos a sumar variables del mismo tipo y distinto tipo y vemos que ocurre.
var c = 10;
var d = "5";
if(typeof c !== typeof d){
console.log("No se puede hacer esta operación.");
}else{
    console.log(c+d);
}




