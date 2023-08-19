let playerScore = 0;
  
function showQuestion(question, correctAnswer,amount) {
    const playerAnswer = prompt(`${question}\n\nWhat's your answer?`);
    if (playerAnswer !== null) {
        const showPlayerAnswer = playerAnswer.trim().toLowerCase();
        const showCorrectAnswer = correctAnswer.split(":")[1].trim().toLowerCase();
        
        if (showPlayerAnswer === showCorrectAnswer) {
            alert(`Correct! WOW your answer is Right.`);
            playerScore += parseInt(amount.slice(1)); 
            document.getElementById("player-score").textContent = `$${playerScore}`;
        } else {
            alert(`Incorrect! oops no correct answer is : ${correctAnswer}`);
            playerScore -= parseInt(amount.slice(1)); 
            document.getElementById("player-score").textContent = `$${playerScore}`;      
        }
    }
}




