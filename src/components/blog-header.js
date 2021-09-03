import LanguageMenu from './LanguageMenu';

export default function BlogHeader ({lang, slug, menu}) {
    return (
            <header id="header">
              <h1><a href={"/" + lang}><img src="/static/img/logo.png" alt="logo" width="30" height="30"/></a></h1>
              <h1><a href={"/" + lang + "/blog"}>{menu}</a></h1>
              <div><LanguageMenu slug={slug}/></div>
            </header>
    )
}
