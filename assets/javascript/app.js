

var questions =[{
	"question": "What was Jim Morrison of The Doors nickname?",
	"option1":"The Lizard King",
	"option2":"Slowhand",
	"option3":"The Madhatter",
	"option4":"Jimmy",
	"answer":"1"
}, {
	"question": "Which of these is a Jimi Hendrix album?",
	"option1":"Abbey Road",
	"option2":"Pet Sounds",
	"option3":"Tommy",
	"option4":"Electric Ladyland",
	"answer":"4"
}, {
	"question": "What music festival made the 'Summer of Love' known to the mainstream?",
	"option1":"Woodstock",
	"option2":"Monterrey Pop Festival",
	"option3":"Coachella",
	"option4":"SXSW",
	"answer":"2"
},{
	"question": "What famous guitarist was featured on Eric Clapton's song 'Layla'?",
	"option1":"Pete Townsend",
	"option2":"Duane Allmann",
	"option3":"BB King",
	"option4":"Keith Richards",
	"answer":"2"
}, {
	"question": "What are the names of The Beatles",
	"option1":"Eric, Bob, Randy, Dwight",
	"option2":"Derrick, Jim, Pete, Rob",
	"option3":"John, Paul, George, Ringo",
	"option4":"Ringo, George, Joe, John",
	"answer":"3"
},]


var currentQuestion = 0;
var score = 0;
var totalQuestions = questions.length;

function loadQuestion (questionIndex) {
	var q = questions[questionIndex];
	$("#question").html(q["question"]);
	$("#opt1").html(q["option1"]);
	$("#opt2").html(q["option2"]);
	$("#opt3").html(q["option3"]);
	$("#opt4").html(q["option4"]);


	console.log(q);
};




function loadNextQuestion (questionIndex) {
	var selectedOption = $('input[type=radio]:checked');
	$(!"<input>").on("click", function() {
		event.preventDefault()
		alert('You have to choose one!');


	
	});

	var answer = $(this).val();
	if (questions[currentQuestion].answer==answer){
		score +=1;
	}
	selectedOption.checked = false;
	currentQuestion++;
	if(currentQuestion == totalQuestions -1){
		$("#nextButton").html('Finish');
	}
	if(currentQuestion == totalQuestions){
		$("#container1").html();
		$("#result").html();
		$("#result").html('Your score: ' + score);
	
	}
	console.log(currentQuestion);
}

var number = 20;
var intervalId;
$("#nextButton").on("click", run);

function run() {
	intervalId = setInterval(decrement, 1000);
}

function decrement() {
	number--;

	$("#timer").html("<h2>" + "Time Left: " + number + "</h2>");
	if (number === 0) {

			clearTimeout(intervalId);
			loadNextQuestion().fadeIn


		alert("Time Up!")
	}
}



















