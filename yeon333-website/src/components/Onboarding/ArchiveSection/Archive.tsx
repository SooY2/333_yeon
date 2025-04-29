import styled from '@emotion/styled';

const Archive = () => {
  return (
    <St.container>
      <St.title>Photo & Video Archive</St.title>
      <St.contentWrapper>
        <St.content>
          <img src='archive1_img.jpeg' />
        </St.content>
        <St.content>
          <video src='IMG_6788.mov' controls={false} autoPlay loop muted>
            Your browser does not support the video tag.
          </video>
        </St.content>
        <St.content>
          <video src='banner_video.mp4' controls={false} autoPlay loop muted>
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
    height: 100vh;
    padding: 10rem 20rem;
  `,
  title: styled.p`
    font-size: 4.5rem;
    font-family: 'Abhaya Libre', sans-serif;
    font-weight: 800;
    line-height: 200%;
    margin-bottom: 5rem;
    text-align: center;
  `,
  contentWrapper: styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 5rem;
  `,
  content: styled.div`
    width: 20rem;
    height: 30rem;
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
