import styled from '@emotion/styled';
import AnimationScene from './Model3D/AnimationModel';
import { motion } from 'framer-motion';

const VirtualInstallation = () => {
  return (
    <St.container>
      <St.title
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        Virtual Installation
      </St.title>
      <St.explain
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        실제 전시장에 설치된 구조물을 기반으로 제작된 3D 모델입니다. {`\n`}
        마우스로 회전하며 작품의 형태와 흐름을 볼 수 있습니다.
      </St.explain>
      <St.threeWrapper>
        <AnimationScene />
      </St.threeWrapper>
    </St.container>
  );
};

export default VirtualInstallation;

const St = {
  container: styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100vh;
    padding-top: 10rem;

    background-color: #000;
  `,
  title: styled(motion.p)`
    font-size: 4.5rem;
    font-family: 'Abhaya Libre', sans-serif;
    font-weight: 800;
    line-height: 200%;
    z-index: 1;
  `,
  explain: styled(motion.pre)`
    font-size: 1.6rem;
    font-family: 'Poppins', sans-serif;
    line-height: 150%;
    font-weight: 300;
    text-align: center;
    z-index: 1;
  `,
  threeWrapper: styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    flex: 1;
  `,
};
