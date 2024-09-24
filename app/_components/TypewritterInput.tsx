// components/TypewriterInput.tsx
import React, { useEffect, useState } from 'react';

const TypewriterInput: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [displayValue, setDisplayValue] = useState('');
  const fullText = 'Search OpenAI...';
  const typingSpeed = 150; // Typing speed in milliseconds

  useEffect(() => {
    let index = 0;

    const type = () => {
      if (index < fullText.length) {
        setDisplayValue((prev) => prev + fullText[index]);
        index++;
        setTimeout(type, typingSpeed);
      }
    };

    type();
  }, [fullText]);

  return (
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder={displayValue}
      style={{
        padding: '10px',
        fontSize: '18px',
        border: '2px solid #61dafb',
        borderRadius: '5px',
        outline: 'none',
        width: '300px',
        marginTop: '20px',
      }}
    />
  );
};

export default TypewriterInput;
