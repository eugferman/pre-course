//.LENGTH - nos cuenta los carácteres que tiene el string nombreCompleto.
var nombreCompleto = 'Eugenio Fernandez Manrubia';
var carTotal = nombreCompleto.length;
console.log(carTotal);

//.INDEXOF - nos devuelve el número del caracter de la primera letra de la coincidencia que queremos buscar, si no encuentra nada nos devuelve -1, se le puede pasar como
// parámetro un número, el número indicará a partir de que carácter empezará a buscar y a partir de ahí nos dará la posición de la coincidencia.
var localizarString = "En la calle hay ocho bancos en la acera.";
var localizacion = localizarString.indexOf("la", 10); 
console.log(localizacion);

//LASTINDEXOF - nos devuelve la posición de la última coincidencia posible en la frase que queremos buscar, si no encuentra nada nos devuelve -1
var localizarStringFinal = "En mi calle hay ocho bancos y ocho sillas en la acera."
var localizacionFinal = localizarStringFinal.lastIndexOf("hola");
console.log(localizacionFinal);

//.SEARCH - nos devuelve la posición de la string que le pasamos a search, si lo que le pasamos no está, nos devuelve -1.
var variableSearch = ("En el pueblo que vivo hay 'muchos' bares.");
var variableSearcheadora = variableSearch.search("hay");
console.log (variableSearcheadora);

//.SLIDE - le pasamos 2 valores, inicio y final, y nos extrae lo que haya entre esos dos valores, si le pasamos valores negativos nos empieza a contar por el final.
var direccion = "calle major número 25 4to 1ra.";
var extraccion = direccion.slice(6, 11);
var extraccionNegativa = direccion.slice(-18, -12);
var extraccion2 = direccion.slice(6); //si se le da un solo número, usa ese número como punto inicial hasta el final.

//.SUBSTRING - es igual que el .slide lo que no acepta números negativos.
var variable1 = "Me llamo Eugenio y vivo en Parets del Vallés, y mi padre se llama Eugenio."
var variableExt = variable1.substring(9, 16);

//.SUBSTR - es como el slide pero el segundo número indica la longitud que queremos extraer, parámetro 1 indica el inicio y parámetro 2 la longitud. Si se omite el segundo
// parámetro nos contará hasta el final del string, si el primer parámetro es negativo empezará a contar desde el final del string.
var varSubstr = variable1.substr(9, 7);

//.REPLACE - reemplaza palabras, si no respetamos mayúsculas y minúsculas no ejecutará el replace, si queremos poner mayúsculas hay que poner la primera palabra
// entre barras y una i por ejemplo: /EUGENIO/i, así si que omitiría el case sensitive, si no hay que respetar 100% minúsculas y mayúsculas.
// si ponemos el nombre exacto por ejemplo: /Eugenio/g la g nos substituirá todo en caso de que haya mas de una palabra igual en el mismo texto
var reemplazar = variable1.replace(/Eugenio/g, "Alberto");

//TOUPPERCASE - convierte la string a mayúscula.
var miNombre = "Eugenio";
var transformUpper = miNombre.toLocaleUpperCase(); 

//TOLOWERCASE - convierte la string a minúscula.
var transformLower = miNombre.toLowerCase();

//CONCAT - Nos une dos variables string. Tener en cuenta el primer parámetro que le damos a concat que será lo que ponga entre las dos variables.
var miApellido = "Fernandez";
var nombreConcatenado = miNombre.concat(" ", miApellido);

//TRIM - Elimina cualquier espacio en blanco que haya a la izquierda o derecha de la string.
var frase = "         hola que tal         ";
var fraseSinEspacios = frase.trim();

//CHARAT - nos devuelve el carácter que le indiquemos.
var caracterExtraido = miNombre.charAt(0);

//CHARCODEAT - Es igual que charat lo que nos dará el valor en UTF-16 CODE.
var caracterUtf = miNombre.charCodeAt(0);

//[] - como si fuésemos a buscar una posición en una Array, también funcionaría en una string, pero no podemos machacar una letra encima de la otra.
var caracterCorchete = miNombre[5];

//SPLIT - convierte una string en una array. El parámetro que le damos a split sería la separación para que vaya cogiendo los valores para la array, ver ejemplo abajo. 
var nombreEntero = "Eugenio Fernandez Manrubia"
var arr = nombreEntero.split(" ");

console.log(extraccion);
console.log(extraccionNegativa);
console.log(extraccion2);
console.log(variableExt);
console.log(varSubstr);
console.log(reemplazar);
console.log(transformUpper);
console.log(transformLower);
console.log(nombreConcatenado);
console.log(frase);
console.log(fraseSinEspacios);
console.log(caracterExtraido);
console.log(caracterUtf);
console.log(caracterCorchete);
console.log(arr);





