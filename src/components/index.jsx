import React, { useState, useEffect, useRef } from 'react';
import './style.css';

export const CreditCardInput = () => {
  const [inputs, setInputs] = useState(['', '', '', '']);
  const [isValid, setIsValid] = useState(true);
  const inputRefs = useRef([]);

  const handleInputChange = (e, inputIndex) => {
    const value = e.target.value;

    if (/^[0-9]*$/.test(value)) {
      const newInputs = [...inputs];
      newInputs[inputIndex] = value;
      setInputs(newInputs);

      if (value.length === 4 && inputIndex < 3) {
        inputRefs.current[inputIndex + 1]?.focus();
      }
    }
  };

  const setInputRef = (element) => {
    inputRefs.current.push(element);
  };

  useEffect(() => {
    const allInputsFilled = inputs.every((input) => input.length === 4);
    setIsValid(allInputsFilled);
  }, [inputs]);

  return (
    <div className="credit-card-input-container">
      {inputs.map((input, index) => (
        <React.Fragment key={index}>
          <input
            className="credit-card-input"
            type="text"
            value={input}
            onChange={(e) => handleInputChange(e, index)}
            ref={(el) => setInputRef(el)}
            maxLength={4}
          />
          {index < 3 && <span> - </span>}
        </React.Fragment>
      ))}
      {!isValid && (
        <p className="credit-card-error-message">
          Číslo kreditní karty není platné.
        </p>
      )}
    </div>
  );
};
