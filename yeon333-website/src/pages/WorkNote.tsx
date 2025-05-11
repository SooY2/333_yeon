import styled from '@emotion/styled';
import useViewport from '../hooks/useViewPort';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

const WorkNote = () => {
  const { isMobile } = useViewport();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <St.container
      isMobile={isMobile}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <St.title>V-LOG</St.title>
      <iframe
        src='https://www.youtube.com/embed/fxQcq5Hg3sE'
        title='YouTube video'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      />
    </St.container>
  );
};

export default WorkNote;

const St = {
  container: styled(motion.div)<{ isMobile: boolean }>`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: ${({ isMobile }) => (isMobile ? '10rem 3rem' : '10rem')};

    & iframe {
      ${({ isMobile }) =>
        isMobile ? 'width:100%;' : 'width: 80%; height: 80%;'};
    }
  `,
  title: styled.p`
    font-size: 4.5rem;
    font-family: 'Abhaya Libre', sans-serif;
    font-weight: 800;
    line-height: 200%;
    margin-bottom: 5rem;
    text-align: center;
  `,
};
