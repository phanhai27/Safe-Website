import Head from 'next/head'
import JQueryLib from './jquery-lib'
import BlogJs from './blog-js'
import ENV from '../../env.json'

export default function BlogHead ({postData, lang}) {
    return (
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />

            <title>{postData.title + "- SafeWeb"}</title>
            <meta name="description" content={postData.description}/>

            <meta itemProp="name" content={postData.title + "- SafeWeb"}/>
            <meta itemProp="description" content= {postData.description} />
            <meta itemProp="image" content={ENV.BASE_URL + postData.picture}/>

            <meta property="og:type" content="website"/>
            <meta property="og:url" content={ENV.BASE_URL + "/" + lang + "/" + postData.url + "/"}/>
            <meta property="og:title" content={postData.title + "- SafeWeb"}/>
            <meta property="og:description" content={postData.description}/>
            <meta property="og:image" content={ENV.BASE_URL + postData.picture}/>

            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content={ENV.BASE_URL + "/" + lang + "/" + postData.url + "/"}/>
            <meta property="twitter:title" content={postData.title + "- SafeWeb"}/>
            <meta property="twitter:description" content={postData.description}/>
            <meta property="twitter:image" content={ENV.BASE_URL + postData.picture}/>

		    <link rel="icon" href="/favicon.ico" sizes="48x48" type="image/png"/>
            <JQueryLib/>
            <link rel="stylesheet" href="/static/css/main.css" />
            <BlogJs/>            
        </Head>
    )
}
