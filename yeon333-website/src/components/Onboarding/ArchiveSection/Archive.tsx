import styled from '@emotion/styled';
import useViewport from '../../../hooks/useViewPort';

const Archive = () => {
  const { isMobile } = useViewport();
  return (
    <St.container>
      <St.title>Photo & Video Archive</St.title>
      <St.contentWrapper isMobile={isMobile}>
        <St.content>
          <video
            src='archive_video_3.mov'
            controls={false}
            autoPlay
            loop
            muted
            playsInline
          >
            Your browser does not support the video tag.
          </video>
        </St.content>
        <St.content>
          <video
            src='archive_video_1.mov'
            controls={false}
            autoPlay
            loop
            muted
            playsInline
          >
            Your browser does not support the video tag.
          </video>
        </St.content>
        <St.content>
          <video
            src='archive_video_2.mov'
            controls={false}
            autoPlay
            loop
            muted
            playsInline
          >
            Your browser does not support the video tag.
          </video>
        </St.content>
      </St.contentWrapper>
    </St.container>
  );
};

export default Archive;

const St = {
  container: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    min-height: 100vh;
    padding: 10rem 5rem;
  `,
  title: styled.p`
    font-size: 4.5rem;
    font-family: 'Abhaya Libre', sans-serif;
    font-weight: 800;
    line-height: 200%;
    margin-bottom: 5rem;
    text-align: center;
  `,
  contentWrapper: styled.div<{ isMobile: boolean }>`
    width: 100%;
    display: flex;
    flex-direction: ${({ isMobile }) => (isMobile ? 'column' : 'row')};
    justify-content: center;
    align-items: center;
    gap: 10rem;
  `,
  content: styled.div`
    width: 30rem;
    height: 45rem;
    overflow: hidden;
    border-radius: 2px;

    & img,
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `,
};
