
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	alert("new num is " + generateNum());

  	counter = 0;
  	$("form").submit(function(e){
  		var num = getNum();
  		checkNum(num);
  		counter++;
  		$("#count").text(counter);
  		$("#userGuess").attr("placeholder", "Enter your Guess").val("").focus().blur();
  		//return false;
  		e.preventDefault();

  		
  	});

  	newGame();


  	// FUNCTIONS
  	function getNum(){
  		var num = $("#userGuess").val();
  		return num;
  	};

  	// Make sure number is a whole number
  	function checkNum(n){
  		if (n % 1 != 0){
  			$("#feedback").text("The number: " +n +" is not a whole number");
  		}
  		else { 
  			$("#feedback").text("You entered " + n);
  		};
  	};

  	function newGame(){
  		$(".new").click(function() {
    		location.reload();
 		});  	
	};

	function generateNum(){
		// random number between 1 and 100
		var num = Math.floor((Math.random() * 100) + 1);
		return num;
	};

});