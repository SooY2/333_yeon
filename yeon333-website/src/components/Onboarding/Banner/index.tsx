import styled from '@emotion/styled';

const Banner = () => {
  return (
    <StBanner.container>
      <StBanner.videoWrapper>
        <StBanner.video src='banner_video.mp4' autoPlay loop muted>
          Your browser does not support the video tag.
        </StBanner.video>
      </StBanner.videoWrapper>
      <StBanner.textWrapper>
        <StBanner.title>
          ri<span>&#x02D0;</span>&#x02c8;bɔ<span>&#x02D0;</span>rn
        </StBanner.title>
        <StBanner.subTitle>2025 GLOBAL MEDIA</StBanner.subTitle>
        <StBanner.subTitle>GRADUATION EXIBITION</StBanner.subTitle>
      </StBanner.textWrapper>
    </StBanner.container>
  );
};

export default Banner;

const StBanner = {
  container: styled.div`
    position: relative;
    width: 100vw;
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
  `,
  title: styled.h1`
    font-size: 12rem;
    font-family: 'Abril Fatface', sans-serif;
    margin-bottom: 3rem;

    & span {
      letter-spacing: -7rem;
    }
  `,
  subTitle: styled.p`
    font-size: 4rem;
    font-family: 'Abril Fatface', sans-serif;
    line-height: 120%;
  `,
};
