import styled from '@emotion/styled';
import useViewport from '../../../hooks/useViewPort';
import { motion } from 'framer-motion';

const LiveExhibition = () => {
  const { isMobile } = useViewport();
  return (
    <St.container>
      <St.title
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        viewport={{ once: false }}
      >
        Live Exhibition
      </St.title>
      <St.explain></St.explain>
      <St.contentWrapper isMobile={isMobile}>
        <St.content>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/HdY5jDWCIAI?si=hhySOuyvl1T4zOHg'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
          ></iframe>
        </St.content>
      </St.contentWrapper>
      <St.musicby>backgroud music by 이준형</St.musicby>
    </St.container>
  );
};

export default LiveExhibition;

const St = {
  container: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    min-height: 100vh;
    padding: 10rem 5rem;

    background-color: #000;
  `,
  title: styled(motion.p)`
    font-size: 4.5rem;
    font-family: 'Abhaya Libre', sans-serif;
    font-weight: 800;
    line-height: 200%;
    margin-bottom: 5rem;
    text-align: center;
  `,
  explain: styled(motion.pre)`
    font-size: 1.6rem;
    font-family: 'Poppins', sans-serif;
    line-height: 150%;
    font-weight: 300;
    text-align: center;
    z-index: 1;
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

    & iframe {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `,
  musicby: styled.p`
    font-size: 1.5rem;
    margin-top: 5rem;
  `,
};
