import styled from '@emotion/styled';
import { motion } from 'framer-motion'; // 추가

const Introduction = () => {
  return (
    <StIntro.container>
      <StIntro.motionTextBox
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <span>“riːˈbɔːrn”은 끊임없이 변화하는 입자의 흐름을 통해 </span>
        <span>생성과 소멸, 재탄생을 표현하는 미디어아트 작품입니다.</span>
      </StIntro.motionTextBox>

      <StIntro.motionTextBox
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: 'easeOut', delay: 0.3 }}
        viewport={{ once: true }}
      >
        <span>철제 구조물 위 초대형 패브릭을 캔버스로 활용하며</span>
        <span>
          역동적으로 변형되는 패브릭과 실시간으로 변화하는 빛의 형상이 웅장한
          시각적 서사를 만들어냅니다.
        </span>
      </StIntro.motionTextBox>
    </StIntro.container>
  );
};

export default Introduction;

// 스타일
const StIntro = {
  container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 15rem;
    gap: 3rem;
  `,
  motionTextBox: styled(motion.p)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    line-height: 150%;
  `,
};
