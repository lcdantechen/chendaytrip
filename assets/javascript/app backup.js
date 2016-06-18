var questions = [
  {
    question:'Who is the big sister in The Despicable Me Films?',
    choices : ['Margo', 'Agnus', 'Edith', 'Heather'],
    answer:'Margo',
  },

  {
    question:"What was the first thing Gru ever stole?",
    choices : ['The Pyramid', 'The Queens Crown', 'His Lunch', 'The Moon'],
    answer:'The Queens Crown',
  },

  {
    question:"What are the names of the Minions in the 2015 film minion?",
    choices : ['Kevin, Bob and Nathan', 'Kevin, Sally and Stuart', 'Kevin, Bob and Stuart', 'Gareth, Bob and Stuart'],
    answer:'Kevin, Bob and Stuart',
  },
  {
    question:"Why did the Minions go to Orlando?",
    choices : ['To find Gru', 'To find some bananas', 'Villain Con', 'Vacation'],
    answer:'Villain Con',
  },
  {
    question:"How did all the minions arrive in London?",
    choices : ['An airplane', 'Swam', 'A boat', 'The tube'],
    answer:'The tube',
  }


]
 
console.log(questions);
$(document).ready(function(){
	   var counter = 5;
	   var choicesClicked = false;
	   var correctA = 0;
	   var incorrectA = 0;
	   var Unanswered = 0;

     $('#startButton').on('click', function(){
            console.log("buttion is clicked")
            Question1();



     })

     function Question1(){

     	      var countDown = setInterval(function(){ 
                   counter--;
                   
			     	       $('#timer').html('Time Remaining:'+counter+'Seconds');
			     	       $('#clickHere').html(
					                 "<div class='question'>"+questions[0].question+"</div>")
			     	       for (var i=0; i < questions[0].choices.length; i++){
			     	       	      // console.log(i);			     	       	   
                           $('#clickHere').append(
					                 "<div class='choices' data-val='"+i+"'>"+questions[0].choices[i]+"</button>"+"</div>"

			                  	);
			                 	
			                }
			             if (choicesClicked === false){
						             $('#clickHere').on('click', '.choices', function(){
						             	    choicesClicked = true;
						             	    console.log('choice is clicked');
						             	    //console.log(this);
						             	    if ($(this).data('val')===0){
						             	    	   clearInterval(countDown);
						             	    	   rightAnswer1();
						             	    	   correctA =+ 1;
						             	    	   //console.log(correctA);
						             	    } else{
						             	    	clearInterval(countDown);
						             	    	   wrongAnswer1();
						             	    	   incorrectA += 1;

						             	    }
						             });
						          } 
						          if (choicesClicked !== false){
						          	 $('#clickHere').on('click', '.choices', function(){
						          	 	     console.log('You cannot clicked twice');
						          	 })

						          }


			              

			              if (counter === 0){
							     	  	//alert('time is up');
							     	  	clearInterval(countDown);
							     	  	outofTime1()
							     	  	Unanswered += 1;
							     	  	
							     	  	
     	  						}


            }, 1000);
     }

     function rightAnswer1(){
     									$('#clickHere').html(
			                 "<div class='question'>"+"Correct!"+"</div>"
			                 +"<img class='gif' src='assets/images/giphy01.gif'>")
					     	        setTimeout(function(){
					     	        	     console.log('Need to go to the next question!') 
					     	        	    
					     	        	     Question2()       

					     	       	},5000);

     }
     function wrongAnswer1(){
     									$('#clickHere').html(
			                 "<div class='question'>"+"Nope!"+"</div>"
			                 +"<div class='question'>"+"The correct answer is &nbsp;"+questions[0].answer+"</div>"

			                 +"<img class='gif' src='assets/images/giphy02.gif'>")
					     	        setTimeout(function(){
					     	        	     console.log('Need to go to the next question!')  
					     	        	     
					     	        	     Question2()   

					     	       	},5000);

     }
     function outofTime1(){
     	                 $('#clickHere').html(
			                 "<div class='question'>"+"Out of Time!"+"</div>"
			                 +"<div class='question'>"+"The correct answer is &nbsp;"+questions[0].answer+"</div>"

			                 +"<img class='gif' src='assets/images/giphy05.gif'>")
					     	        setTimeout(function(){
					     	        	     console.log('Need to go to the next question!')  

					     	        	      Question2()

					     	       	},5000);
     }
/*--------------------------------------------question 2------------------------------------------------------*/
     function Question2(){
     	      counter = 10;
     	      choicesClicked = false;

     	      var countDown = setInterval(function(){ 
                   counter--;
                   
			     	       $('#timer').html('Time Remaining:'+counter+'Seconds');
			     	       $('#clickHere').html(
					                 "<div class='question'>"+questions[1].question+"</div>")
			     	       for (var i=0; i < questions[1].choices.length; i++){
			     	       	      // console.log(i);			     	       	   
                           $('#clickHere').append(
					                 "<div class='choices' data-val='"+i+"'>"+questions[1].choices[i]+"</button>"+"</div>"

			                  	);
			                 	
			                }
			             if (choicesClicked === false){
						             $('#clickHere').on('click', '.choices', function(){
						             	    choicesClicked = true;
						             	    console.log('choice is clicked');
						             	    //console.log(this);
						             	    if ($(this).data('val')===1){
						             	    	   clearInterval(countDown);
						             	    	   rightAnswer2();
						             	    	   correctA =+ 1;
						             	    } else{
						             	    	clearInterval(countDown);
						             	    	   wrongAnswer2();
						             	    	   incorrectA =+ 1;

						             	    }
						             });
						          } else {
						          	console.log('choices is Clicked');
						          }


			              

			              if (counter === 0){
							     	  	//alert('time is up');
							     	  	clearInterval(countDown);
							     	  	outofTime2()
							     	  	Unanswered += 1;

     	  						}


            }, 1000);
     }

     function rightAnswer2(){
     									$('#clickHere').html(
			                 "<div class='question'>"+"Correct!"+"</div>"
			                 +"<img class='gif' src='assets/images/giphy03.gif'>")
					     	        setTimeout(function(){
					     	        	     console.log('Need to go to the next question!') 
					     	        	     Question3()       

					     	       	},5000);

     }
     function wrongAnswer2(){
     									$('#clickHere').html(
			                 "<div class='question'>"+"Nope!"+"</div>"
			                 +"<div class='question'>"+"The correct answer is &nbsp;"+questions[1].answer+"</div>"

			                 +"<img class='gif' src='assets/images/giphy04.gif'>")
					     	        setTimeout(function(){
					     	        	     console.log('Need to go to the next question!') 
					     	        	     Question3()      

					     	       	},5000);

     }
     function outofTime2(){
     	                 $('#clickHere').html(
			                 "<div class='question'>"+"Out of Time!"+"</div>"
			                 +"<div class='question'>"+"The correct answer is &nbsp;"+questions[1].answer+"</div>"

			                 +"<img class='gif' src='assets/images/giphy05.gif'>")
					     	        setTimeout(function(){
					     	        	     console.log('Need to go to the next question!')  

					     	        	      Question3()

					     	       	},5000);
     }
/*--------------------------------------------question 3------------------------------------------------------*/
      function Question3(){
     	      counter = 5;
     	      choicesClicked = false;

     	      var countDown = setInterval(function(){ 
                   counter--;
                   
			     	       $('#timer').html('Time Remaining:'+counter+'Seconds');
			     	       $('#clickHere').html(
					                 "<div class='question'>"+questions[2].question+"</div>")
			     	       for (var i=0; i < questions[2].choices.length; i++){
			     	       	      // console.log(i);			     	       	   
                           $('#clickHere').append(
					                 "<div class='choices' data-val='"+i+"'>"+questions[2].choices[i]+"</button>"+"</div>"

			                  	);
			                 	
			                }
			             if (choicesClicked === false){
						             $('#clickHere').on('click', '.choices', function(){
						             	    choicesClicked = true;
						             	    console.log('choice is clicked');
						             	    //console.log(this);
						             	    if ($(this).data('val')===2){
						             	    	   clearInterval(countDown);
						             	    	   rightAnswer3();
						             	    	   correctA =+ 1;
						             	    } else{
						             	    	clearInterval(countDown);
						             	    	   wrongAnswer3();
						             	    	   incorrectA =+ 1;

						             	    }
						             });
						          } else {
						          	console.log('choices is Clicked');
						          }


			             

			              if (counter === 0){
							     	  	//alert('time is up');
							     	  	clearInterval(countDown);
							     	  	outofTime3()
							     	  	Unanswered += 1;

     	  						}


            }, 1000);
     }

     function rightAnswer3(){
     									$('#clickHere').html(
			                 "<div class='question'>"+"Correct!"+"</div>"
			                 +"<img class='gif' src='assets/images/giphy03.gif'>")
					     	        setTimeout(function(){
					     	        	     console.log('Need to go to the next question!') 
					     	        	     Question4()       

					     	       	},5000);

     }
     function wrongAnswer3(){
     									$('#clickHere').html(
			                 "<div class='question'>"+"Nope!"+"</div>"
			                 +"<div class='question'>"+"The correct answer is &nbsp;"+questions[2].answer+"</div>"

			                 +"<img class='gif' src='assets/images/giphy04.gif'>")
					     	        setTimeout(function(){
					     	        	     console.log('Need to go to the next question!') 
					     	        	     Question4()      

					     	       	},5000);

     }
     function outofTime3(){
     	                 $('#clickHere').html(
			                 "<div class='question'>"+"Out of Time!"+"</div>"
			                 +"<div class='question'>"+"The correct answer is &nbsp;"+questions[2].answer+"</div>"

			                 +"<img class='gif' src='assets/images/giphy05.gif'>")
					     	        setTimeout(function(){
					     	        	     console.log('Need to go to the next question!')  

					     	        	      Question4()

					     	       	},5000);
     }

/*--------------------------------------------question 4------------------------------------------------------*/
          function Question4(){
     	      counter = 5;
     	      choicesClicked = false;

     	      var countDown = setInterval(function(){ 
                    counter--;
                   
			     	       $('#timer').html('Time Remaining:'+counter+'Seconds');
			     	       $('#clickHere').html(
					                 "<div class='question'>"+questions[3].question+"</div>")
			     	       for (var i=0; i < questions[3].choices.length; i++){
			     	       	      // console.log(i);			     	       	   
                           $('#clickHere').append(
					                 "<div class='choices' data-val='"+i+"'>"+questions[3].choices[i]+"</button>"+"</div>"

			                  	);
			                 	
			                }
			             if (choicesClicked === false){
						             $('#clickHere').on('click', '.choices', function(){
						             	    choicesClicked = true;
						             	    console.log('choice is clicked');
						             	    //console.log(this);
						             	    if ($(this).data('val')===2){
						             	    	   clearInterval(countDown);
						             	    	   rightAnswer4();
						             	    	   correctA =+ 1;
						             	    } else{
						             	    	clearInterval(countDown);
						             	    	   wrongAnswer4();
						             	    	   incorrectA =+ 1;

						             	    }
						             });
						          } else {
						          	console.log('choices is not Clicked');
						          }


			              

			              if (counter === 0){
							     	  	//alert('time is up');
							     	  	clearInterval(countDown);
							     	  	outofTime4()
							     	  	Unanswered += 1;

     	  						}


            }, 1000);
     }

     function rightAnswer4(){
     									$('#clickHere').html(
			                 "<div class='question'>"+"Correct!"+"</div>"
			                 +"<img class='gif' src='assets/images/giphy03.gif'>")
					     	        setTimeout(function(){
					     	        	     console.log('Need to go to the next question!') 
					     	        	     Question5()       

					     	       	},5000);

     }
     function wrongAnswer4(){
     									$('#clickHere').html(
			                 "<div class='question'>"+"Nope!"+"</div>"
			                 +"<div class='question'>"+"The correct answer is &nbsp;"+questions[3].answer+"</div>"

			                 +"<img class='gif' src='assets/images/giphy04.gif'>")
					     	        setTimeout(function(){
					     	        	     console.log('Need to go to the next question!') 
					     	        	     Question5()      

					     	       	},5000);

     }
     function outofTime4(){
     	                 $('#clickHere').html(
			                 "<div class='question'>"+"Out of Time!"+"</div>"
			                 +"<div class='question'>"+"The correct answer is &nbsp;"+questions[3].answer+"</div>"

			                 +"<img class='gif' src='assets/images/giphy05.gif'>")
					     	        setTimeout(function(){
					     	        	     console.log('Need to go to the next question!')  

					     	        	      Question5()

					     	       	},5000);
     }

/*--------------------------------------------question 5------------------------------------------------------*/

           function Question5(){
     	      counter = 5;
     	      choicesClicked = false;

     	      var countDown = setInterval(function(){ 
                   counter--;
                   
			     	       $('#timer').html('Time Remaining:'+counter+'Seconds');
			     	       $('#clickHere').html(
					                 "<div class='question'>"+questions[4].question+"</div>")
			     	       for (var i=0; i < questions[4].choices.length; i++){
			     	       	      // console.log(i);			     	       	   
                           $('#clickHere').append(
					                 "<div class='choices' data-val='"+i+"'>"+questions[4].choices[i]+"</button>"+"</div>"

			                  	);
			                 	
			                }
			             if (choicesClicked === false){
						             $('#clickHere').on('click', '.choices', function(){
						             	    choicesClicked = true;
						             	    console.log('choice is clicked');
						             	    console.log(this);
						             	    if ($(this).data('val')===3){
						             	    	   clearInterval(countDown);
						             	    	   rightAnswer5();
						             	    	   correctA =+ 1;
						             	    } else{
						             	    	clearInterval(countDown);
						             	    	   wrongAnswer5();
						             	    	   incorrectA =+ 1;

						             	    }
						             });
						          } else {
						          	console.log('choices is Clicked');
						          }


			          

			              if (counter === 0){
							     	  	//alert('time is up');
							     	  	clearInterval(countDown);
							     	  	Unanswered += 1;
							     	  	outofTime5()

     	  						}


            }, 1000);
     }

     function rightAnswer5(){
     									$('#clickHere').html(
			                 "<div class='question'>"+"Correct!"+"</div>"
			                 +"<img class='gif' src='assets/images/giphy03.gif'>")
					     	        setTimeout(function(){
					     	        	     console.log('Need to go to the next question!') 
					     	        	     score()       

					     	       	},5000);

     }
     function wrongAnswer5(){
     									$('#clickHere').html(
			                 "<div class='question'>"+"Nope!"+"</div>"
			                 +"<div class='question'>"+"The correct answer is &nbsp;"+questions[4].answer+"</div>"

			                 +"<img class='gif' src='assets/images/giphy04.gif'>")
					     	        setTimeout(function(){
					     	        	     console.log('Need to go to the next question!') 
					     	        	     score()      

					     	       	},5000);

     }
     function outofTime5(){
     	                 $('#clickHere').html(
			                 "<div class='question'>"+"Out of Time!"+"</div>"
			                 +"<div class='question'>"+"The correct answer is &nbsp;"+questions[4].answer+"</div>"

			                 +"<img class='gif' src='assets/images/giphy05.gif'>")
					     	        setTimeout(function(){
					     	        	     console.log('Need to go to the next question!')  

					     	        	      score()

					     	       	},5000);
			}
/*--------------------------------------------question 5------------------------------------------------------*/
    	function score(){
    	 								//clearInterval(countDown);
    	 								$('#clickHere').html(
			                 "<div class='question'>"+"All done, heres how you did!"+"</div>"
			                 +"<div class='question'>"+"Correct Answers: &nbsp;"+correctA+"</div>"
			                 +"<div class='question'>"+"Incorrect Answers: &nbsp;"+incorrectA+"</div>"
			                 +"<div class='question'>"+"Unanswered: &nbsp;"+Unanswered+"</div>"
			                 +"<div class='restart'>"+"Start Over?"+"</div>")




    }



})