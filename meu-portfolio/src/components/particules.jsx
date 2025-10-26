// Particles.jsx
import React, { useMemo, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Particless({exploded, setExploded, count = 1000 }) {
  const pointsRef = useRef();
  

  // posições iniciais, seeds para movimento oscilante e direções de explosão
  const { positions, seeds, directions } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const seeds = new Float32Array(count);
    const directions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      // inicia pequenas no centro (spread = 1-2)
      positions[i3 + 0] = (Math.random() - 0.5) * 3;
      positions[i3 + 1] = (Math.random() - 0.5) * 3;
      positions[i3 + 2] = (Math.random() - 0.5) * 3;

      seeds[i] = Math.random() * Math.PI * 2;

      // vetor de direção aleatório para explosão
      const dir = new THREE.Vector3(
        (Math.random() - 0.5),
        (Math.random() - 0.5),
        (Math.random() - 0.5)
      ).normalize();
      directions[i3 + 0] = dir.x;
      directions[i3 + 1] = dir.y;
      directions[i3 + 2] = dir.z;
    }

    return { positions, seeds, directions };
  }, [count]);

  useFrame(({ clock }) => {
    if (!pointsRef.current?.geometry?.attributes.position) return;
    const pos = pointsRef.current.geometry.attributes.position.array;
    const t = clock.getElapsedTime();

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      // movimento oscilante leve no centro
      pos[i3 + 0] += Math.cos(t + seeds[i]) * 0.003;
      pos[i3 + 1] += Math.sin(t + seeds[i]) * 0.003;

      if (exploded) {
        // movimento de explosão
        pos[i3 + 0] += directions[i3 + 0] * 0.05;
        pos[i3 + 1] += directions[i3 + 1] * 0.05;
        pos[i3 + 2] += directions[i3 + 2] * 0.05;
      }
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;

    // rotação global opcional
    pointsRef.current.rotation.y = t * 0.05;
  });

  return (
    <points
      ref={pointsRef}
      position={[0, 0, 5]}
    >
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        attach="material"
        color={"#FFFFff"}
        size={0.05}
        sizeAttenuation={true}
        transparent={true}
        opacity={0.5}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
