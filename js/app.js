$(document).ready(function() {
    
    $("#welcome").fadeIn(1000);


  	$("#welcome").click(function(){
  		$("#welcome").fadeOut(500);
        $("#quiz_page").fadeIn(500);
  	});
    

  	
    
    
    
    
    
    
//    $("#prep_page").click(function(){
//  		$("#prep_page").fadeOut(500);
//        $("#quiz_page").fadeIn(500);
//        $("#quiz_form").submit(function(event){
//            var $answer = this.val();
//            console.log($answer);
//            event.preventDefault();
//        });
//  	});    
    
    
});  // Document Ready closure