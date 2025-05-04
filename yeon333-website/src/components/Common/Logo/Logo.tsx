import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

const Logo = ({ type }: { type: 'large' | 'regular' | 'small' }) => {
  const [isWindow, setisWindow] = useState(false);

  useEffect(() => {
    const isWindowDevice = /windows/i.test(navigator.userAgent);
    setisWindow(isWindowDevice);
    console.log(isWindowDevice);
  }, []);
  return (
    <StLogo type={type} dataDevice={isWindow ? 'window' : 'other'}>
      ri<span>&#x02D0;</span>&#x02c8;bɔ<span>&#x02D0;</span>rn
    </StLogo>
  );
};

export default Logo;

const StLogo = styled.p<{
  type: 'large' | 'regular' | 'small';
  dataDevice: 'window' | 'other';
}>`
  font-family: 'Abril Fatface', sans-serif;

  font-size: ${({ type }) =>
    type === 'large' ? '11.5rem' : type === 'regular' ? '6rem' : '2.8rem'};

  font-weight: ${({ type }) =>
    type === 'large' ? '500' : type === 'regular' ? '400' : '100'};

  & span {
    letter-spacing: ${({ type, dataDevice }) => {
      if (dataDevice === 'window') {
        return '0';
      } else {
        return type === 'large'
          ? '-6rem'
          : type === 'regular'
          ? '-3rem'
          : '-1.5rem';
      }
    }};
  }
`;
