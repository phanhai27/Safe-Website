import Head from 'next/head'
import JQueryLib from './jquery-lib';
import Meta from './blog-meta'
import BlogJs from './blog-js'
import BlogCSS from './blog-css';

export default function BlogHead ({postData}) {
    return (
    <>
        <Head>
            <Meta postData={postData}/>
            <JQueryLib/>
            {/* <BlogCSS/> */}
            <link rel="stylesheet" href="/static/css/main.css" />
            <BlogJs/>            
        </Head>
    </>
    )
}
