const fs = require('fs');
const path = require('path');

const languages = require('../languages.json');

const ENV = require('../env.json');

const baseUrl = ENV.BASE_URL;

const externalUrls = [
  ENV.SIGN_IN_URL,
  ENV.SIGN_UP_URL
];

function generateSitemap () {
  // get pages in root directory
  const rootDir = path.join(process.cwd(),"src", "pages")
  const rootPages = fs
    .readdirSync(rootDir)
    .filter((staticPage) => {
      return ![
        "_app.js",
        "_document.js",
        "_error.js",
        `[lang]`,
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      staticPagePath = staticPagePath.replace(".js", "");
      return `${staticPagePath}`;
    });

  // get pages in language directory
  const langDir = path.join(process.cwd(),"src", "pages", `[lang]`)
  const langPages = fs
    .readdirSync(langDir)
    .filter((staticPage) => {
      return ![
        "blog",
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      staticPagePath = staticPagePath.replace(".js", "");
      return `${staticPagePath}`;
    });

  // get pages in blog directory
  const blogDir = path.join(process.cwd(),"src", "pages", `[lang]`, "blog")
  const blogPages = fs
    .readdirSync(blogDir)
    .map((staticPagePath) => {
      staticPagePath = staticPagePath.replace(".js", "");
      return `${staticPagePath}`;
    });

  // xml content
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${rootPages
        .map((url) => {
          return `
        <url>
            <loc>${baseUrl}/${url == "index" ? "": url}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>1.0</priority>
        </url>`;
        })
        .join("")}
      ${langPages
        .map((url) => {
          var list = "";
          var lastModified = new Date().toISOString();
          const fs = require('fs');
          languages.forEach(lang => {
            var jsonFile = path.join(process.cwd(), "src", "locales", lang, url + ".md");
            // fetch file details
            const { mtime } = fs.statSync(jsonFile);
            lastModified = mtime.toISOString();
          list += `
        <url>
            <loc>${baseUrl}/${lang}/${url == "index" ? "": url}</loc>
            <lastmod>${lastModified}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>1.0</priority>
        </url>`})
          return list
          })
        .join("")}
      ${blogPages
        .map((url) => {
          var list = "";
          var lastModified = new Date().toISOString();
          const fs = require('fs');
          languages.forEach(lang => {
            var jsonFile = path.join(process.cwd(), "src", "locales", lang, "posts", url + ".md");
              // fetch file details
              const { mtime } = fs.statSync(jsonFile);
              lastModified = mtime.toISOString();
            list += `
        <url>
            <loc>${baseUrl}/${lang}/${url}</loc>
            <lastmod>${lastModified}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>1.0</priority>
        </url>`})
          return list
        })
        .join("")}
      ${externalUrls
        .map((url) => {
          return `
        <url>
            <loc>${url}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>1.0</priority>
        </url>`;
        })
        .join("")}
    </urlset>
  `;

  //write to file
  try {
    const data = fs.writeFileSync('public/sitemap.xml', sitemap)
  } catch (err) {
    console.error(err)
  }

};

generateSitemap();