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
        questionText: 'How many NHL teams are there?',
        answerChoices: [
          { answerText: '28', isCorrect: false },
          { answerText: '30', isCorrect: false },
          { answerText: '32', isCorrect: true },
          { answerText: '34', isCorrect: false},
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
  const [score, setScore] = useState(0);

  const [recordedScore, setRecordedScore] = useState(0);

  const resetStateClick =()=> {
    setCurrentQuestion(0)
    setShowScore(false)
    setScore(0)
    setRecordedScore(score)
  }

  const handleAnswerButtonClick = (isCorrect) => {
    if(isCorrect) {
      setScore(score + 1);
    }
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
        <div className='score-section'>You scored {score} out of {questions.length}
          <button onClick={resetStateClick} className="restart">Restart the Quiz</button>
          <div className='last-score'><p>Your Last Score: {recordedScore}</p></div>
        </div>
      ) : (
        <>
        <div className='question-section'>
          <h1>React Quiz</h1>
          <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
        </div>
        <div className='answer-section'>
          {questions[currentQuestion].answerChoices.map((answerChoice) => (
            <button onClick={() => handleAnswerButtonClick(answerChoice.isCorrect)}>{answerChoice.answerText}</button>
          ))}
        </div>
      </>
    )}
    </div>
  );
}

export default App;
