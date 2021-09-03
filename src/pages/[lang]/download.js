import Head from 'next/head'
import React from 'react'
import { getAllLanguageSlugs, getLanguage } from '../../lib/lang';
import { gaRunScript } from '../../lib/googleAnalytics'
import JQueryLib from '../../components/jquery-lib';
import BootstrapLib from '../../components/bootstrap-lib';

function DownloadPage({ language, downloadData, htmlMeta }) {
    React.useEffect(() => {
        gaRunScript();

        var checkversion = document.createElement('script');
        checkversion.type = 'text/javascript';
        checkversion.src = '/static/js/checkversion.js'
        document.head.appendChild(checkversion);
        checkversion.onload = () => {};
    }, [])

    const stylingUp = {        
        visibility: "visible",
        animationDuration: "2s",
        animationDelay: "0.2s",
        animationName: "fadeInUp"
    }
    const stylingLeft = {        
        visibility: "visible",
        animationDuration: "2s",
        animationDelay: "0.2s",
        animationName: "fadeInLeft"
    }
    
    const stylingLogo = {
        width: "200px",
        height: "200px",
        float: "left",
        padding: "50px 50px 50px 50px"
    }

    return (
        <div>
          <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <title>{downloadData.title}</title>

            <meta name="description" content={htmlMeta.meta.description} />
    
            <meta itemProp="name" content={downloadData.title}/>
            <meta itemProp="description" content={htmlMeta.meta.description}/>
            <meta itemProp="image" content={htmlMeta.meta.image}/>

            <meta property="og:type" content="website"/>
            <meta property="og:url" content={htmlMeta.meta.url}/>
            <meta property="og:title" content={downloadData.title}/>
            <meta property="og:description" content={htmlMeta.meta.description}/>
            <meta property="og:image" content={htmlMeta.meta.image}/>

            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content={htmlMeta.meta.url}/>
            <meta property="twitter:title" content={downloadData.title}/>
            <meta property="twitter:description" content={htmlMeta.meta.description}/>
            <meta property="twitter:image" content={htmlMeta.meta.image}/>
            
            <link rel="icon" href="/static/img/favicon.png" sizes="32x32" type="image/png"/>
            <link rel="stylesheet" href="/static/css/bootstrap.min.css"/>
            <link rel="stylesheet" href="/static/font-awesome-4.7.0/css/font-awesome.min.css"/>
            <link rel="stylesheet" href="/static/css/download.css"/>
            <JQueryLib/>
            <BootstrapLib/>
          </Head>
          <div><a href={"/" + language}><img src="/static/img/logo.png" alt="logo" style={stylingLogo}/></a></div>
          <div className="padding">
            <div className="col-md-12">
                <div className="wow fadeInUp animated" data-wow-duration="2s" data-wow-delay="0.2s" style={stylingUp}>
                    <h2>{downloadData.title}</h2>
                    <p> {downloadData.message} </p>
                </div>
                <div className="buttons"> 
                    <a id="dlink" href={"/download/"+downloadData.windows.filename} className="btn btn-info btn-lg" data-wow-duration="2s" data-wow-delay="0.2s" style={stylingLeft}><i className="fa fa-windows fa-2x"></i> Download<br/> <small>{downloadData.windows.version}</small></a> 
                </div>
            </div>
          </div>
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

    const filepath = path.join(process.cwd(),"src", "locales", lang, "download.md");
    const text = fs.readFileSync(filepath, "utf8");
    const downloadData = matter(text);

    const indexFilePath = path.join(process.cwd(),"src", "locales", lang, "index.md");
    const indexText = fs.readFileSync(indexFilePath, "utf8");
    const metadata = matter(indexText);


    return {
		props: {
            language: lang,
            downloadData: downloadData.data,
            htmlMeta: metadata.data,
		},
	};
}

export default DownloadPage