var answer;
var correctAnswers = 0;
var currentQuestion = 0;

function makeQuizQuestion() {
    
    var QuizQuestion = {};
    
// Since we're creating the next question, increment the currentQuestion number.
    currentQuestion++;

// Pick and answer and display the image for it.
    QuizQuestion.answer = Math.floor(Math.random()*6);
    displayImage(QuizQuestion.answer);


    var chooseFrom = [0, 1, 2, 3, 4, 5]
    var questionsArray = [];
    var chooseIndex;

// Push the correct answer into the questions array.    
    questionsArray.push(QuizQuestion.answer);
    for(var i = chooseFrom.length - 1; i >= 0; i--) {
        if(chooseFrom[i] === answer) {
            chooseFrom.splice(i, 1);
        }
    }

    while(questionsArray.length < 4) {
        chooseIndex = Math.floor(Math.random()*chooseFrom.length);
        questionsArray.push(chooseFrom[chooseIndex]);
        chooseFrom.splice(chooseIndex, 1);    
    }    

// When there is only one element left in the chooseFrom array, we don't need to pick a random number.
    questionsArray.push(chooseFrom[0]);
    
// Now we should have questionArray filled with options and one of them is the answer.
    QuizQuestion.questionsArray = questionsArray
    
return QuizQuestion;
}

function displayImage(imageNumber) {
    switch(imageNumber) {
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
}

function displayQuestions(questionList){
    var itemLabels = ["In irons", "Close hauled", "Close reach", "Beam reach", "Broad reach", "Running"]
    $("#question1").next().html(itemLabels[questionList[0]]);
    $("#question2").next().html(itemLabels[questionList[1]]);                                         
    $("#question3").next().html(itemLabels[questionList[2]]);
    $("#question4").next().html(itemLabels[questionList[3]]);                                         
}

function displayStats(answerValue){
    var percentRight = Math.floor(100*(correctAnswers/currentQuestion));
    $("#numberRight").text(correctAnswers);
    $(".totalQuestions").text(currentQuestion);
    $("#percentage").text(percentRight);
    if (answerValue) {
        $("#statusGreeting").text("Great job, mate.  You got it right.");
    } else {
        $("#statusGreeting").text("Arggh!  Keep studying, landlubber.");
    }
}

$(document).ready(function() {
    
    $("#welcome").fadeIn(1000);


  	$("#welcome").click(function(){
  		$("#welcome").fadeOut(10);
        $("#quiz_view").fadeIn(10);
        // create a new quiz object
        var quizQuestion1 = makeQuizQuestion();
        answer = quizQuestion1.answer;
        displayImage(quizQuestion1.answer);
        displayQuestions(quizQuestion1.questionsArray);
  	});
    
    $("#submit_button").click(function(){
        var radios = document.getElementsByTagName('input');
        var value;
        var answerValue = false;
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].type === 'radio' && radios[i].checked) {
                value = radios[i].value;  
                if (value == answer) {
                    correctAnswers++;
                    answerValue = true;
                }
                $("#quiz_view").fadeOut(10);
                $("#status_card").fadeIn(10);
                displayStats(answerValue);                
            }
        }
    });
    
    $("#status_card").click(function(){
        $("#status_card").fadeOut(10);   
        $("#quiz_view").fadeIn(10);
        var quizQuestion1 = makeQuizQuestion();
        answer = quizQuestion1.answer;
        displayImage(quizQuestion1.answer);
        displayQuestions(quizQuestion1.questionsArray);        
    });
    
    
});  // Document Ready closure

