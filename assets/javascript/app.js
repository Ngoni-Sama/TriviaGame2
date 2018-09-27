$(document).ready(function () {

    var totalTime = 10;
    var correct = 0;
    var wrong = 0;
    var unanswered = 0;
    var timer;
    var currentTime = totalTime;
    var iterator = -1;

    var questions = [
        {
            prompt: "What is the most abundant element in the universe?",
            image: "The Scream.jpg",
            caption: "A man screaming on a bridge",
            answerChoices: [
                "Hydrogen",
                "Helium",
                "Nitrogen"],
            correctAnswer: "Hydrogen"
        },
        {
            prompt: "Which of these noble gases does NOT have 8 valence electrons",
            image: "The Scream.jpg",
            caption: "A man screaming on a bridge",
            answerChoices: [
                "Neon",
                "Argon",
                "Helium"
            ],
            correctAnswer: "Helium"
        },
        {
            prompt: "What's the lightest metal?",
            image: "The Scream.jpg",
            caption: "A man screaming on a bridge",
            answerChoices: [
                "Lithium",
                "Beryllium",
                "Aluminum"
            ],
            correctAnswer: "Lithium"
        },
        {
            prompt: "Which of these elements is found in emeralds?",
            image: "The Scream.jpg",
            caption: "A man screaming on a bridge",
            answerChoices: [
                "Calcium",
                "Beryllium",
                "Magnesium"
            ],
            correctAnswer: "Beryllium"
        },
        {
            prompt: "Which of these is found in borax?",
            image: "The Scream.jpg",
            caption: "A man screaming on a bridge",
            answerChoices: [
                "Potassium",
                "Boron",
                "Selenium"
            ],
            correctAnswer: "Boron"
        },
        {
            prompt: "This element is present in all organic compounds.",
            image: "The Scream.jpg",
            caption: "A man screaming on a bridge",
            answerChoices: [
                "Carbon",
                "Oxygen",
                "Hydrogen"
            ],
            correctAnswer: "Carbon"
        },
        {
            prompt: "What's the most abundant element in Earth's atmosphere?",
            image: "The Scream.jpg",
            caption: "A man screaming on a bridge",
            answerChoices: [
                "Carbon",
                "Oxygen",
                "Nitrogen"
            ],
            correctAnswer: "Nitrogen"
        },
        {
            prompt: "Which element is a staple of combustion?",
            image: "The Scream.jpg",
            caption: "A man screaming on a bridge",
            answerChoices: [
                "Nitrogen",
                "Oxygen",
                "Sulfur"
            ],
            correctAnswer: "Oxygen"
        },
        {
            prompt: "What's the most electronegative element?",
            image: "The Scream.jpg",
            caption: "A man screaming on a bridge",
            answerChoices: [
                "Hydrogen",
                "Fluorine",
                "Chlorine"
            ],
            correctAnswer: "Fluorine"
        },
        {
            prompt: "Which element is known for emitting an orange-red glow?",
            image: "The Scream.jpg",
            caption: "A man screaming on a bridge",
            answerChoices: [
                "Neon",
                "Sodium",
                "Argon"
            ],
            correctAnswer: "Argon"
        }
    ]

    console.log("javscript present");

    //implementing start button
    $(".start").on("click", function () {
        //exiting start screen, entering questions
        $(".opening-screen").hide();
        $(".question-screen").show();
        $("footer").show();

        nextQuestion();
    });

    //starts the timer
    function startTimer() {
        //console.log(currentTime);
        currentTime = totalTime;
        $(".time").text(currentTime);
        timer = setInterval(updateTime, 1000);
    }

    //updates the time displayed on the screen
    function updateTime() {
        currentTime--;
        $(".time").text(currentTime);

        //out of time
        if (currentTime === 0) {
            clearInterval(timer);
            checkAnswer();
            nextQuestion();
            //gameOver();
        }
    }

    //sees if user got question correct. adds element to periodic table if so
    function checkAnswer() {
        $("input").each(function () {
            //examining selected answer
            if (this.checked) {
                var selectedAnswer = $(this).attr("value");
                var correctAnswer = $(this).attr("data-correct");
                if (selectedAnswer === correctAnswer) {
                    console.log("correct!");
                    //adding element to periodic table
                    $("#"+correctAnswer).css("visibility","visible");
                    console.log("#"+correctAnswer);
                }
            }
        });
    }

    //takes user to next question
    function nextQuestion() {
        //starting countdown
        iterator++;
        startTimer();

        var question = questions[iterator];
        $(".question-container").empty();

        //displaying question to screen
        var prompt = $("<h2>");
        $(prompt).addClass("question");
        $(prompt).text(question.prompt);
        $(".question-container").append(prompt);

        //displaying answers
        var answers = document.createElement("form");
        $(answers).addClass("answers");
        $(".question-container").append(answers);

        for (var j = 0; j < question.answerChoices.length; j++) {
            //console.log("entered-loop");
            //var answer = document.createElement("div");
            //$(answer).addClass("answer-choice");
            var radio = "<input type='radio' name='answer-choice' class='answer-question-" + j + "'";
            // console.log(radio);
            var answerChoice = question.answerChoices[j];
            radio = radio + "value='" + answerChoice + "' ";

            var correctAnswer = question.correctAnswer;
            radio = radio + "data-correct='" + correctAnswer + "'>";

            var htmlLine;

            htmlLine = radio + answerChoice;

            // console.log(radio + correctAnswer);
            // console.log(radio);
            // console.log(htmlLine);
            $(answers).append(htmlLine);
            $(answers).append("<br>");
        }
    }

    $(".submit").on("click",function() {
        clearInterval(timer);
        checkAnswer();
        nextQuestion();
    });













});