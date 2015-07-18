var score = {
    numberCorrect: 0,
    workingQuestion: 0,
    percentCorrect: function(){
        return Math.floor(100*(this.numberCorrect/this.workingQuestion))
    }
}

function makeQuizQuestion() {
    
    var QuizQuestion = {};
    
// Since we're creating the next question, increment the currentQuestion number.
    score.workingQuestion++;

// Pick and answer and display the image for it.
    QuizQuestion.answer = Math.floor(Math.random()*6);
//    displayImage(QuizQuestion.answer);


    var chooseFrom = [0, 1, 2, 3, 4, 5];
    var questionsArray = [];
    var chooseIndex;

// Push the correct answer into the questions array.    
    questionsArray.push(QuizQuestion.answer);
    for (var i = chooseFrom.length - 1; i >= 0; i--) {
        if(chooseFrom[i] === QuizQuestion.answer) {
            chooseFrom.splice(i, 1);
        }
    }

    while (questionsArray.length < 4) {
        chooseIndex = Math.floor(Math.random()*chooseFrom.length);
        questionsArray.push(chooseFrom[chooseIndex]);
        chooseFrom.splice(chooseIndex, 1);    
    }    

// When there is only one element left in the chooseFrom array, we don't need to pick a random number.
    questionsArray.push(chooseFrom[0]);
    
// Now we should have questionArray filled with options and one of them is the answer.
    QuizQuestion.questionsArray = questionsArray;
    
return QuizQuestion;
}

function displayQuiz(question) {
    var itemLabels = ["In irons", "Close hauled", "Close reach", "Beam reach", "Broad reach", "Running"];

// Display the image of the answer.
    switch(question.answer) {
        case 0:
            $('#quiz_view > img').attr("src", "./images/in_irons.png");
            break;
        case 1:
            $('#quiz_view > img').attr("src", "./images/close_hauled.png"); 
            break;
        case 2:
            $('#quiz_view > img').attr("src", "./images/close_reach.png");
            break;
        case 3:
            $('#quiz_view > img').attr("src", "./images/beam_reach.png");
            break;
        case 4:
            $('#quiz_view > img').attr("src", "./images/broad_reach.png");
            break;
        default:
            $('#quiz_view > img').attr("src", "./images/running.png");
    }
    
// Display the answer choices.    
    $("#question1").next().html(itemLabels[question.questionsArray[0]]);
    $("#question2").next().html(itemLabels[question.questionsArray[1]]);
    $("#question3").next().html(itemLabels[question.questionsArray[2]]);
    $("#question4").next().html(itemLabels[question.questionsArray[3]]);       
}

function displayStats(answerValue){
    $("#numberRight").text(score.numberCorrect);
    $(".totalQuestions").text(score.workingQuestion);
    $("#percentage").text(score.percentCorrect());
    if (answerValue) {
        $("#statusGreeting").text("Great job, mate.  You got it right.");
    } else {
        $("#statusGreeting").text("Arggh!  Keep studying, landlubber.");
    }
}

$(document).ready(function() {
    
    $("#welcome").fadeIn(1000);
// Create a new quiz object    
    var firstQuestion = makeQuizQuestion();
    displayQuiz(firstQuestion);

    $("#welcome").on('click', function() {
  		$("#welcome").fadeOut(10);
        $("#quiz_view").fadeIn(10);    
    });    
    
    
    $("#submit_button").on('click', function(){
        var radios = document.getElementsByTagName('input');
        var value;
        var correctAnswer = false;
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].type === 'radio' && radios[i].checked) {
                value = radios[i].value;  
                radios[i].checked = false;
                if (value == firstQuestion.answer) {
                    score.numberCorrect++;
                    correctAnswer = true;
                }
                $("#quiz_view").fadeOut(10);
                $("#status_card").fadeIn(10);
                displayStats(correctAnswer);                
            }
        }
    });
    
    $("#status_card").on('click', function(){
        $("#status_card").fadeOut(10);   
        $("#quiz_view").fadeIn(10);    
    });
    
    
});  // Document Ready closure

