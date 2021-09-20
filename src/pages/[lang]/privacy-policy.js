import Head from 'next/head'
import React from 'react'
import { getAllLanguageSlugs, getLanguage } from '../../lib/lang';
import { gaRunScript } from '../../lib/googleAnalytics'


function DownloadPage({ language, pageData, pageContent }) {
    React.useEffect(() => {
        gaRunScript();
    }, [])

    var md = require('markdown-it')({
        html: true,
        linkify: true,
        typography: true
      });
    var content = md.render(pageContent);
    return (
        <div>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <title>{pageData.title}</title>
                <link rel="icon" href="/static/img/favicon.png" sizes="32x32" type="image/png" />
            </Head>
            <div dangerouslySetInnerHTML={{__html: content}}/>
        </div>
    )
}

export async function getStaticPaths() {
    const paths = getAllLanguageSlugs();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const fs = require('fs');
    const path = require('path');
    const matter = require("gray-matter");

    const lang = getLanguage(params.lang);

    const filepath = path.join(process.cwd(),"src", "locales", lang, "privacy-policy.md");
    const text = fs.readFileSync(filepath, "utf8");
    const pageData = matter(text);

    return {
        props: {
            language: lang,
            pageData: pageData.data,
            pageContent: pageData.content,
		},
	};
}

export default DownloadPage