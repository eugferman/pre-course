//DEFINIMOS PREGUNTAS DEL JUEGO PASAPALABRA
var questions = [
    { letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"},
    { letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"},
    { letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé"},
    { letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"},
    { letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"},
    { letter: "f", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"},
    { letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"},
    { letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento"},
    { letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano"},
    { letter: "j", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"},
    { letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria"},
    { letter: "l", answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo"},
    { letter: "m", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"},
    { letter: "n", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia"},
    { letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."},
    { letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"},
    { letter: "p", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"},
    { letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"},
    { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor"},
    { letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático"},
    { letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"},
    { letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"},
    { letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"},
    { letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"},
    { letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"},
    { letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos"},
    { letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"},
]


//CREAMOS UN CONSTRUCTOR DE CONCURSANTES QUE LE PASAREMOS NOMBRE, ACIERTOS Y FALLOS
function consConcursantes(nombre, aciertos, fallos){
    this.nombre=nombre;
    this.aciertos=aciertos;
    this.fallos=fallos;
}

//CREAMOS UNA ARRAY VACÍA PARA IR INTRODUCIENDO LOS CONCURSANTES
var concursantes = [];


//CREAMOS EL JUEGO PASAPALABRA, PRIMERO CREAMOS VARIABLES PARA IR ALMACENANDO LA INFORMACIÓN QUE RECOGEMOS,
//LUEGO HACEMOS UN FOR PARA IR RECORRIENDO TODAS LAS PREGUNTAS E IR GESTIONANDO LAS RESPUESTAS
var respCorrectas = 0;
var respIncorrectas = 0;
var nomConcurs;

function pasapalabra(){    
    nomConcurs = prompt("Bienvenido a Pasapalabra, cómo te llamas?");
    console.log("Bienvenido "+nomConcurs+" a Pasapalabra.");
    
        for(var x = 0; x < questions.length; x++){
            if(questions[x].status <= 0){
                var pregunta = prompt(questions[x].question);
                var answer = questions[x].answer;
                    //SI ACERTAMOS, SUMAMOS EN EL MARCADOR Y ELIMINAMOS LA PREGUNTA
                    if(answer === pregunta){
                        respCorrectas++;
                        questions[x].status=1;
                        console.log("Pregunta acertada: " + questions[x].letter);

                    //SI PONEMOS PASAPALABRA EN LA RESPUESTA NOS PASA A LA SIGUIENTE PREGUNTA    
                    }else if(pregunta === "pasapalabra"){
                        console.log("Has dicho pasapalabra en la letra: "+questions[x].letter);
                    
                    //SI FALLAMOS LA PREGUNTA, INCREMENTA EL MARCADOR Y ELIMINAMOS LA PREGUNTA
                    }else if(answer !== pregunta){
                        respIncorrectas++;
                        questions[x].status=1;
                        console.log("Pregunta fallada: " + questions[x].letter);
                                
                    }
                
            }
        }
        //RETORNA UNA NUEVA FUNCIÓN PARA VER SI HAY ALGUNA PREGUNTA DE PASAPALABRA
        return nuevaVuelta();
    
}

//CREAMOS UNA FUNCIÓN PARA HACER NUEVA VUELTA DE LAS PREGUNTAS DE PASAPALABRA
function nuevaVuelta(){
    
    for(var x = 0; x < questions.length; x++){
        if(questions[x].status <= 0){
            console.log("Hacemos nueva vuelta para preguntas pendientes:");
            var pregunta = prompt(questions[x].question);
            var answer = questions[x].answer;
                //SI ACERTAMOS, SUMAMOS EN EL MARCADOR Y ELIMINAMOS LA PREGUNTA
                if(answer === pregunta){
                    respCorrectas = respCorrectas +1;
                    questions[x].status=1;
                    console.log("Pregunta acertada: " + questions[x].letter);

                //SI PONEMOS PASAPALABRA EN LA RESPUESTA NOS PASA A LA SIGUIENTE PREGUNTA    
                }else if(pregunta === "pasapalabra"){
                    console.log("Has dicho pasapalabra en la letra: "+questions[x].letter);
                    
                //SI FALLAMOS LA PREGUNTA, INCREMENTA EL MARCADOR Y ELIMINAMOS LA PREGUNTA
                }else if(answer !== pregunta){
                    respIncorrectas = respIncorrectas +1;
                    questions[x].status=1;
                    console.log("Pregunta fallada: " + questions[x].letter);
                            
                }
            
        }
    }
    //CUANDO YA NO QUEDAN MAS PREGUNTAS, RETORNA LA SIGUIENTE FUNCIÓN QUE ES PARA VER SI HAY NUEVOS
    //PARTICIPANTES
    return nuevoConcursante();

}

//ESTA FUNCIÓN LA HE CREADO PERO NO ME FUNCIONA, EL OBJETIVO ES EVALUAR INFINITAMENTE EL ROSCO HASTA QUE
//NO QUEDEN MAS PREGUNTAS CON STATUS 0, ME LO HACE PERO LUEGO ME CREA MAL LOS PARTICIPANTES (PREGUNTAS PROFE)
/*function vueltaInfinita(){
    
    for(var x = 0; x < questions.length; x++){
        if(questions[x].status <= 0){
            
        nuevaVuelta();

        }
    }
    
    return nuevoConcursante();  
    
}*/

//CREAMOS UNA FUNCIÓN PARA CUANDO TERMINE EL JUEGO, QUE NOS PREGUNTE SI ALGUIEN MAS QUIERE JUGAR, UNA VEZ
//LLAMAMOS A LA FUNCIÓN, CREAMOS EL CONCURSANTE CON LOS DATOS DE SU PARTICIPACIÓN, Y SI ALGUIEN MAS QUIERE
//PARTICIPAR RESETEAMOS LOS DATOS DEL ROSCO Y DEL PARTICIPANTE, SI NO PARTICIPA NADIE MAS, LISTAMOS LOS RESULTADOS
function nuevoConcursante(){
    var conc1 = new consConcursantes(nomConcurs, respCorrectas, respIncorrectas);
    concursantes.push(conc1);
    var nuevoConcursante = window.confirm("Alguien más quiere jugar al pasapalabra?");
    if(nuevoConcursante){
        for(var x = 0; x < questions.length; x++){
            questions[x].status=0;
        }
        respCorrectas = 0;
        respIncorrectas = 0;
        nomConcurs = "";
        return pasapalabra();
    }else{
        
        return listarResultados();
    }
}

//CREAMOS UN MÉTODO PARA LISTAR LOS RESULTADOS DE LOS CONCURSANTES, CON EL MÉTODO SORT ORDENAREMOS LA ARRAY
//POR ORDEN DESCENDENTE
function listarResultados(){
    concursantes.sort(function (a, b){
        return (b.aciertos - a.aciertos)
    });
    for(var x = 0; x < concursantes.length; x++){
        console.log("Concursante: " + concursantes[x].nombre + ", aciertos: " + concursantes[x].aciertos + ", fallos: "+ concursantes[x].fallos);
    }   
    return "Gracias por su participación!!"
}

console.log(pasapalabra());
