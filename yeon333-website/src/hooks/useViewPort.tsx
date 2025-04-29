import { useLayoutEffect, useState } from 'react';

function useViewport() {
  const [width, setWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);
  const [isTablet, setIsTablet] = useState(
    1025 > window.innerWidth && window.innerWidth >= 769
  );
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1025);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleResize = () => {
    setWidth(window.innerWidth);
    setIsMobile(window.innerWidth < 769 || window.outerWidth < 769);
    setIsTablet(
      (1025 > window.innerWidth && window.innerWidth >= 769) ||
        (1025 > window.outerWidth && window.outerWidth >= 769)
    );
    setIsDesktop(window.innerWidth >= 1025);
  };

  useLayoutEffect(() => {
    handleResize();
    setIsLoaded(true);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return {
    width,
    isMobile,
    isTablet,
    isDesktop,
    isLoaded,
  };
}
export default useViewport;
