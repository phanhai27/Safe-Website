import pageUrl from '../lib/page-url'

export default function BlogHeader () {    
    return (
            <header id="header">
              <h1><a href="/">Home</a></h1>
              <h1><a href={pageUrl("/blog")}>SafeWeb Stories</a></h1>
            </header>
    )
}
