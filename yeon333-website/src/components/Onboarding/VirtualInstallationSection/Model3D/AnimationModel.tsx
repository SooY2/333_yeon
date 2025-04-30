import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import { Group, LoopOnce } from 'three';

export default function AnimationScene() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Canvas camera={{ position: [2, 2, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <AnimationModel />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}

function AnimationModel() {
  const groupRef = useRef<Group>(null);
  const { scene, animations } = useGLTF('/models/AnimatedMorphSphere.glb');
  const { actions } = useAnimations(animations, groupRef);

  useEffect(() => {
    if (animations.length > 0) {
      console.log('Available Animations:', animations); // 애니메이션 이름을 확인하기 위해 로그 출력
    }
  }, [animations]);

  const handleClick = () => {
    const action = actions['Globe']; // 'ship'을 실제 애니메이션 이름으로 수정 필요
    if (action) {
      action.reset();
      action.setLoop(LoopOnce, 1);
      action.play();
    }
  };

  return (
    <group ref={groupRef} onClick={handleClick}>
      <primitive object={scene} scale={1.5} />
    </group>
  );
}
