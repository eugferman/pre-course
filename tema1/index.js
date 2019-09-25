function calculadora(num1, num2){
//en caso de que pasemos un número como string, lo convertiremos a num.
num1 = Number(num1);
num2 = Number(num2);

//a continuación evaluo si solo hay una rgumento y es de un tipo distinto a integer que me devuelva el valor al cuadrado, si no se cumple la regla pasamos al siguiente if.
if(arguments.length <= 1 && typeof num1 === 'number' && Number.isNaN(num1)!==true){ 

    return num1 * num1;

}else{

    //evaluaremos el tipo de las variables.
    if(Number.isNaN(num1)||Number.isNaN(num2)){
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

console.log(calculadora("21", "ohla"));

