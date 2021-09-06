import LanguageMenu from './LanguageMenu';

export default function BlogHeader ({lang, menu}) {
    return (
            <header className="d-flex" id="header">
              <a className="d-block pl-4" href={"/" + lang}><img src="/static/img/logo.png" alt="logo" width="30" height="30"/></a>
              <a className="d-block"  href={"/" + lang + "/blog"}>{menu}</a>
              <div><LanguageMenu/></div>
            </header>
    )
}
