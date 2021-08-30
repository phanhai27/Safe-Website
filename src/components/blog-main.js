export default function BlogMain ({postData}) {
    return (
      <div id="main">
                <article className="post">
                  <header>
                    <div className="title">
                      <h2><a href="#">{postData.article.title}</a></h2>
                      <p>{postData.article.description}</p>
                    </div>
                    <div className="meta">
                      <time className="published" dateTime="2015-11-01">{postData.article.date}</time>
                      <a href="#" className="author"><span className="name">{postData.article.author}</span><img src={postData.article.avatar} alt="" /></a>
                    </div>
                  </header>
                  <span className="image featured"><img src={postData.article.picture} alt="" /></span>
                  <p>{postData.article.summary}</p>
                  { postData.iframe !== undefined ? 
                    <p align="center">
                    <iframe 
                      width={postData.iframe.width} 
                      height={postData.iframe.height}
                      src={postData.iframe.src}
                      title={postData.article.title}
                      frameborder='0' 
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' 
                      allowfullscreen>
                    </iframe>
                    </p>:""
                  }
                  
                  <p>{postData.article.detail}</p>
                </article>
            </div>
    )
}
