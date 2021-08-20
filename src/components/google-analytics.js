import ENV from '../../env.json'

export default function GoogleAnalytics () {
    return (
    <>
        <script type="text/javascript" async src={"https://www.googletagmanager.com/gtag/js?id=" + ENV.GOOGLE_ANALYTICS_ID}></script>
        <script type="text/javascript" src="/static/js/ga.js"></script>
    </>
    )
}
