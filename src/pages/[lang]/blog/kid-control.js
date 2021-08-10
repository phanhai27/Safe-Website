import postDataEn from '../../../locales/en/kid-control.json'
import postDataVi from '../../../locales/vi/kid-control.json'

import React from 'react'
import { getAllLanguageSlugs, getLanguage } from '../../../lib/lang';
import BlogHeadMeta from '../../../components/blog-head'
import BlogHeader from '../../../components/blog-header'
import BlogFooter from '../../../components/blog-footer'
import BlogMain from '../../../components/blog-main'

export default function({ language }) {
    let postData = postDataEn;
    if (language == 'vi') {
      postData = postDataVi;
    }

    React.useEffect( () => {
      document.querySelector("body").classList.add("single")
      document.querySelector("body").classList.add("is-preload")
    });

    return (
        <div>
          <BlogHeadMeta postData={postData}/>
          <div id="wrapper">
            <BlogHeader/>
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
	const language = getLanguage(params.lang);
	return {
		props: {
			language,
		},
	};
}
