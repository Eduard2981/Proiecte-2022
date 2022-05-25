const quizData = [
{
    question:'1.Ce animal este cunoscut drept "vaporul desertului"?',
    a: 'Strutul',
    b: 'Coiotul',
    c: 'Camila',
    d: 'Sacalul',
    correct: 'c'
},{
    question:'2.Prin ce sistem circula sangele in corp?',
    a: 'Sistemul digestiv',
    b: 'Sistemul circulator',
    c: 'Sistemul respirator',
    d: 'Toate 3',
    correct: 'b'
},{
     question:'3.Cati metri patrati sunt intr-un hectar?',
    a: '10.000',
    b: '100.000',
    c: '1.000',
    d: '10',
    correct: 'a'
},{
     question:'4.Electronii sunt mai mari decat moleculele.',
    a: 'Adevarat',
    b: 'Fals',
    c: 'Nu fac parte din aceeasi categorie',
    d: 'Nu stiu',
    correct: 'b'
},{
     question:'5.Care sunt cele doua elemente din care este alcatuita apa?',
    a: 'Carbon si oxigen',
    b: 'Clorura de sodiu',
    c: 'Hidrogen si carbon',
    d: 'Hidrogen si oxigen',
    correct: 'd'
}
]

const quiz = document.getElementById("quiz")
const answerEls= document.querySelectorAll(".answer");
const questionEl=document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn= document.getElementById("submitBtn");
let currentQuiz=0
let score = 0

loadQuiz()


function loadQuiz(){
deselectAnswers()

const currentQuizData = quizData[currentQuiz]
questionEl.innerText=currentQuizData.question
a_text.innerText=currentQuizData.a
b_text.innerText=currentQuizData.b
c_text.innerText=currentQuizData.c
d_text.innerText=currentQuizData.d
}


function getSelected(){
   
    const answerEls = document.querySelectorAll(".answer")
    var answer= undefined
   
    answerEls.forEach ((answerEl)=>{
        if(answerEl.checked){
       answer= answerEl.id 
        }})
    
        return answer
    }

    function addScore(){
        var answer=getSelected()
        if(answer===quizData[currentQuiz].correct){
            score++
        }
        
    }

    function deselectAnswers(){
         var answer=getSelected()
         answerEls.forEach ((answerEl)=>{
        answerEl.checked=false
        })}
    
     // Add functions to button
       
     submitBtn.addEventListener("click",()=>{ 
    var answer=getSelected()
    addScore(); 
    
    loadQuiz();

    // check to see the answer
    console.log(answer)
    console.log(score)

    // function anonymous
    currentQuiz++;
     if (currentQuiz<quizData.length){
        loadQuiz();
    }
    else{
        quiz.innerHTML = "Ai raspuns corect la " + score +" din "+ quizData.length +"<br>"+"<button id='refreshButton' onClick='location.reload()'>Play Again</button>";
        quiz.style.padding= "15px"
    }; 
    
    });

    