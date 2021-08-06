import Head from 'next/head'
import React from 'react'
import postData from './safeweb-remote-tagui-rpa.json'

function RPABlog() {
    React.useEffect( () => {
      document.querySelector("body").classList.add("single")
      document.querySelector("body").classList.add("is-preload")
    });

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
          <div id="wrapper">
            <header id="header">
              <h1><a href="/">Home</a></h1>
              <h1><a href="/blog">SafeWeb Stories</a></h1>
            </header>
            <div id="main">
                <article className="post">
                  <header>
                    <div className="title">
                      <h2><a href="#"> {postData.article.title} </a></h2>
                      <p> {postData.article.description} </p>
                    </div>
                    <div className="meta">
                      <time className="published" dateTime="2015-11-01"> {postData.article.date} </time>
                      <a href="#" className="author"><span className="name"> {postData.article.author} </span><img src={postData.article.avatar} alt="" /></a>
                    </div>
                  </header>
                  <span className="image featured"><img src="/static/img/remote_working.jpg" alt="" /></span>
                  <p> {postData.article.summary} </p>
                  <p> {postData.article.detail} </p>
                </article>
            </div>
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
          </div>
        </div>
    )
}

export default RPABlog