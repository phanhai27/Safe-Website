import Head from 'next/head'
import postData from './kid-control.json'

function KidControlBlog() {
    return (
        <div>
            <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />

            <title>{postData.title}</title>
            <meta name="description" content={postData.meta.description}/>

            <meta itemProp="name" content={postData.title}/>
            <meta itemProp="description" content= {postData.meta.description} />
            <meta itemProp="image" content={postData.meta.image}/>

            <meta property="og:type" content="website"/>
            <meta property="og:url" content={postData.meta.url}/>
            <meta property="og:title" content={postData.title}/>
            <meta property="og:description" content={postData.meta.description}/>
            <meta property="og:image" content={postData.meta.image}/>

            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content={postData.meta.url}/>
            <meta property="twitter:title" content={postData.title}/>
            <meta property="twitter:description" content={postData.meta.description}/>
            <meta property="twitter:image" content={postData.meta.image}/>

		        <link rel="icon" href="/static/img/favicon.ico" sizes="48x48" type="image/png"/>

            <link rel="stylesheet" href="/static/css/main.css" />

            <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
            
            <script type="text/javascript" async src="https://www.googletagmanager.com/gtag/js?id=G-9F4WMSXE2C"></script>
            <script type="text/javascript" src="/static/js/ga.js"></script>

            <script type="text/javascript" src="/static/js/browser.min.js"></script>
            <script type="text/javascript" src="/static/js/breakpoints.min.js"></script>
            <script type="text/javascript" src="/static/js/util.js"></script>
            <script type="text/javascript" src="/static/js/main.js"></script>
          </Head>
          <div> {postData.article.title} </div>
        </div>
    )
}

export default KidControlBlog