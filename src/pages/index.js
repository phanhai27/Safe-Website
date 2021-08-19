import React from 'react';
import { useRouter } from 'next/router';
import i18next from 'i18next';

export default function Home() {
	const router = useRouter();

	React.useEffect(() => {
		(async () => {
			const response = await fetch('http://ip-api.com/json');
  			const myJson = await response.json();
			const { pathname } = router;
			const viLang = 'vi';
			if (pathname == '/' && myJson.countryCode == 'VN') {
				i18next.changeLanguage(viLang);
				router.push('/' + viLang);
			} else {
				router.push('/' + i18next.language.substring(0, 2));
			}
		})();
	});

	return null;
}
