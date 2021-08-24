import Head from 'next/head'
import JQueryLib from './jquery-lib';
import Meta from './blog-meta'
import BlogJs from './blog-js'

export default function BlogHead ({postData}) {
    return (
    <>
        <Head>
            <Meta postData={postData}/>
            <JQueryLib/>
            <link rel="stylesheet" href="/static/css/main.css" />
            <BlogJs/>            
        </Head>
    </>
    )
}
