import { lazy, Suspense } from 'react';
import Banner from '../components/Onboarding/BannerSection/Banner';
import VirtualInstallation from '../components/Onboarding/VirtualInstallationSection/VirtualInstallation';

// Lazy load components
const Introduction = lazy(
  () => import('../components/Onboarding/IntroductionSection/Introduction')
);
const Archive = lazy(
  () => import('../components/Onboarding/ArchiveSection/Archive')
);

const Onboarding = () => {
  return (
    <>
      <Banner />
      <Suspense fallback={null}>
        <Introduction />
      </Suspense>
      <VirtualInstallation />
      <Suspense fallback={null}>
        <Archive />
      </Suspense>
    </>
  );
};

export default Onboarding;
