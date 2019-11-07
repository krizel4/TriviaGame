$(document).ready(function(){

// Slash page with button to enter the trivia game
    $("#start-button").on("click", startTrivia.startTimer);

});
``
// Global Variables
var questions = []
var answer
var right = 0;
var wrong = 0;
var timer

// User clicks start button to begin trivia

// Timer starts when the first question is prompted

// Questions to appear on screen with answers to select. Questions will rotate randomly through the question bank.

// After an answer is selected, user will be notified whether they're right or wrong. Add to the correct/wrong scoreboard as it goes along.

// Announce in the end of the user has won or lost

// Give the option to play again

// If they chose yes, restart game with a new set of questions

// If they chose no, bring up sad giphy

// Question bank

var questionBank = [
    {question: "When Jim impersonates he gives a list after saying, 'Bears eat beets.' What was the list?",
    answer: ["Bears. Beets. Battlestar Galactica", "Beets. Bears. Battlestar Galactica", "Beets, bears, beets", "Battlestar Galactica, Beets, Bears" ],
    correct: "Bears. Beets. Battlestar Galactica."},

    {question: "What's not part of Kevin's Famous Chili?",
    answer: ["Ancho chilis roasted by Kevin himself", "Diced whole tomatoes", "Grilled chicken", "Undercooked onions" ],
    correct: "Grilled chicken"},

    {question: "What makes Jim change his mind about interviewing for the VP of Sales?",
    answer: ["Cold feet", "Athlead", "A foil yogurt top", "Call from Pam" ],
    correct: "A foil yogurt top"},

    {question: "What does C.R.I.M.E. A.I.D. stand for?",
    answer: ["It doesn't stand for anything", "Crime Reduces Innoncence Makes Every Angry I Declare","Crime Really Isn't Making Everyone Angry I Declare", "CRIME Anger Innoncence Declaration" ],
    correct: "Crime Reduces Innocence Makes Everyone Angry I Declare"},

    {question: "What's the name of Michael Scarn's robot butler?",
    answer: ["Samuel", "Joseph", "Dwayne", "Derrik" ],
    correct: "Samuel"},

    {question: "What's the name of Michael Scarn's robot butler?",
    answer: ["Samuel", "Joseph", "Dwayne", "Derrik" ],
    correct: "Samuel"},

    {question: "In the pilot, who started their first day at Dunder Mifflin Scranton?",
    answer: ["Jim Halpert", "Creed Bratton", "Meredith Palmer", "Ryan Howard"],
    correct: "Ryan Howard"},
  
    {question: "In season 2, what Dundie award does Phyllis take home?",
    answer: ["Bushiest Beaver", "Spicy Curry", "Whitest Sneakers", "Busiest Beaver"],
    correct: "Bushiest Beaver"},

    {question: "Which of these things does Prison Mike NOT claim to have been busted for?",
    answer: ["Hurt a dementor", "Robbed", "Stole", "Kidnapped president's son"],
    correct: "Hurt a dementor"},

    {question: "How many vasectomies does Michael claim to have had?",
    answer: ["One", "Two", "Three", "Four"],
    correct: "Three"},

    {question: "What musical did Jan and Michael see while dating? (Hint: It was mentioned at the dinner party in season 4.)",
    answer: ["Cats", "Wicked", "Stomp", "Rent"],
    correct: "Wicked"},

    {question: "When Pam was office manager in Season 7, she made everyone write down their New Year's Resolution. What was Michael's?",
    answer: ["Floss", "To do a cartwheel", "Help Kevin eat broccoli", "Drink less caffeine"],
    correct: "Floss"},

]