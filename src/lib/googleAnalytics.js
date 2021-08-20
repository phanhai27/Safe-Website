import ENV from '../../env.json'

const googleAnalyticsId = ENV.GOOGLE_ANALYTICS_ID;

export function gaRunScript() {
    var gaLibScript = document.createElement('script');
    gaLibScript.type = 'text/javascript';
    gaLibScript.src = "https://www.googletagmanager.com/gtag/js?id=" + googleAnalyticsId;
    document.head.appendChild(gaLibScript);
    gaLibScript.onload = () => {
    };

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
