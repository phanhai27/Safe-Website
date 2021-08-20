import ENV from '../../env.json'

export function reCaptchaScript() {
    var reCaptchaScript = document.createElement('script');
    reCaptchaScript.type = 'text/javascript';
    reCaptchaScript.src = "https://www.google.com/recaptcha/api.js?render=" + ENV.RECAPTCHA_KEY;
    document.head.appendChild(reCaptchaScript);
    reCaptchaScript.onload = () => {
    };
}
