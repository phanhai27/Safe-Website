import ENV from '../../env.json'

export const googleAnalyticsId = ENV.GOOGLE_ANALYTICS_ID;
export function gaRunScript() {
	var gaScript = document.createElement('script');
    gaScript.type = 'text/javascript';
    document.head.appendChild(gaScript);
    gaScript.onload = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', googleAnalyticsId);
    };
}
