import postData from '../../locales/en/kid-control.json'

import React from 'react'
import BlogHeadMeta from '../../components/blog-head'
import BlogHeader from '../../components/blog-header'
import BlogFooter from '../../components/blog-footer'
import BlogMain from '../../components/blog-main'

export default function() {
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
