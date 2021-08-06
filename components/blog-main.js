export default function BlogMain ({postData}) {
    return (
      <div id="main">
                <article className="post">
                  <header>
                    <div className="title">
                      <h2><a href="#"> {postData.article.title} </a></h2>
                      <p> {postData.article.description} </p>
                    </div>
                    <div className="meta">
                      <time className="published" dateTime="2015-11-01"> {postData.article.date} </time>
                      <a href="#" className="author"><span className="name"> {postData.article.author} </span><img src={postData.article.avatar} alt="" /></a>
                    </div>
                  </header>
                  <span className="image featured"><img src={postData.article.picture} alt="" /></span>
                  <p> {postData.article.summary} </p>
                  <p> {postData.article.detail} </p>
                </article>
            </div>
    )
}
