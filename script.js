function showQuestion(question, correctAnswer) {
    const playerAnswer = prompt(`${question}\n\nWhat's your answer?`);
    if (playerAnswer !== null) {
        if (playerAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
            alert(`Correct! You answered correctly.`);
        } else {
            alert(`Incorrect! The correct answer is: ${correctAnswer}`);
        }
    }
}
