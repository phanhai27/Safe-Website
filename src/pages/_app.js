import '../i18n/init';
import i18next from 'i18next';
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';

function App ({ Component, pageProps }) {
	i18next.changeLanguage(pageProps.language);
	useEffect(() => {
		TagManager.initialize({ gtmId: "GTM-W4FP622" })
	  }, []);
	return <Component {...pageProps} />;
};

export default App;
