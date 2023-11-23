import React, { useState } from "react";

const QuestionForm = () => {
  const [inputValue, setInputValue] = useState("posez vôtre question ici");

  return (
    <div>
      <textarea
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></textarea>
      <button onClick={() => alert(inputValue)}>Alertez moi !</button>
    </div>
  );
};

export default QuestionForm;
