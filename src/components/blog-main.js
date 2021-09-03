export default function BlogMain ({postMeta, postData}) {
  var md = require('markdown-it')({
    html: true,
    linkify: true,
    typography: true
  }).use(require('markdown-it-video'),
  {
    youtube: { width: 640, height: 390 },
    vimeo: { width: 500, height: 281 }
  });

  var content = md.render(postData);
  var temp = content.replace(/<iframe/g, '<p align="center"><iframe');
  content = temp.replace(/<\/iframe>/g,'</iframe></p>');

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
                  <div dangerouslySetInnerHTML={{__html: content}}/>
                </article>
            </div>
    )
}
