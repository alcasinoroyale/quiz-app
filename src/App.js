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

  return (
    <div className='app'>
    {false ? (
      <div className='score-section'>You scored 1 out of {questions.length}</div>
      ) : (
        <>
        <div className='question-section'>
          <div className='question-count'>
              <span>Question 1</span>{questions.length}
            </div>
            <div className='question-text'>This is where the question text should go</div>
        </div>
        <div className='answer-section'>
          <button>Answer 1</button>
          <button>Answer 2</button>
          <button>Answer 3</button>
          <button>Answer 4</button>
        </div>
      </>
    )}
    </div>
  );
}

export default App;
