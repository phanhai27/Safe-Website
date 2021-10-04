import Head from 'next/head'
import React from 'react'
import { getAllLanguageSlugs, getLanguage } from '../../lib/lang';
import { gaRunScript } from '../../lib/googleAnalytics'
import LanguageMenu from '../../components/LanguageMenu';
import ENV from '../../../env.json'

function EULAPage({ language, pageData, pageContent }) {
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
                <meta name="description" content={pageData.description} />

                <link rel="icon" href="/favicon.ico" sizes="32x32" type="image/png" />
                <link rel="stylesheet" href="/static/css/custom.css"/>
                <link rel="stylesheet" href="/static/css/bootstrap.min.css"/>
            </Head>
            <div className="top-lighthouse">
            <header>
                <div className="row justify-content-between">
                    <div className="col-2 logo-img d-flex align-items-center pl-5">
                        <a href={"/"+language+"/"}>
                            <img style={{display: 'block', maxWidth: "50px"}} src="/static/img/logo.png" alt="logo"/>
                        </a>
                        
                    </div>
                    <div className="col-6 text-right menu-main">
                    <a href={ENV.SIGN_UP_URL} className="btn my-2 font-weight-bold atlas-cta cta-blue menu-item signUp">Sign up</a>
                        <a href={ENV.SIGN_IN_URL} className="btn my-2 font-weight-bold atlas-cta cta-white menu-item">Sign in</a>
                        <a className="btn font-weight-bold language-link menu-item"><LanguageMenu/></a>
                    </div>
                </div>
            </header>
            </div>
            <div className="jumbotron jumbotron-fluid">
                <div dangerouslySetInnerHTML={{__html: content}}/>
            </div>
            <style jsx>{`
                #banner {        
                    background: url('/static/img/banner-bk.jpg');
                }
                .top-lighthouse {
                    background: #26314a
                }
                @media screen and (max-width: 992px) {
                    .menu-main {
                        display: flex;
                        align-items: center;
                        flex-wrap: wrap
                    }
                    .language-link {
                        order: -1
                    }
                    .menu-item {
                        display: block;
                        width: 100%
                    }
                    .menu-item > div {
                        justify-content: center
                    }
                    .signUp.menu-item {
                        width: auto;
                        margin: auto
                    }

                }
            `}</style>
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

    const filepath = path.join(process.cwd(),"src", "locales", lang, "eula.md");
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

export default EULAPage