var avenger = {
    fullname : "Tony",
    class: "XI",
    id: 1
}
function vengador(heroe){
    return heroe;
    }

//console.log(avenger);

function vengador2(heroe2){

    var prop1 = heroe2.fullname;
    var prop2 = heroe2.class;
    var prop3 = heroe2.id;
    
    return "Vengador: "+prop1+", "+prop2+", "+prop3;
    
}
    
//CAMBIAMOS EL VALOR DE UNA PROPIEDAD
avenger.class = "II";
    
//console.log(vengador2(avenger));
//console.log(avenger.class);
    
//ELIMINAMOS UNA PROPIEDAD
delete avenger.class;
//console.log(avenger.class);
    
//CREAMOS UNA PROPIEDAD
avenger.city = "New York";
//console.log(avenger.city);
    
//CONTAMOS LA CANTIDAD DE KEYS QUE HAY EN EL OBJETO
//console.log(Object.keys(avenger).length);
    
//CREAMOS NUEVAS KEYS Y ASIGNAMOS UN VALOR
//console.log(avenger);
avenger.job = "Ingeniero";
avenger.edad = 40;
avenger.country = "United States";
//console.log(avenger);
    
//VAMOS A CREAR UN CONSTRUCTOR DE VENGADORES
var todosVengadores = [];
var todasCiudades = [];
var todasEdades = [];
var comparEdad = []
function vengadores(id, nombreHeroe, ciudad, estudios, edad){
    this.id=id;
    this.nombreHeroe=nombreHeroe;
    this.ciudad=ciudad;
    this.estudios=estudios;
    this.edad=edad;
    this.listarKeys= function(){
        console.log(this.id+", "+this.nombreHeroe + ", " + this.ciudad + ", " + this.estudios + ", " + this.edad)
    }
    this.listarNombre= function(){
        todosVengadores.push(this.nombreHeroe);
    }
    this.listarNombre();
        
    this.listarCiudad= function(){
        var hero = {
        heroName : this.nombreHeroe,
        heroCity: this.ciudad,
        }
        todasCiudades.push(hero);
    }
    this.listarCiudad();

    this.listarEdad= function(){
        todasEdades.push(this.edad);
    }
    this.listarEdad();

    this.listarComparEdad= function(){
        var hero = {
        heroId : this.id,
        heroName : this.nombreHeroe,
        heroEdad: this.edad,
        }
        comparEdad.push(hero);
    }
    this.listarComparEdad();

}
    
    
//CREAMOS DOS NUEVOS VENGADORES CON EL CONSTRUCTOR VENGADORES
var capitan = new vengadores("01", "Roger", "New Jersey", "Seguridad de estado", 35);
var hulk = new vengadores("02", "Bruce", "Canada", "Científico", 43);
    
    
//LLAMO AL MÉTODO listarKeys() QUE ESTÁ CREADO EN EL CONSTRUCTOR VENGADORES, AL TENER YA UN CONSOLE.LOG
//EL METODO, NO HACE FALTA QUE LO VOLVAMOS A SACAR POR CONSOLE.LOG YA QUE LA MISMA FUNCIÓN TIENE EL CONSOLE.LOG
    
hulk.listarKeys();
    
//CREAREMOS UNA FUNCIÓN QUE NOS DE LOS NOMBRES DE LOS VENGADORES, SI VAMOS A LA LINEA 48, CREAMOS UNA ARRAY VACÍA,
//LUEGO EN EL CONSTRUCTOR CREAMOS UN MÉTODO QUE CADA VEZ QUE CREEMOS UN VENGADOR, NOS META EL NOMBRE DEL VENGADOR DENTRO
//DE LA ARRAY, IMPORTANTE!! A PARTE DE DECLARAR LA FUNCIÓN, HA QUE EJECUTARLA PARA QUE NOS META EL NOMBRE EN LA ARRAY
    
//console.log("vengadores :",todosVengadores);
    
//CREAMOS VARIOS VENGADORES MAS
var ironman = new vengadores("03", "Tony", "New York", "Ingeniero", 50);
var avispa = new vengadores("04", "Avispa", "Canada", "Insecto", 25);
var jsman = new vengadores("05", "Eugenio", "New Jersey", "Informático", 31);

//console.log("vengadores y ciudades: "+todasCiudades);

//CON LA FUNCION CREADA EN EL CONSTRUCTOR PARA QUE AUTOMÁTICAMENTE CADA VEZ QUE CREEMOS UN VENGADOR NOS META EN UNA NUEVA ARRAY EL NOMBRE Y LA CIUDAD, UTILIZAMOS EL
//MÉTODO FILTER() QUE IREMOS INTRODUCIENDO LOS OBJETOS EN UNA NUEVA ARRAY QUE TENGAN LA MISMA CIUDAD.
var newArr = todasCiudades.filter(function(obj){
    return obj.heroCity === "New Jersey";
});
//console.log("Hay "+newArr.length+" heroes viviendo en "+newArr[0].heroCity+" y son: "+newArr[0].heroName+" y "+newArr[1].heroName);   
    
//VAMOS A CALCULAR LA MEDIA DE EDAD DE LOS VENGADORES
var sumaTotal = 0;
    for(var x = 0; x < todasEdades.length; x++){
       sumaTotal += todasEdades[x];
    };
var calculo = sumaTotal/todasEdades.length;
//console.log(calculo);

//VAMOS A EVALUAR DE FORMA ALEATORIA LAS EDADES DE LOS VENGADORES PARA VER QUIEN ES EL MAS VIEJO!!!
function viejuno(arr){
    var id1 = Math.trunc(Math.random() * (comparEdad.length - 0) + 0);
    var id2 = Math.trunc(Math.random() * (comparEdad.length - 0) + 0);
    if(arr[id1].heroEdad > arr[id2].heroEdad){
        return arr[id1].heroName+" es mayor que "+arr[id2].heroName;
    }else{
        return arr[id1].heroName+" es menor que "+arr[id2].heroName;
    }
}
console.log(viejuno(comparEdad));

