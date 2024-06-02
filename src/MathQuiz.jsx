import React, { useState , useEffect} from 'react';
import Answer from './Answer';
import './styles.css';

const MathQuiz = () => {
  const generateRandomNumber = () => Math.floor(Math.random() * 10);
  
  const [a, setA] = useState(generateRandomNumber());
  const [b, setB] = useState(generateRandomNumber());
  const [score, setScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);

  useEffect(() => {
    setA(generateRandomNumber());
    setB(generateRandomNumber());
    setIsCorrect(null);
  }, [score]);

  const updatePoints = (userAnswer) => {
    const correctAnswer = a + b;
    if (parseInt(userAnswer, 10) === correctAnswer) {
      setScore(score + 1);
      setIsCorrect(true);
    } else {
      setScore(score - 1);
      setIsCorrect(false);
    }
  };

  return (
    <div className="math-quiz">
      <h1>Математическая викторина</h1>
      <div className="question">
        {a} + {b} = ?
      </div>
      <div className="score">
        Ваш балл: {score}
      </div>
      <Answer updatePoints={updatePoints} />
      {isCorrect === true && <div className="correct">Правильно!</div>}
      {isCorrect === false && <div className="incorrect">Неправильно. Попробуйте еще раз.</div>}
    </div>
  );
};

export default MathQuiz;