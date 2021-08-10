import '../i18n/init';

import i18next from 'i18next';

function App ({ Component, pageProps }) {
	i18next.changeLanguage(pageProps.language);
	return <Component {...pageProps} />;
};

export default App;
