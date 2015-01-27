
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	counter = 0;
  	$("form").submit(function(){
  		alert("button pressed");
  		var num = getNum();
  		$("#feedback").text("you entered " + num);
  		counter++;
  		$("#count").text(counter);
  		return false;
  		
  	});

  	newGame();


  	// FUNCTIONS
  	function getNum(){
  		var num = $("#userGuess").val();
  		//alert(num);
  		return num;
  	};

  	function newGame(){
  		$(".new").click(function() {
    		location.reload();
 		});  	
	};

});


