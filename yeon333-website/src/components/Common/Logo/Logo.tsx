import styled from '@emotion/styled';

const Logo = ({ type }: { type: 'large' | 'regular' | 'small' }) => {
  return (
    <StLogo type={type}>
      ri<span>&#x02D0;</span>&#x02c8;bɔ<span>&#x02D0;</span>rn
    </StLogo>
  );
};

export default Logo;

const StLogo = styled.p<{ type: 'large' | 'regular' | 'small' }>`
  font-family: 'Abril Fatface', sans-serif;

  font-size: ${({ type }) =>
    type === 'large' ? '11.5rem' : type === 'regular' ? '6rem' : '2.8rem'};

  font-weight: ${({ type }) =>
    type === 'large' ? '500' : type === 'regular' ? '400' : '100'};

  & span {
    letter-spacing: ${({ type }) =>
      type === 'large' ? '-6rem' : type === 'regular' ? '-3rem' : '-1.5rem'};
  }
`;
