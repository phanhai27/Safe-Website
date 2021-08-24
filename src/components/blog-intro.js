export default function BlogIntro ({postData}) {
    return (
      <section id="intro">
						{/* <a href="/"><img src="/static/img/logo.png" alt="" width="60" height="60"/></a> */}
						<header>
							<h2>{postData.title}</h2>
							<p>{postData.message}</p>
						</header>
			</section>
    )
}
