import React, { useState } from 'react';

function App() {
  const questions = [
      {
        questionText: 'What is the capital of Italy?',
        answerChoices: [
          { answerText: 'Madrid', isCorrect: false },
          { answerText: 'Rome', isCorrect: true },
          { answerText: 'Budapest', isCorrect: false },
          { answerText: 'Toronto', isCorrect: false},
        ],
      },
      {
        questionText: 'How many Harry Potter books are there?',
        answerChoices: [
          { answerText: '2', isCorrect: false },
          { answerText: '4', isCorrect: false },
          { answerText: '5', isCorrect: false },
          { answerText: '7', isCorrect: true},
        ],
      },
      {
        questionText: 'Which video game franchise did Rockstar Games develop?',
        answerChoices: [
          { answerText: 'Grand Theft Auto', isCorrect: true },
          { answerText: 'The Elder Scrolls', isCorrect: false },
          { answerText: 'Uncharted', isCorrect: false },
          { answerText: 'Resident Evil', isCorrect: false},
        ],
      },
    ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const handleAnswerButtonClick = () => {
    const nextQuestion = currentQuestion + 1;
    if(nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }
  return (
    <div className='app'>
    {showScore ? (
        <div className='score-section'>You scored 1 out of {questions.length}</div>
      ) : (
        <>
        <div className='question-section'>
          <div className='question-count'>
              <span>Question 1</span>/{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
        </div>
        <div className='answer-section'>
          {questions[currentQuestion].answerChoices.map((answerChoice) => (
            <button onClick={handleAnswerButtonClick}>{answerChoice.answerText}</button>
          ))}
        </div>
      </>
    )}
    </div>
  );
}

export default App;
