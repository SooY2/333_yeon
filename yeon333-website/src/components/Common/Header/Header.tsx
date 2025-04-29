import styled from '@emotion/styled';
import Logo from '../Logo/Logo';

const Header = () => {
  return (
    <StHeader.container>
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
  container: styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
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
