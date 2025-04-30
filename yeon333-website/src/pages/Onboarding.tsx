import { lazy, Suspense } from 'react';
import Header from '../components/Common/Header/Header';
import Banner from '../components/Onboarding/BannerSection/Banner';
import VirtualInstallation from '../components/Onboarding/VirtualInstallationSection/VirtualInstallation';

// Lazy load components
const Introduction = lazy(
  () => import('../components/Onboarding/IntroductionSection/Introduction')
);
const Archive = lazy(
  () => import('../components/Onboarding/ArchiveSection/Archive')
);
const Footer = lazy(() => import('../components/Common/Footer/Footer'));

const Onboarding = () => {
  return (
    <>
      <Header />
      <Banner />
      <Suspense fallback={null}>
        <Introduction />
      </Suspense>
      <VirtualInstallation />
      <Suspense fallback={null}>
        <Archive />
        <Footer />
      </Suspense>
    </>
  );
};

export default Onboarding;
