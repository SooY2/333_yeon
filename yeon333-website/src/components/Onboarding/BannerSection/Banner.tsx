import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import Logo from '../../Common/Logo/Logo';
import useViewport from '../../../hooks/useViewPort';

const Banner = () => {
  const { isMobile } = useViewport();
  return (
    <StBanner.container>
      <StBanner.videoWrapper>
        <StBanner.video src='banner_video.mp4' autoPlay loop muted playsInline>
          Your browser does not support the video tag.
        </StBanner.video>
      </StBanner.videoWrapper>
      <StBanner.textWrapper>
        <StBanner.title>
          {isMobile ? <Logo type='regular' /> : <Logo type='large' />}
        </StBanner.title>
        <StBanner.subTitle isMobile={isMobile}>
          2025 GLOBAL MEDIA{`\n`}GRADUATION EXIBITION
        </StBanner.subTitle>
      </StBanner.textWrapper>
    </StBanner.container>
  );
};

export default Banner;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 0.7;
  }
`;

const StBanner = {
  container: styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
  `,
  videoWrapper: styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
  `,
  video: styled.video`
    top: 0;
    left: 0;
    width: 100%;
    height: 80%;
    object-fit: cover;
  `,
  textWrapper: styled.div`
    margin: 8rem;
    margin-bottom: 15rem;
    display: flex;
    flex-direction: column;
    opacity: 0;
    animation: ${fadeIn} 3s ease-in-out forwards;
  `,
  title: styled.div`
    margin-bottom: 3rem;
  `,
  subTitle: styled.pre<{ isMobile: boolean }>`
    font-size: ${({ isMobile }) => (isMobile ? '2rem' : '3.5rem')};
    font-family: 'Abril Fatface', sans-serif;
    line-height: 120%;
  `,
};
