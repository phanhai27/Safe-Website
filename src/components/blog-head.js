import Head from 'next/head'
import JQueryLib from './jquery-lib'
import BlogJs from './blog-js'
import ENV from '../../env.json'

export default function BlogHead ({postData, lang}) {
    return (
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />

            <title>{postData.article.title} - SafeWeb</title>
            <meta name="description" content={postData.article.description}/>

            <meta itemProp="name" content={postData.article.title}/>
            <meta itemProp="description" content= {postData.article.description} />
            <meta itemProp="image" content={ENV.BASE_URL + postData.article.picture}/>

            <meta property="og:type" content="website"/>
            <meta property="og:url" content={ENV.BASE_URL + "/" + lang + "/" + postData.article.url}/>
            <meta property="og:title" content={postData.article.title}/>
            <meta property="og:description" content={postData.article.description}/>
            <meta property="og:image" content={ENV.BASE_URL + postData.article.picture}/>

            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content={ENV.BASE_URL + "/" + lang + "/" + postData.article.url}/>
            <meta property="twitter:title" content={postData.article.title}/>
            <meta property="twitter:description" content={postData.article.description}/>
            <meta property="twitter:image" content={ENV.BASE_URL + postData.article.picture}/>

		    <link rel="icon" href="/favicon.ico" sizes="48x48" type="image/png"/>
            <JQueryLib/>
            <link rel="stylesheet" href="/static/css/main.css" />
            <BlogJs/>            
        </Head>
    )
}
