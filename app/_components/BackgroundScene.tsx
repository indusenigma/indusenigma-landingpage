// src/components/VirtualKeyboard.tsx
import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Box, Text } from '@react-three/drei';

const keys = [
  { char: 'Q', position: [-3.5, 1, 0] },
  { char: 'W', position: [-2.5, 1, 0] },
  { char: 'E', position: [-1.5, 1, 0] },
  { char: 'R', position: [-0.5, 1, 0] },
  { char: 'T', position: [0.5, 1, 0] },
  { char: 'Y', position: [1.5, 1, 0] },
  { char: 'U', position: [2.5, 1, 0] },
  { char: 'I', position: [3.5, 1, 0] },
  { char: 'O', position: [4.5, 1, 0] },
  { char: 'P', position: [5.5, 1, 0] },
  { char: 'A', position: [-3, 0.5, 0] },
  { char: 'S', position: [-2, 0.5, 0] },
  { char: 'D', position: [-1, 0.5, 0] },
  { char: 'F', position: [0, 0.5, 0] },
  { char: 'G', position: [1, 0.5, 0] },
  { char: 'H', position: [2, 0.5, 0] },
  { char: 'J', position: [3, 0.5, 0] },
  { char: 'K', position: [4, 0.5, 0] },
  { char: 'L', position: [5, 0.5, 0] },
  { char: 'Z', position: [-2.5, 0, 0] },
  { char: 'X', position: [-1.5, 0, 0] },
  { char: 'C', position: [-0.5, 0, 0] },
  { char: 'V', position: [0.5, 0, 0] },
  { char: 'B', position: [1.5, 0, 0] },
  { char: 'N', position: [2.5, 0, 0] },
  { char: 'M', position: [3.5, 0, 0] },
];

const KeyboardKey: React.FC<{ char: string; position: [number, number, number]; onKeyPress: (key: string) => void }> = ({ char, position, onKeyPress }) => {
  const ref = React.useRef<any>(null);

  const handleClick = () => {
    activateKey(char);
  };

  const activateKey = (key: string) => {
    onKeyPress(key);
    if (ref.current) {
      ref.current.scale.set(1.1, 1.1, 1.1);
      setTimeout(() => {
        ref.current.scale.set(1, 1, 1);
      }, 150);
    }
  };

  return (
    <Box ref={ref} args={[0.8, 0.4, 0.1]} position={position} onClick={handleClick}>
      <meshStandardMaterial color="#007bff" />
      <Text position={[0, 0, 0.1]} fontSize={0.2} color="white" anchorX="center" anchorY="middle">
        {char}
      </Text>
    </Box>
  );
};

const VirtualKeyboard: React.FC = () => {
  const handleKeyPress = (key: string) => {
    console.log(`Key pressed: ${key}`); // Output the pressed key
  };

  useEffect(() => {
    const handleKeyboardEvent = (event: KeyboardEvent) => {
      const key = event.key.toUpperCase();
      if (keys.find(k => k.char === key)) {
        handleKeyPress(key);
      }
    };

    window.addEventListener('keydown', handleKeyboardEvent);
    
    return () => {
      window.removeEventListener('keydown', handleKeyboardEvent);
    };
  }, []);

  return (
    <Canvas style={{ height: '100vh', backgroundColor: '#f0f0f0' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {keys.map((key) => (
        <KeyboardKey key={key.char} char={key.char} position={key.position as [number,number,number]} onKeyPress={handleKeyPress} />
      ))}
    </Canvas>
  );
};

export default VirtualKeyboard;
