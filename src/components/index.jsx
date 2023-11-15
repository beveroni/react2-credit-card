import React, { useState } from 'react';
import './style.css';

// export const CreditCardInput = () => {
//   const [input1, setInput1] = useState(0);
//   const [input2, setInput2] = useState(0);
//   const [input3, setInput3] = useState(0);
//   const [input4, setInput4] = useState(0);

//   const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

//   const handleInputChange = (e, inputIndex) => {
//     const value = e.target.value;
//     switch (inputIndex) {
//       case 1:
//         setInput1(value);
//         break;
//       case 2:
//         setInput2(value);
//         break;
//       case 3:
//         setInput3(value);
//         break;
//       case 4:
//         setInput4(value);
//         break;
//       default:
//         break;
//     }

//     if (value.length === 4 && inputIndex < 4) {
//       inputRefs[inputIndex].current.focus();
//     }
//   };

//   return (
//     <div className="credit-card-input-container">
//       <input
//         className="credit-card-input"
//         type="text"
//         value={input1}
//         onChange={(e) => handleInputChange(e, 1)}
//         ref={inputRefs[0]}
//         maxLength={4}
//       />
//       <span> - </span>
//       <input
//         className="credit-card-input"
//         type="text"
//         value={input2}
//         onChange={(e) => handleInputChange(e, 2)}
//         ref={inputRefs[1]}
//         maxLength={4}
//       />
//       <span> - </span>
//       <input
//         className="credit-card-input"
//         type="text"
//         value={input3}
//         onChange={(e) => handleInputChange(e, 3)}
//         ref={inputRefs[2]}
//         maxLength={4}
//       />
//       <span> - </span>
//       <input
//         className="credit-card-input"
//         type="text"
//         value={input4}
//         onChange={(e) => handleInputChange(e, 4)}
//         ref={inputRefs[3]}
//         maxLength={4}
//       />
//     </div>
//   );
// };

export const CreditCardInput = () => {
  const [inputs, setInputs] = useState(['', '', '', '']);
  const inputRefs = inputs.map(() => React.createRef());

  const handleInputChange = (e, inputIndex) => {
    const value = e.target.value;

    if (/^[0-9]*$/.test(value)) {
      const newInputs = [...inputs];
      newInputs[inputIndex] = value;
      setInputs(newInputs);

      if (value.length === 4 && inputIndex < 3) {
        inputRefs[inputIndex + 1].current.focus();
      }
    }
  };

  return (
    <div className="credit-card-input-container">
      {inputs.map((input, index) => (
        <React.Fragment key={index}>
          <input
            className="credit-card-input"
            type="text"
            value={input}
            onChange={(e) => handleInputChange(e, index)}
            ref={inputRefs[index]}
            maxLength={4}
          />
          {index < 3 && <span> - </span>}
        </React.Fragment>
      ))}
    </div>
  );
};
