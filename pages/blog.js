import Head from 'next/head'
import blogData from '../blogpage.json'
import React, { Fragment } from 'react';

function Blog() {
    return (
        <div>
          <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />

            <title>{blogData.title}</title>
            <meta name="description" content={blogData.meta.description}/>

            <meta itemProp="name" content={blogData.title}/>
            <meta itemProp="description" content={blogData.meta.description}/>
            <meta itemProp="image" content={blogData.meta.image}/>

            <meta property="og:type" content="website"/>
            <meta property="og:url" content={blogData.meta.url}/>
            <meta property="og:title" content={blogData.title}/>
            <meta property="og:description" content={blogData.meta.description}/>
            <meta property="og:image" content={blogData.meta.image}/>

            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content={blogData.meta.url}/>
            <meta property="twitter:title" content={blogData.title}/>
            <meta property="twitter:description" content={blogData.meta.description}/>
            <meta property="twitter:image" content={blogData.meta.image}/>

            <link rel="icon" href="/static/img/favicon.ico" sizes="48x48" type="image/png"></link>

            <link rel="stylesheet" href="/static/css/main.css" />

            <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
            
            <script type="text/javascript" async src="https://www.googletagmanager.com/gtag/js?id=G-9F4WMSXE2C"></script>
            <script type="text/javascript" src="/static/js/ga.js"></script>

            <script type="text/javascript" src="/static/js/browser.min.js"></script>
            <script type="text/javascript" src="/static/js/breakpoints.min.js"></script>
            <script type="text/javascript" src="/static/js/util.js"></script>
            <script type="text/javascript" src="/static/js/main.js"></script>
          </Head>
            <div id="wrapper">
				<header id="header">
					<h1><a href="/">Home</a></h1>
					<h1><a href="/blog">SafeWeb Stories</a></h1>
				</header>

                <div id="main">
                    <article className="post">
                        {
                            blogData.posts.map((v, i) => (
                              <React.Fragment>
                                <header key={i}>
                                <div className="title">
                                    <h2><a href={"/blog/"+v.url}>{v.title}</a></h2>
                                    <p>{v.description}</p>
                                </div>
                                <div className="meta">
                                    <time className="published" dateTime="2015-11-01">{v.date}</time>
                                    <a href="#" className="author"><span className="name">{v.author}</span><img src={v.avatar} alt="" /></a>
                                </div>
						                    </header>
                                <p key={i}>{v.summary}</p>
                                <footer key={i}>
                                    <ul className="actions">
                                        <li><a href={"/blog/"+v.url} className="button large">Continue Reading</a></li>
                                    </ul>
                                </footer>
                              </React.Fragment>
                            ))
                        }
			    	</article>
				</div>

                <section id="sidebar">
					<section id="intro">
						<a href="/"><img src="/static/img/logo.png" alt="" width="60" height="60"/></a>
						<header>
							<h2>The future of working remotely</h2>
							<p>One day, robots will work for us so that we have more time for life.</p>
						</header>
					</section>
						<section id="footer">
							<ul className="icons">
								<li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
								<li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
								<li><a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
								<li><a href="#" className="icon solid fa-rss"><span className="label">RSS</span></a></li>
								<li><a href="#" className="icon solid fa-envelope"><span className="label">Email</span></a></li>
							</ul>
							<p className="copyright">&copy; SafeWeb. Design: <a href="http://html5up.net">HTML5 UP</a>.</p>
					</section>
				</section>
        </div>
    </div>
    )
}

export default Blog