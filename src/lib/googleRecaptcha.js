import ENV from '../../env.json'

export function reCaptchaScript() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = "https://www.google.com/recaptcha/api.js?render=" + ENV.RECAPTCHA_KEY;
    document.head.appendChild(script);
    script.onload = () => {
    };
}
