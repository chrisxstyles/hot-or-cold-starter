
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	var randomNum = generateNum();
  	alert("random num is " + randomNum);

  	counter = 0;
  	$("form").submit(function(e){
  		var userNum = getNum();
  		checkNum(randomNum, userNum);
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
  	function checkNum(r, n){
  		if (n % 1 != 0){
  			$("#feedback").text("The number: " +n +" is not a whole number");
  		}
  		else {
  			var findMax = maxNum(r, n);
  			var highNum = findMax[0];
  			var lowNum  = findMax[1];
  			if (highNum - lowNum >= 50){
  				$("#feedback").text("You entered " +n +", You are COLD!");
  			}
  			else if (highNum - lowNum <= 20){ 
  				$("#feedback").text("You entered " +n +", You are WARM!");
  			}
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

	function maxNum(r, n){
		if (Math.max(r, n) == r){
			return [r, n];
		}
		if (Math.max(r, n) == n){
			return [n, r];
		}
	};

});