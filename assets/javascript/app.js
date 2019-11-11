$(document).ready(function(){

// GLOBAL VARIABLES

var currentQuestion; // Have one question at a time
var right; 
var wrong; 
var unanswered; 
var seconds; 
var time; 

// Variables to trigger new question
var answered; 
var userChoice;   

//==============
// BUTTONS
//==============

// Hide game in the start    
    $("#startGame").hide();
        
// Start game button
    $("#startButton").on("click", function(){
        $(this).hide();
        newGame();
    });

// Start a new game
$("#reset").on("click", function(){
    $(this).hide();
    newGame();
});

    function newGame(){
        $("#startGame").show();
        $("#finalScore").empty();
        $("#correctAnswers").empty();
        $("#incorrectAnswers").empty();
        $("#unanswered").empty();
        currentQuestion = 0;
        right = 0;
        wrong = 0;
        unanswered = 0;
        newQuestion();
    }

//==============
// QUESTIONS
//==============

function newQuestion(){
    
// Question number
$("#currentQuestion").html("Question " + (currentQuestion+1));
$(".question").html(questionBank[currentQuestion].question);

// Question loop
for(var i = 0; i <= 10; i++){
    var choices = $("<div>");
    choices.text(questionBank[currentQuestion].choicesList[i]);
    choices.attr({"data-index": i });
    choices.addClass("thisChoice");
    $(".choicesList").append(choices);
}

// Question results with image
$("#result").empty();
$("#correctedAnswer").empty();
answered = true;

//==============
// TIMER
//==============
function countdown(){
    seconds = 10;
    $("#timeTitle").html("<h3>Time Remaining");    
    $("#timeLeft").html(seconds);
    answered === true;
    time = setInterval(showCountdown, 1000);
}

countdown();

$(".thisChoice").on("click",function(){
        userChoice = $(this).data("index");
        clearInterval(time);
        answerPage();
    });
}
    
function showCountdown(){
    seconds--;
    if(seconds < 5) {
        $("#timeLeft").html(seconds);	
    } else {
        $("#timeLeft").html(seconds);	
    }
    if(seconds < 1){
        clearInterval(time);
        answered = false;
        answerPage();
    }
}
    
//==============
// RESULTS & ANSWERS
//==============
function answerPage(){
    $("#currentQuestion").empty();
    $(".thisChoice").empty(); 
    $(".question").empty();

var rightAnswerText = questionBank[currentQuestion].choicesList[questionBank[currentQuestion].answer];
var rightAnswers = questionBank[currentQuestion].answer;
    
// Check answers          
if((userChoice == rightAnswers) && (answered === true)){
    right++;
    $("#result").html(results.correct);
} else if((userChoice != rightAnswers) && (answered === true)){
    wrong++;
    $("#result").html(results.wrong);
    $("#correctedAnswer").append("The correct answer was: " + "<br/>" + rightAnswerText);
} else{
    unanswered++;
    $("#result").html(results.timeOut);
    $("#correctedAnswer").append("The correct answer was: " + "<br/>" + rightAnswerText);
    answered = true;
}
if(currentQuestion == (questionBank.length-1)){
    setTimeout(scoreboard, 2000);
} else{
    currentQuestion++;
    setTimeout(newQuestion, 4000);
}	
}
    
//==============
// SCOREBOARD
//==============
function scoreboard(){
    $("#timeLeft").empty();
    $("#result").empty();
    $("#correctedAnswer").empty();
    $("#finalScore").html(results.finished);
    $("#correctAnswers").html("Right: " + right);
    $("#wrongAnswers").html("Wrong: " + wrong);
    $("#unanswered").html("Missed: " + unanswered);
    $("#reset").addClass("btn btn-dark");
    $("#reset").show();
    $("#reset").html("Are you a little-stitious? Try again.");
}
    
//==============
// SCOREBOARD
//==============
   var questionBank = [
    {question: "When Jim impersonates he gives a list after saying, 'Bears eat beets.' What was the list?",
    choicesList: ["Bears. Beets. Battlestar Galactica", "Beets. Bears. Battlestar Galactica", "Beets, bears, beets", "Battlestar Galactica, Beets, Bears" ],
    answer: 0,
    correct: "Bears. Beets. Battlestar Galactica."},

    {question: "What's not part of Kevin's Famous Chili?",
    choicesList: ["Ancho chilis roasted by Kevin himself", "Diced whole tomatoes", "Grilled chicken", "Undercooked onions" ],
    answer: 2,
    correct: "Grilled chicken"},

    {question: "What makes Jim change his mind about interviewing for the VP of Sales?",
    choicesList: ["Cold feet", "Athlead", "A foil yogurt top", "Call from Pam" ],
    answer: 2,
    correct: "A foil yogurt top"},

    {question: "What does C.R.I.M.E. A.I.D. stand for?",
    choicesList: ["It doesn't stand for anything", "Crime Reduces Innoncence Makes Every Angry I Declare","Crime Really Isn't Making Everyone Angry I Declare", "CRIME Anger Innoncence Declaration" ],
    answer: 1,
    correct: "Crime Reduces Innocence Makes Everyone Angry I Declare"},

    {question: "What's the name of Michael Scarn's robot butler?",
    choicesList: ["Samuel", "Joseph", "Dwayne", "Derrik" ],
    answer: 0, 
    correct: "Samuel"},

    {question: "In the pilot, who started their first day at Dunder Mifflin Scranton?",
    choicesList: ["Jim Halpert", "Creed Bratton", "Meredith Palmer", "Ryan Howard"],
    answer: 3,
    correct: "Ryan Howard"},
  
    {question: "Which of these things does Prison Mike NOT claim to have been busted for?",
    choicesList: ["Stole", "Robbed", "Hurt a dementor", "Kidnapped president's son"],
    answer: 2,
    correct: "Hurt a dementor"},

    {question: "How many vasectomies does Michael claim to have had?",
    choicesList: ["One", "Two", "Three", "Four"],
    answer: 2,
    correct: "Three"},

    {question: "What musical did Jan and Michael see while dating? (Hint: It was mentioned at the dinner party in season 4.)",
    choicesList: ["Cats", "Wicked", "Stomp", "Rent"],
    answer: 1,
    correct: "Wicked"},

    {question: "When Pam was office manager in Season 7, she made everyone write down their New Year's Resolution. What was Michael's?",
    choicesList: ["Floss", "To do a cartwheel", "Help Kevin eat broccoli", "Drink less caffeine"],
    answer: 0,
    correct: "Floss"}

]

var results = {
    correct: "You and I are soup snakes.",
    wrong: "Before I do anything I ask myself, 'Would an idiot do that?' and if the answer is yes, I do not do that thing.",
    timeOut: "Times up. You all took a life here today. The life of the party.",
};
    
}); 