import LanguageMenu from './LanguageMenu';

export default function BlogHeader ({lang, slug, menu}) {
    return (
            <header className="d-flex top-lighthouse" id="header">
              <a  className="d-block pl-4 blog-logo" href={"/" + lang}><img src="/static/img/logo.png" alt="logo" width="30" height="30"/></a>
              <a className="d-block menu-text-white"  href={"/" + lang + "/blog"}>{menu}</a>
              <div><LanguageMenu slug={slug}/></div>

              <style jsx>{`
                .top-lighthouse {
                    background: #26314a
                }
                .menu-text-white {
                  color: #ffffff
                }
                .blog-logo {
                  display: flex;
                  align-items: center
                }
                `}</style>
            </header>
    )
}
