//TOSTRING - convierte variables numéricas a string. Se puede transformar de varias formas.
var edad = 31;
var xstring = edad.toString();
var zstring = (200).toString();
var ystring = (100+45+87).toString();
console.log(xstring);
console.log(zstring);
console.log(ystring);

//TOEXPONENTIAL - le indicamos cuantos decimales queremos. Lo que nos devuelve es una string. Si no le pasamos parámetro, no nos redondea nada.
var decimales = 105.35684645;
var dosDecimales = decimales.toExponential(3);
var cincoDecimales = decimales.toExponential(5)
console.log(dosDecimales);
console.log(cincoDecimales);

//TOFIXED - nos devuelve en string el número con los decimales indicados y redondeado.
var dinero = 20.123456;
var dineroConDos = dinero.toFixed(2);
var dineroConCinco = dinero.toFixed(5);
console.log(dineroConDos);
console.log(dineroConCinco);

//TOPRECISION - nos devuelve el número en string con la longitud indicada.
var longitudTres = dinero.toPrecision(3);
var longitudSeis = dinero.toPrecision(6);
console.log(longitudTres);
console.log(longitudSeis);

//NUMBER, PARSEFLOAT, PARSEINT - Transforma los números dentro de strings en valores numéricos, son funciones similares
var numer = "10.50";
var numeroTransformado = Number(numer);
console.log(numeroTransformado);



