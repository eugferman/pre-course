var questions = [
    { letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"},
    { letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"},
    { letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé"}
    ]

    let a = document.getElementById('letraA');
    let b = document.getElementById('letraB');
    let c = document.getElementById('letraC');
    let rep = document.getElementById('nuevaVuelta');
    
    const abecedario = [a, b, c]
    var segundaVuelta = [];
    var respCorrectas = 0;
    var respIncorrectas = 0;

    let iniciar = document.getElementById('iniciarJuego');
    
    function pasapalabra(){

        iniciar.onclick=function(){
            for(var x = 0; x < questions.length; x++){
            if(questions[x].status <= 0){
                var pregunta = prompt(questions[x].question);
                var answer = questions[x].answer;
                    if(answer === pregunta){
                        respCorrectas++;
                        document.getElementById('aciertos').innerHTML = respCorrectas;
                        for(var y = 0; y < abecedario.length; y++){
                            abecedario[x].style.backgroundColor = '#19A547';
                        }
                    }else if(pregunta === "pasapalabra"){
                        nuevaVuelta.push(questions[x]);
                    
                    }else if(answer !== pregunta){
                        respIncorrectas++;
                        document.getElementById('fallos').innerHTML = respIncorrectas;
                        for(var z = 0; z < abecedario.length; z++){
                            abecedario[x].style.backgroundColor = '#AF1B1B';
                        }
                                
                    }
                
                }   
            }
        }

        
    }

    
    
