import styled from '@emotion/styled';
import Logo from '../Logo/Logo';
import { useEffect, useState } from 'react';
import useViewport from '../../../hooks/useViewPort';

const Header = () => {
  const { isMobile } = useViewport();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // 스크롤 방향 감지
    if (currentScrollY > lastScrollY) {
      // 스크롤 내리는 중 → 헤더 숨김
      setIsVisible(false);
    } else {
      // 스크롤 올리는 중 → 헤더 보임
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);
  return isMobile ? (
    <StMobile.container>
      <Logo type='small' />
    </StMobile.container>
  ) : (
    <StHeader.container isVisible={isVisible}>
      <StHeader.wrapper>
        <StHeader.nav>
          <div>work note</div>
          <div>gallery</div>
        </StHeader.nav>
        <StHeader.logo>
          <Logo type='small' />
        </StHeader.logo>
        <StHeader.nav>about 연'3'이</StHeader.nav>
      </StHeader.wrapper>
    </StHeader.container>
  );
};

export default Header;

const StHeader = {
  container: styled.header<{ isVisible: boolean }>`
    transform: translateY(${({ isVisible }) => (isVisible ? '0' : '-100%')});
    transition: transform 0.3s ease-in-out;

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    padding: 0;
    margin: 0;
  `,
  wrapper: styled.div`
    position: relative;
    display: flex;
    gap: 5rem;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 100%;
    padding: 2.5rem 3rem;
  `,
  logo: styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;

    & > p {
      cursor: pointer;
    }
  `,
  nav: styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 5rem;
    font-size: 1.6rem;
    font-family: 'Nanum Myeongjo';
  `,
};

const StMobile = {
  container: styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    padding: 2rem;
    margin: 0;
  `,
};
