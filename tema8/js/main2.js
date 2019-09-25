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

    let a = document.getElementById('letraA');
    let b = document.getElementById('letraB');
    let c = document.getElementById('letraC');
    let d = document.getElementById('letraD');
    let e = document.getElementById('letraE');
    let f = document.getElementById('letraF');
    let g = document.getElementById('letraG');
    let h = document.getElementById('letraH');
    let i = document.getElementById('letraI');
    let j = document.getElementById('letraJ');
    let k = document.getElementById('letraK');
    let l = document.getElementById('letraL');
    let m = document.getElementById('letraM');
    let n = document.getElementById('letraN');
    let enye = document.getElementById('letraEnye');
    let o = document.getElementById('letraO');
    let p = document.getElementById('letraP');
    let q = document.getElementById('letraQ');
    let r = document.getElementById('letraR');
    let s = document.getElementById('letraS');
    let t = document.getElementById('letraT');
    let u = document.getElementById('letraU');
    let v = document.getElementById('letraV');
    let w = document.getElementById('letraW');
    let x = document.getElementById('letraX');
    let y = document.getElementById('letraY');
    let z = document.getElementById('letraZ');
    let preg = document.getElementById('pregunta');
    let resp = document.getElementById('respuesta');
    
    const abecedario = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, enye, o, p, q, r, s, t, u, v, w, x, y, z];
    
        
    var respCorrectas = 0;
    var respIncorrectas = 0;

    let iniciar = document.getElementById('iniciarJuego');
    let evaluar = document.getElementById('evaluarPregunta');
    
    function pasapalabra(){
        var x = 0;
        var primeraVuelta = 0;
        iniciar.onclick=function(){
           
                document.getElementById('pregunta').innerHTML = questions[x].question;               

        }
        evaluar.onclick = function(){
            if(primeraVuelta >= 27){
                alert('Juego acabado!');
            }else if(questions[x].answer === resp.value){
                abecedario[x].style.backgroundColor = '#19A547';
                resp.value = "";
                respCorrectas++;
                document.getElementById('aciertos').innerHTML = respCorrectas;
                x++;
                primeraVuelta++;
                document.getElementById('pregunta').innerHTML = questions[x].question;
            }else if(resp.value === 'pasapalabra'){
                resp.value = ""; 
                x++;   
                primeraVuelta++;
                document.getElementById('pregunta').innerHTML = questions[x].question;

            }else if(questions[x].answer !== resp.value){
                abecedario[x].style.backgroundColor = '#AF1B1B';
                resp.value = "";
                respIncorrectas++;
                document.getElementById('fallos').innerHTML = respIncorrectas;
                x++;
                primeraVuelta++;
                document.getElementById('pregunta').innerHTML = questions[x].question;
            }
        }
    }

    
    
