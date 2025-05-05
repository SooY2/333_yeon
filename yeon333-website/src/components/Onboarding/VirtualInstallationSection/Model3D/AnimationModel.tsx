import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import { Group, LoopOnce } from 'three';
import styled from '@emotion/styled';
import useViewport from '../../../../hooks/useViewPort';

export default function AnimationScene() {
  return (
    <St.container>
      <Canvas camera={{ position: [-2, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} castShadow />
        <AnimationModel />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </St.container>
  );
}

const St = {
  container: styled.div`
    width: 100%;
    height: 100%;
  `,
};

function AnimationModel() {
  const groupRef = useRef<Group>(null);
  const { scene, animations } = useGLTF('/models/0505_Structure.glb');
  const { actions } = useAnimations(animations, groupRef);

  const { isMobile } = useViewport();

  useEffect(() => {
    if (animations.length > 0) {
      console.log('Available Animations:', animations); // 애니메이션 이름을 확인하기 위해 로그 출력
    }
  }, [animations]);

  const handleClick = () => {
    const action = actions['animation_0']; // 'ship'을 실제 애니메이션 이름으로 수정 필요
    if (action) {
      action.reset();
      action.setLoop(LoopOnce, 1);
      action.play();
    }
  };

  return (
    <group ref={groupRef} onClick={handleClick}>
      <primitive object={scene} scale={isMobile ? 0.005 : 0.008} />
    </group>
  );
}
