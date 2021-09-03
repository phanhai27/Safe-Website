import React from 'react'
import { getAllLanguageSlugs, getLanguage } from '../../../lib/lang';
import BlogHeadMeta from '../../../components/blog-head'
import BlogHeader from '../../../components/blog-header'
import BlogFooter from '../../../components/blog-footer'
import BlogMain from '../../../components/blog-main'
import { gaRunScript } from '../../../lib/googleAnalytics'

export default function ({ language, postMeta, postData, menu }) {
    React.useEffect( () => {
      gaRunScript();
      document.querySelector("body").classList.add("single")
      document.querySelector("body").classList.add("is-preload")
    });

    return (
        <div>
          <BlogHeadMeta postData={postMeta}/>
          <div id="wrapper">
            <BlogHeader lang={language} menu={menu}/>
            <BlogMain postMeta={postMeta} postData={postData}/>
            <BlogFooter/>
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
  const fs = require("fs");
  var path = require("path")
  const matter = require("gray-matter");


  var filename = path.basename(__filename).replace('.js', '.md')
  
  const lang = getLanguage(params.lang);

  const fullPath = path.join(process.cwd(), "src", "locales", lang, "posts", filename);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const data = matter(fileContents);
  
  const blogFilePath = path.join(process.cwd(),"src", "locales", lang, "blog.md");
  const blogContents = fs.readFileSync(blogFilePath, "utf8");
  const blogHead = matter(blogContents);

  return {
		props: {
      language: lang,
      postMeta: data.data,
      postData: data.content,
      menu: blogHead.data.menu,
		},
	};
}