import React, { useEffect, useRef } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { Mesh, MeshStandardMaterial } from 'three';
import {
  Stars,
  PerspectiveCamera,
  Text3D,
  Center,
  Float,
} from '@react-three/drei';

export const getStaticProps = async () => {
  return {
    props: { pageNumber: 5 },
  };
};

export default function Custom404() {
  return (
    <div className="404Container" style={{ minHeight: '80vh' }}>
      <Canvas style={{ position: 'absolute', top: 0, left: 0 }}>
        <Center>
          <Float floatIntensity={1.2} speed={1.5}>
            <Text3D
              font={'/fonts/chicken_pie.json'}
              bevelEnabled
              bevelSize={0.05}
              size={0.5}
              position={[0.3, 1, 0]} // Move "Page" 1 unit up
            >
              Page
              <meshNormalMaterial />
            </Text3D>
            <Text3D
              font={'/fonts/chicken_pie.json'}
              bevelEnabled
              bevelSize={0.05}
              size={0.5}
              position={[0.5, 0, 0]} // No vertical movement for "not"
            >
              not
              <meshNormalMaterial />
            </Text3D>
            <Text3D
              font={'/fonts/chicken_pie.json'}
              bevelEnabled
              bevelSize={0.05}
              size={0.5}
              position={[0, -1, 0]} // Move "found" 1 unit down
            >
              found
              <meshNormalMaterial />
            </Text3D>
          </Float>
        </Center>
      </Canvas>
    </div>
  );
}
