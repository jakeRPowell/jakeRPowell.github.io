import React, { useEffect, useRef } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { Mesh, BoxGeometry, MeshStandardMaterial } from 'three';
import Star from './Star';
import { Stars, PerspectiveCamera } from '@react-three/drei';

extend({ Mesh, BoxGeometry, MeshStandardMaterial });

const Scene = ({ orientation }) => {
  const sceneRef = useRef();
  const targetRotationRef = useRef(0);

  useEffect(() => {
    targetRotationRef.current = orientation; // Update the target rotation when a new value is passed in
  }, [orientation]);

  useFrame(() => {
    // Update scene rotation based on the targetRotationRef
    if (sceneRef.current.rotation.y !== targetRotationRef.current) {
      const rotationDifference =
        targetRotationRef.current - sceneRef.current.rotation.y;
      const rotationStep = rotationDifference * 0.05; // Adjust the rotation step to control the smoothness

      if (Math.abs(rotationDifference) < Math.abs(rotationStep)) {
        sceneRef.current.rotation.y = targetRotationRef.current;
      } else {
        sceneRef.current.rotation.y += rotationStep;
      }
    }
  });

  return (
    <>
      <scene ref={sceneRef}>
        <PerspectiveCamera position={[0, 0, 10]} />
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0.2}
          fade
          speed={1}
        />
      </scene>
    </>
  );
};

function Background({ orientation }) {
  return (
    <div className="background">
      <Canvas>
        <Scene orientation={orientation} />
      </Canvas>
    </div>
  );
}

export default Background;
