import React, { useEffect, useRef } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { Mesh, BoxGeometry, MeshStandardMaterial, Object3D } from 'three';
import { Stars, PerspectiveCamera, Float } from '@react-three/drei';

extend({ Mesh, BoxGeometry, MeshStandardMaterial });

const Scene = ({ orientation = 0 }) => {
  const sceneRef = useRef();

  const targetRotationRef = useRef(0);

  useEffect(() => {
    targetRotationRef.current = orientation; // Update the target rotation when a new value is passed in
  }, [orientation]);

  useFrame(() => {
    if (
      sceneRef.current &&
      sceneRef.current.rotation.y !== targetRotationRef.current
    ) {
      const rotationDifference =
        targetRotationRef.current - sceneRef.current.rotation.y;
      const rotationStep = rotationDifference * 0.05;

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
        <Float floatIntensity={0.2} speed={0.5}>
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0.2}
            fade
            speed={1}
          />
        </Float>
      </scene>
    </>
  );
};

function Background({ orientation }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvasContainer = canvasRef.current;
    canvasContainer.style.opacity = '1';
  }, []);

  return (
    <div
      className="background"
      ref={canvasRef}
      style={{
        opacity: 0,
        transition: 'opacity 1s',
        minHeight: '100%',
      }}
    >
      <Canvas>
        <Scene orientation={orientation} />
      </Canvas>
    </div>
  );
}

export default Background;
