
// the number of the question I am on from the app.js questions array
var currentQuestion =0;
// the score of the game
var score = 0;
// how we go through the array of questions. easy to add more questions if i want
var totQuestions = questions.length

var container = document.getElementById('quizContainer');
// get my question row from my html
var questionEl = document.getElementById('question');
// radio option 1
var opt1 = document.getElementById('opt1');
// radio option 2
var opt2 = document.getElementById('opt2');
// radio option 3
var opt3 = document.getElementById('opt3');
// radio option 4
var opt4 = document.getElementById('opt4');
// set the time for where my timer starts


var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');

// load my first question from the array along with the options and adding them to the html
// also letting you know which number question you are on
function loadQuestion (questionIndex) {
	var q = questions[questionIndex];
	questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	opt4.textContent = q.option4;

};




// loading the next question and if you have not selected an answer it will alert 'Select an Answer'
function loadNextQuestion() {
	var selectedOption = document.querySelector("input[type=radio]:checked")
	if(!selectedOption){
		alert("Select an Answer!");
		return;
		
	}

	var answer = selectedOption.value;
	if(questions[currentQuestion].answer == answer){
		score += 10;
	};

	selectedOption.checked = false;
	currentQuestion++;
	$("#result").hide();
	// last question will have the finish button
	if(currentQuestion == totQuestions -1){
		nextButton.textContent = 'Finish';
	}
	if (currentQuestion == totQuestions){
		clearTimeout(timerId);
		$("#result").show();
		container.style.display = 'none';
		resultCont.style.display = '';
		resultCont.textContent = 'Your Score: ' + score;
	}
	loadQuestion(currentQuestion);

	var number = 10;

	var intervalId;



	$("#nextButton").on("click", run);

	function run() {
		intervalId = setInterval(decrement, 1000);
	} 
	function decrement() {
		number--;
		$("#timer").html("<h2>"+"Time Left: " + number + "</h2>");

		if (number === 0) {
			stop();
			alert("Time Up!");
		}
	}

	function stop() {
		clearInterval(intervalId);
	}

}



loadQuestion(currentQuestion);