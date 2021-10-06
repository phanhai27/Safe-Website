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
          <BlogHeadMeta postData={blogHead} lang={language}/>
            <div id="wrapper">
              <BlogHeader lang={language} menu={blogHead.menu}/>
                <div id="main">
                        {
                            blogBody.posts.map((v, i) => (
                              <React.Fragment key={Math.random()}>
                              <article className="post" key={i}>
                                <header key={i}>
                                <div className="title">
                                    <h2><a href={"/" + language + "/" + v.url}>{v.title}</a></h2>
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
                                        <li><a href={"/" + language + "/" + v.url} className="button large">{blogHead.button}</a></li>
                                    </ul>
                                </footer>
                              </article>
                              </React.Fragment>
                            ))
                        }
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
  const matter = require("gray-matter");

	const lang = getLanguage(params.lang);
  const blogFilePath = path.join(process.cwd(),"src", "locales", lang, "blog.md");
  const blogContents = fs.readFileSync(blogFilePath, "utf8");
  const blogHead = matter(blogContents);

  const postDir = path.join(process.cwd(), "posts", lang)
  const filenames = await fsp.readdir(postDir)

  const body = {
    posts: []
  }
  
  filenames.forEach(file => {
    const filepath = path.join(postDir, file);
    const fileContents = fs.readFileSync(filepath, "utf8");
    const data = matter(fileContents);
    body.posts.push(data.data);
  });

  return {
		props: {
      language: lang,
      blogHead: blogHead.data,
      blogBody: body
		},
	};
}

export default Blog