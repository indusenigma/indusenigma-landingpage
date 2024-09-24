import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Mesh } from 'three';

const AnimatedSearchBox: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const boxRef = useRef<Mesh>(null);

  const handleFocus = () => {
    if (boxRef.current) {
      boxRef.current.scale.set(1.2, 1.2, 1.2); // Scale up
    }
  };

  const handleBlur = () => {
    if (boxRef.current) {
      boxRef.current.scale.set(1, 1, 1); // Scale back down
    }
  };

  return (
    <div>
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <mesh ref={boxRef} onPointerEnter={handleFocus} onPointerLeave={handleBlur}>
          <boxGeometry args={[3, 1, 0.5]} />
          <meshStandardMaterial color="lightblue" />
        </mesh>
      </Canvas>
      <input
        type="text"
        ref={inputRef}
        placeholder="Ask me anything..."
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          padding: '10px',
          fontSize: '18px',
          border: 'none',
          borderRadius: '5px',
          outline: 'none',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
          zIndex: 1,
        }}
      />
    </div>
  );
};

export default AnimatedSearchBox;