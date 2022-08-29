let username = prompt("What's your name?");

console.log("Hi, " + username);

let questions = [
    "What is the color of the sky?",
    "What is the color of grass?",
    "What is/are the periodic element letter(s) of iron?"
];

let answers = [
    "blue",
    "green",
    "Fe"
];


function quizgame() {
    let correct = 0;
    let questionsAnswered = 0;
    
    for (newQ in questions) {
        
        let newAnswer = prompt(questions[newQ] + " Enter 'q' to end game");
        switch(newAnswer) {
            case "q":
                let data = [correct, questionsAnswered];
                return data;
            case answers[newQ]:
                correct++;
                questionsAnswered++;
                console.log("That's right!");
                break;
            default:
                questionsAnswered++;
                console.log("Not quite...");
                break;
        }
    }

    let data = [correct, questionsAnswered];
    return data;
}

function statistics(data) {
    console.log("Username: " + username);
    console.log("Questions answered: " + data[1]);
    console.log("Correct answers: " + data[0]);
}

statistics(quizgame());




