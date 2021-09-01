export default function BlogMain ({postMeta, postData}) {
    return (
      <div id="main">
                <article className="post">
                  <header>
                    <div className="title">
                      <h2><a href="#">{postMeta.title}</a></h2>
                      <p>{postMeta.description}</p>
                    </div>
                    <div className="meta">
                      <time className="published" dateTime="2015-11-01">{postMeta.date}</time>
                      <a href="#" className="author"><span className="name">{postMeta.author}</span><img src={postMeta.avatar} alt="" /></a>
                    </div>
                  </header>
                  <span className="image featured"><img src={postMeta.picture} alt="" /></span>
                  <p>{postMeta.summary}</p>
                  <p>{postData}</p>
                </article>
            </div>
    )
}
