import React from 'react'
import BlogHeadMeta from '../../components/blog-head'
import BlogHeader from '../../components/blog-header'
import BlogFooter from '../../components/blog-footer'
import BlogMain from '../../components/blog-main'

import postData from './safeweb-remote-tagui-rpa.json'

export default function RPABlog() {
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
