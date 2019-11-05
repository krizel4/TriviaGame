$(document).ready(function(){

// Slash page with button to enter the trivia game
    $("#start-button").on("click", startTrivia.startTimer);

});

// Global Variables

// Timer to start the question

// Questions to appear on screen with answers to select

// After an answer is selected, user will be notified whether they're right or wrong.

// Move on to the next question

// Randomize questions every time

// Tally all the right and wrong answers

// Announce in the end of the user has won or lost

// Restart game with a new set of questions

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
]