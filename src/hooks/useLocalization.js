import {useRouter} from 'next/router';
import {useCallback, useEffect, useState} from 'react';

import string from '../constants/localization/locale';

const useLocalization = () => {
  const router = useRouter();
  const {pathname, asPath, query, locale, locales, defaultLocale} = router;
  const [stringLocal, setStringLocal] = useState(string[locale]);

  let storgeData = null;
  // check localstorage
  if (typeof window !== 'undefined') {
    storgeData = localStorage.getItem('lang');
  }

  useEffect(() => {
    setStringLocal(string[locale]);
    localStorage.setItem('lang', locale);
  }, [locale]);

  const toggleLang = useCallback(() => {
    router.push({pathname, query}, asPath, {
      locale: locale === 'ar' ? 'en' : 'ar',
    });
  }, [asPath, pathname, locale, query, router]);

  return {stringLocal, toggleLang, locale};
};

export default useLocalization;
