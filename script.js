$(document).ready(function(){

var magic8Ball = {};

magic8Ball.listOfAnswers = ["I don’t think so...", "For sure!", "LOL", "In your dreams", "Nah..", "I wouldn't bet on it...", "WTF?", "You nuts..try again..", "YAAAAAAS!!" ];

magic8Ball.askQuestion = function(question){

	$("#8ball").effect( "shake" );

  var randomNumber = Math.random();
  var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
  var randomIndex = Math.floor(randomNumberForListOfAnswers);
  var answer = this.listOfAnswers[randomIndex];

  $("#answer").hide();
  $("#answer").fadeIn(4000);
  $("#answer").text( answer );

	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");

  console.log(question);
  console.log(answer);
  };

  $("#answer").hide();

  var onClick = function() {
  var question = prompt("ASK A YES/NO QUESTION!");

  magic8Ball.askQuestion(question);
};

  $("#questionButton").click( onClick );
	$("#answer").hide();

  $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");


   setTimeout(
       function() {

       }, 500);
});
