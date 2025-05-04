import styled from '@emotion/styled';
import useViewport from '../../../hooks/useViewPort';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const { isMobile } = useViewport();
  const navigate = useNavigate();

  return isMobile ? (
    <StMobile.container>
      <pre>
        2025 Global Media Graduation Exhibition{`\n`}2025.5.23 ~ 5.25 / 인사동
        마루아트센터
      </pre>
      <br />
      <p onClick={() => navigate('/team')}>Team 연'3'이</p>
      <pre>
        Shin Sooyeon | sooy@soongsil.ac.kr{`\n`}Kim Hayeon | hayeon525@naver.com
        {`\n`}Lee Yeonjae | prumy0319@gmail.com
        {`\n`}
        {`\n`}© yeon333. All rights reserved.
      </pre>
    </StMobile.container>
  ) : (
    <St.container>
      <pre>
        reːˈbɔːrn | 2025 Global Media Graduation Exhibition{`\n`}2025.5.23 ~
        5.25 / 인사동 마루아트센터{`\n`}
        {`\n`}© yeon333. All rights reserved.
      </pre>
      <pre>
        Shin Sooyeon | sooy@soongsil.ac.kr{`\n`}Kim Hayeon | hayeon525@naver.com
        {`\n`}Lee Yeonjae | prumy0319@gmail.com
      </pre>
    </St.container>
  );
};

export default Footer;

const St = {
  container: styled.footer`
    width: 100%;
    padding: 5rem 5rem 7rem;
    display: flex;
    justify-content: space-between;
    color: #929292;

    font-family: 'Poppins', sans-serif;
    font-size: 1.2rem;
    line-height: 130%;

    border-top: 0.1rem solid #6e6e6e;

    & pre:nth-of-type() {
      text-align: end;
    }
  `,
};

const StMobile = {
  container: styled.footer`
    width: 100%;
    padding: 2rem 2rem 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: #929292;

    font-family: 'Poppins', sans-serif;
    font-size: 1.3rem;
    line-height: 130%;

    border-top: 0.1rem solid #6e6e6e;

    & > p {
      color: #d3d3d3;
      text-decoration: underline;
      margin-bottom: 0.5rem;
    }
  `,
};
