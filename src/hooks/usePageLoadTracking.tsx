import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Tracker from 'tracking';

const usePageLoadTracking = (): void => {
  const router = useRouter();

  useEffect(() => {
    // push page load event to event tracker

    Tracker.push({
      event: 'page_load',
      url: router.pathname,
      meta: {
        isCSR: true
      }
    });
  }, [router.pathname]);
};

export default usePageLoadTracking;
