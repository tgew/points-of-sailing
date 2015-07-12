

$(document).ready(function() {
    
    $("#welcome").fadeIn(1000);


  	$("#welcome").click(function(){
  		$("#welcome").fadeOut(500);
        $("#quiz_view").fadeIn(500);
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
    });
    

  	  
    
    
});  // Document Ready closure