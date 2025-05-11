import styled from '@emotion/styled';
import Logo from '../Logo/Logo';
import { useEffect, useState } from 'react';
import useViewport from '../../../hooks/useViewPort';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import MenuBtn from '../Buttons/MenuBtn';

const Header = () => {
  const navigate = useNavigate();
  const { isMobile } = useViewport();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  //모바일 헤더
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  //모바일헤더 스크롤 x
  useEffect(() => {
    if (isMobileMenu) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isMobileMenu]);

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
    <StMobile.MobileContainer>
      <AnimatePresence>
        <StMobile.container isVisible={isVisible} isMobileMenu={isMobileMenu}>
          <div onClick={() => navigate('/')}>
            <Logo type='small' />
          </div>
          <MenuBtn
            isOpen={isMobileMenu}
            toggle={() => setIsMobileMenu((prev) => !prev)}
          />
        </StMobile.container>
        {isMobileMenu && (
          <StMobile.menuContainer
            key='menu'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <StMobile.nav
              onClick={() => {
                setIsMobileMenu(false);
                navigate('/');
              }}
            >
              HOME
            </StMobile.nav>
            <StMobile.nav
              onClick={() => {
                setIsMobileMenu(false);
                navigate('/work-note');
              }}
            >
              V-LOG
            </StMobile.nav>
            <StMobile.nav
              onClick={() => {
                setIsMobileMenu(false);
                navigate('/team');
              }}
            >
              TEAM
            </StMobile.nav>
          </StMobile.menuContainer>
        )}
      </AnimatePresence>
    </StMobile.MobileContainer>
  ) : (
    <StHeader.container isVisible={isVisible}>
      <StHeader.wrapper>
        <StHeader.nav>
          <div onClick={() => navigate('/work-note')}>work note</div>
          <div>gallery</div>
        </StHeader.nav>
        <StHeader.logo onClick={() => navigate('/')}>
          <Logo type='small' />
        </StHeader.logo>
        <StHeader.nav onClick={() => navigate('/team')}>
          <div>about 연'3'이</div>
        </StHeader.nav>
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
    background-color: #000;
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
    z-index: 11;

    & div {
      cursor: pointer;
    }
  `,
};

const StMobile = {
  MobileContainer: styled.div`
    display: flex;
    flex-direction: column;
  `,
  container: styled(StHeader.container)<{
    isVisible: boolean;
    isMobileMenu: boolean;
  }>`
    transform: ${({ isMobileMenu, isVisible }) =>
      isMobileMenu
        ? 'none'
        : isVisible
        ? 'translateY(0)'
        : 'translateY(-100%)'};

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
    padding: 2rem;
    margin: 0;

    background-color: #000;
  `,
  menuContainer: styled(motion.div)`
    position: fixed;
    width: 100%;
    height: calc(100dvh - 8rem);
    bottom: 0;
    z-index: 10;
    background-color: #000;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;
  `,
  nav: styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 5rem;
    font-size: 2rem;
    font-family: 'Nanum Myeongjo';
    x & div {
      cursor: pointer;
    }
  `,
};
