export default function BlogHeader ({lang}) {
    return (
            <header id="header">
              <h1><a href={"/" + lang}>Home</a></h1>
              <h1><a href={"/" + lang + "/blog"}>SafeWeb Stories</a></h1>
            </header>
    )
}
