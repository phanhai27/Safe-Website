import React from 'react'
import { getAllLanguageSlugs, getLanguage } from '../../../lib/lang';
import BlogHeadMeta from '../../../components/blog-head'
import BlogHeader from '../../../components/blog-header'
import BlogFooter from '../../../components/blog-footer'
import BlogMain from '../../../components/blog-main'
import { gaRunScript } from '../../../lib/googleAnalytics';
import matter from 'gray-matter'

export default function ({ language, postData, menu }) {
    React.useEffect( () => {
      gaRunScript();
      document.querySelector("body").classList.add("single")
      document.querySelector("body").classList.add("is-preload")
    });

    return (
        <div>
          <BlogHeadMeta postData={postData}/>
          <div id="wrapper">
            <BlogHeader lang={language} menu={menu}/>
            <BlogMain postData={postData}/>
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
  // const data = require('../../../locales/' + lang + '/posts/' + filename);
  
  const head = require('../../../locales/' + lang + '/blog-head.json');

  return {
		props: {
      language: lang,
      postData: data,
      menu: head.menu,
		},
	};
}