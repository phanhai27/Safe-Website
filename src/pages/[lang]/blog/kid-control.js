import React from 'react'
import { getAllLanguageSlugs, getLanguage } from '../../../lib/lang';
import BlogHeadMeta from '../../../components/blog-head'
import BlogHeader from '../../../components/blog-header'
import BlogFooter from '../../../components/blog-footer'
import BlogMain from '../../../components/blog-main'
import { gaRunScript } from '../../../lib/googleAnalytics';

export default function ({ language, postData }) {
    React.useEffect( () => {
      gaRunScript();
      document.querySelector("body").classList.add("single")
      document.querySelector("body").classList.add("is-preload")      
    });

    return (
        <div>
          <BlogHeadMeta postData={postData}/>
          <div id="wrapper">
            <BlogHeader lang = {language}/>
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
  var path = require("path")
  var filename = path.basename(__filename).replace('.js', '.json')
  
  const lang = getLanguage(params.lang);
  const data = require('../../../locales/' + lang + '/posts/' + filename);

  return {
		props: {
      language: lang,
      postData: data,
		},
	};
}
