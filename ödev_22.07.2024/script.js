const questions=document.querySelectorAll('.question');

const submitButton=document.getElementById('submit-btn');

const resultContainer=document.getElementById('result');




submitButton.addEventListener("click", function(){
    let score=0;

    questions.forEach(question =>{
        const selectedOption=question.querySelector("input:checked");

        if(selectedOption){
            score += parseInt(selectedOption.value);
        }
    });
    const totalQuestions = questions.length;

    const averageScore=score/totalQuestions;

    let message="";

    if(averageScore<60){
        message="Dizi önerim var belki bakmak istersin (Demon Slayer)";
    }else if(averageScore<67){
        message="Orta düzeyde bilgi sahibisin";
    }else{
        message="Harika bir Demon Slayer izleyicisin"
    }

    resultContainer.textContent=message;
});

