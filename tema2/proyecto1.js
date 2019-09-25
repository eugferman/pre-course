function calculadora(num1, num2){

var evaluar = "hola"; // creo una variable para el siguiente if

//a continuación evaluo si solo hay una rgumento y es de un tipo distinto a integer que me devuelva el valor al cuadrado, si no se cumple la regla pasamos al siguiente if.
if(arguments.length <= 1 && typeof(num1)!==typeof(evaluar)){ 
    
    return num1 * num1;

/* si no se ejecuta el primer if ejecutaremos lo siguiente, si los dos argumentos no son iguales, por ejemplo un string y un integer, nos devolverá el mensaje de error,
si no continuará con el else final.
*/    
}else{

    if(typeof(num1)!==typeof(num2)){
    
    return console.log("Lo sentimos, esta calculadora solo funciona con números no con carácteres, verifique los datos.")

//creamos una array e introducimos los valores de las operaciones con máximo 3 decimales y la presentamos de una forma legible para el usuario.
    }else{

        var datos = [];
        var suma = num1 + num2;
        var resta = num1 - num2;
        var multiplicacion = num1 * num2;
        var division = num1 / num2;
        
        datos[0] = Math.floor(suma * 1000) /1000;
        datos[1] = Math.floor(resta * 1000) /1000;
        datos[2] = Math.floor(multiplicacion * 1000) /1000;
        datos[3] = Math.floor(division * 1000) /1000;

        return num1+"+"+num2+"="+datos[0]+", "+num1+"-"+num2+"="+datos[1]+", "+num1+"*"+num2+"="+datos[2]+", "+num1+"/"+num2+"="+datos[3]; 
        }
    }   

}

console.log(calculadora(31, 31));

