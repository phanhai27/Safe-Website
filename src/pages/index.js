import React from 'react';
import { useRouter } from 'next/router';
import i18next from 'i18next';

export default function Home() {
	const router = useRouter();

	const detectCountry=()=>{
		fetch('http://ip-api.com/json'
		,{
		  headers : { 
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		   }
		}
		)
		.then(function(response){
			return response.json();
		})
		.then(function(myJson) {
			if (myJson.countryCode = 'VN') {
				i18next.changeLanguage('vi');
			}
		});
	};

	React.useEffect(() => {
		detectCountry();
		
		const { pathname } = router;
		if (pathname == '/') {
			router.push('/' + i18next.language.substring(0, 2));
		}
	});

	return null;
}
