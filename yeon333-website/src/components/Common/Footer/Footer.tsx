import styled from '@emotion/styled';
import React from 'react';

const Footer = () => {
  return (
    <St.container>
      <pre>
        reːˈbɔːrn | 2025 Global Media Graduation Exhibition{`\n`}2025.5.23 ~
        5.25 / 인사동 마루아트센터{`\n`}
        {`\n`}© yeon333. All rights reserved.
      </pre>
      <pre>
        Shin Sooyeon | sooy@soongsil.ac.kr{`\n`}Kim Hayeon | @soongsil.ac.kr
        {`\n`}Lee Yeonjae | @soongsil.ac.kr
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

    & pre:nth-child(2) {
      text-align: end;
    }
  `,
};
