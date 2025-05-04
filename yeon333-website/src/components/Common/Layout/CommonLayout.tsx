import { lazy } from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';

const Footer = lazy(() => import('../Footer/Footer'));

const CommonLayout = () => {
  return (
    <St.container>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </St.container>
  );
};

export default CommonLayout;

const St = {
  container: styled.div`
    & main {
      width: 100%;
      min-height: 100vh;
    }
  `,
};
