import React from 'react'
import { getAllLanguageSlugs, getLanguage } from '../../lib/lang';
import BlogHeadMeta from '../../components/blog-head'
import BlogHeader from '../../components/blog-header'
import BlogFooter from '../../components/blog-footer'
import BlogIntro from '../../components/blog-intro'
import { gaRunScript } from '../../lib/googleAnalytics'

function Blog({ language, blogHead, blogBody}) {

  React.useEffect( () => {
    gaRunScript();
    document.querySelector("body").classList.add("is-preload")
  });

    return (
        <div>
          <BlogHeadMeta postData={blogHead}/>
            <div id="wrapper">
              <BlogHeader lang={language} menu={blogHead.menu}/>
                <div id="main">
                    <article className="post">
                        {
                            blogBody.posts.map((v, i) => (
                              <React.Fragment key={Math.random()}>
                                <header key={i}>
                                <div className="title">
                                    <h2><a href={"/" + language + "/blog/" + v.url}>{v.title}</a></h2>
                                    <p>{v.description}</p>
                                </div>
                                <div className="meta">
                                    <time className="published" dateTime="2015-11-01">{v.date}</time>
                                    <a href="#" className="author"><span className="name">{v.author}</span><img src={v.avatar} alt="" /></a>
                                </div>
						                    </header>
                                <p key={i+1}>{v.summary}</p>
                                <footer key={i+2}>
                                    <ul className="actions">
                                        <li><a href={"/" + language + "/blog/" + v.url} className="button large">{blogHead.button}</a></li>
                                    </ul>
                                </footer>
                              </React.Fragment>
                            ))
                        }
			    	</article>
				</div>

        <section id="sidebar">
					<BlogIntro postData={blogHead.intro}/>
          <BlogFooter/>
				</section>
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
  const fsp = require('fs/promises');
  const fs = require('fs');
  const path = require('path');

	const lang = getLanguage(params.lang);
  const head = require('../../locales/' + lang + '/blog-head.json');

  const postDir = path.join(process.cwd(),"src", "locales", lang, "posts")
  const filenames = await fsp.readdir(postDir)

  const body = {
    posts: []
  }
  
  filenames.forEach(file => {
    const filepath = path.join(postDir, file);
    const headline = fs.readFileSync(filepath);
    const jsonData = JSON.parse(headline);
    body.posts.push(jsonData.article);
  });

  // const body = require('../../locales/' + lang + '/blog-body.json');

  return {
		props: {
      language: lang,
      blogHead: head,
      blogBody: body
		},
	};
}

export default Blog