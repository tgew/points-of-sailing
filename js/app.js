// answer key object
//   key pairs: image (point of sail), name
//   each object has a point of sail, an image name

var answer;

// function create_quiz
//   choose five random images and their answers

// function create_question
//   given an answer pair, randomly select 3 other answer
//   return an array of 

function newQuiz() {

    var match = false;
    answer = Math.floor(Math.random()*6);
    displayImage(answer);


    var questionsArray = [];
    var singleQuestion;
    
    questionsArray.push(answer);

    while(questionsArray.length < 5) {
        singleQuestion = Math.floor(Math.random()*6);
        if(singleQuestion != answer) {
            for(var i=0; i < questionsArray.length; i++){
                if(singleQuestion == questionsArray[i]) {
                    match = true;
                }
            }
            if(!match) {
                questionsArray.push(singleQuestion);
            }
        }
    }    
    
// Now we should have questionArray filled with options and one of them is the answer.
return questionsArray;
    
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



$(document).ready(function() {
    
    $("#welcome").fadeIn(1000);


  	$("#welcome").click(function(){
  		$("#welcome").fadeOut(0);
        $("#quiz_view").fadeIn(0);
        // create a new quiz object
        newQuiz();
        displayImage(answer);
  	});
    
    $("#submit_button").click(function(){
        var radios = document.getElementsByTagName('input');
        var value;
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].type === 'radio' && radios[i].checked) {
                value = radios[i].value;  
                console.log(value);
            }
        }
        $("#quiz_view").fadeOut(500);
        $("#status_card").fadeIn(500);
        
        // check the answer
        // insert the status data in the card
        // wait for user to click on finished        
    });
    
    
});  // Document Ready closure

