import { lazy, Suspense } from 'react';
import Banner from '../components/Onboarding/BannerSection/Banner';
import VirtualInstallation from '../components/Onboarding/VirtualInstallationSection/VirtualInstallation';
import LiveExhibition from '../components/Onboarding/LiveExhibitionSection/LiveExhibition';

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
      <LiveExhibition />
      <Suspense fallback={null}>
        <Archive />
      </Suspense>
    </>
  );
};

export default Onboarding;
