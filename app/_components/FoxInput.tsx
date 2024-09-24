// components/FoxInput.tsx
import React, { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Mesh } from 'three';

const FoxInput: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const traceRef = useRef<Mesh>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const tracePosition = (length: number) => {
    if (traceRef.current) {
      traceRef.current.scale.set(length / 10, 0.1, 0.1);
    }
  };

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        {/* The fox (a placeholder for now) */}
        <mesh position={[0, 0, 0]} onClick={() => tracePosition(inputText.length)}>
          <coneGeometry args={[0.5, 1, 5]} />
          <meshStandardMaterial color="orange" />
        </mesh>

        {/* Trace line */}
        <mesh ref={traceRef} position={[0, -0.5, 0]}>
          <boxGeometry args={[1, 0.1, 0.1]} />
          <meshStandardMaterial color="lightblue" />
        </mesh>

        <OrbitControls />
      </Canvas>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Type your input..."
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          padding: '10px',
          fontSize: '18px',
          border: '2px solid #61dafb',
          borderRadius: '5px',
          outline: 'none',
          zIndex: 1,
        }}
      />
    </div>
  );
};

export default FoxInput;
