import styled from '@emotion/styled';
import AnimationScene from '../Model3D/AnimationModel';

const VirtualInstallation = () => {
  return (
    <St.container>
      <St.title>Virtual Installation</St.title>
      <St.explain>
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100vh;
    padding-top: 10rem;
  `,
  title: styled.p`
    font-size: 4.5rem;
    font-family: 'Abril Fatface', sans-serif;
    line-height: 200%;
  `,
  explain: styled.pre`
    font-size: 1.6rem;
    font-family: 'Poppins', sans-serif;
    line-height: 150%;
    font-weight: 300;
    text-align: center;
  `,
  threeWrapper: styled.div`
    width: 100%;
    flex: 1;
  `,
};
