import styled from '@emotion/styled';
import { PROFILE_INFO } from '../constants/PROFILE_INFO';

const Team = () => {
  return (
    <St.container>
      <St.title>
        Team <span>연'3'이</span>
      </St.title>
      <St.section>
        {PROFILE_INFO.map(({ name, img, role }) => (
          <StProfile.container key={name}>
            <img src={img} alt={name} />
            <p>{name}</p>
            <p>{role}</p>
          </StProfile.container>
        ))}
      </St.section>
    </St.container>
  );
};

export default Team;

const St = {
  container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10rem;
  `,
  title: styled.p`
    font-size: 4.5rem;
    font-family: 'Abhaya Libre', sans-serif;
    font-weight: 300;
    line-height: 200%;
    margin-bottom: 5rem;
    text-align: center;

    & span {
      font-family: 'Nanum Myeongjo';
      font-size: 3rem;
    }
  `,
  section: styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10rem;
  `,
};

const StProfile = {
  container: styled.div`
    width: 28rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    font-family: 'Poppins', sans-serif;
    font-size: 1.8rem;
    font-weight: 200;
    line-height: 150%;
    & img {
      width: 100%;
      border-radius: 3px;
      margin-bottom: 3rem;
    }

    & p {
      align-self: baseline;
    }
  `,
};
