import React, { useState } from 'react';

const Answer = ({ updatePoints }) => {
  const [userAnswer, setUserAnswer] = useState('');

  const handleChange = (e) => {
    setUserAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePoints(userAnswer);
    setUserAnswer('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={userAnswer}
        onChange={handleChange}
        placeholder="Введите свой ответ"
      />
      <button type="submit">Проверить</button>
    </form>
  );
};

export default Answer;