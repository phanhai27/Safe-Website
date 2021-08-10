import React from 'react'
import BlogHeadMeta from '../components/blog-head'
import BlogHeader from '../components/blog-header'
import BlogFooter from '../components/blog-footer'
import BlogIntro from '../components/blog-intro'

import blogData from '../locales/en/blog.json'

function Blog() {
  React.useEffect( () => {
    document.querySelector("body").classList.add("is-preload")
  });

    return (
        <div>
          <BlogHeadMeta postData={blogData}/>
            <div id="wrapper">
              <BlogHeader/>
                <div id="main">
                    <article className="post">
                        {
                            blogData.posts.map((v, i) => (
                              <React.Fragment key={Math.random()}>
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
					<BlogIntro/>
          <BlogFooter/>
				</section>
        </div>
    </div>
    )
}

export default Blog