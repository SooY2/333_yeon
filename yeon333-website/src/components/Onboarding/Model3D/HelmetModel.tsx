// src/components/HelmetModel.tsx
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Helmet() {
  const { scene } = useGLTF('/models/DamagedHelmet.glb'); // public 경로 기준

  return <primitive object={scene} scale={1} />;
}

export default function HelmetModel() {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Helmet />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
