import Header from '../components/Common/Header/Header';
import Archive from '../components/Onboarding/ArchiveSection/Archive';
import Banner from '../components/Onboarding/BannerSection/Banner';
import Introduction from '../components/Onboarding/IntroductionSection/Introduction';
import VirtualInstallation from '../components/Onboarding/VirtualInstallationSection/VirtualInstallation';

const Onboarding = () => {
  return (
    <>
      <Header />
      <Banner />
      <Introduction />
      <VirtualInstallation />
      <Archive />
    </>
  );
};

export default Onboarding;
