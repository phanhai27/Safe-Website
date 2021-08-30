import Head from 'next/head'
import JQueryLib from './jquery-lib'
import BlogJs from './blog-js'

export default function BlogHead ({postData}) {
    return (
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

		    <link rel="icon" href="/favicon.ico" sizes="48x48" type="image/png"/>
            <JQueryLib/>
            <link rel="stylesheet" href="/static/css/main.css" />
            <BlogJs/>            
        </Head>
    )
}
