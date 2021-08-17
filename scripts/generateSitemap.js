const fs = require('fs');
const path = require('path');

const languages = ['en', 'vi'];

const baseUrl = "https://safeweb.app";

const externalUrls = [
  "https://admin.safeweb.app/signin",
  "https://admin.safeweb.app/signup"
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
      if (staticPagePath == `index`) {
        staticPagePath = "";
      }
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
      if (staticPagePath == `index`) {
        staticPagePath = "";
      }
      return `${staticPagePath}`;
    });

  // get pages in blog directory
  const blogDir = path.join(process.cwd(),"src", "pages", `[lang]`, "blog")
  const blogPages = fs
    .readdirSync(blogDir)
    .map((staticPagePath) => {
      staticPagePath = staticPagePath.replace(".js", "");
      if (staticPagePath == `index`) {
        staticPagePath = "";
      }
      return `${staticPagePath}`;
    });

  // xml content
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${rootPages
        .map((url) => {
          return `
        <url>
            <loc>${baseUrl}/${url}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>1.0</priority>
        </url>`;
        })
        .join("")}
      ${langPages
        .map((url) => {
          if (url == "download"){
            return `
        <url>
            <loc>${baseUrl}/${url}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>1.0</priority>
        </url>`;
          } else {
              var list = "";
  
              languages.forEach(lang => {
                list += `
        <url>
            <loc>${baseUrl}/${lang}/${url}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>1.0</priority>
        </url>`})
              return list
            }
          })
        .join("")}
      ${blogPages
        .map((url) => {
          var list = "";
          languages.forEach(lang => {
            list += `
        <url>
            <loc>${baseUrl}/${lang}/${url}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
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