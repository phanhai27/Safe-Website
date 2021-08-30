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
          var list = "";
          var lastModified = new Date().toISOString();
          const fs = require('fs');
          languages.forEach(lang => {
            if (url == "") {
              var jsonFile = path.join(process.cwd(), "src", "locales", lang, "index.json");
              // fetch file details
              const { mtime } = fs.statSync(jsonFile);
              lastModified = mtime.toISOString();
            } else if (url == "blog") {
              var jsonFile = path.join(process.cwd(), "src", "locales", lang, url + "-head.json");
              // fetch file details
              const { mtime } = fs.statSync(jsonFile);
              lastModified = mtime.toISOString();
            } else {
              var jsonFile = path.join(process.cwd(), "src", "locales", lang, url + ".json");
              // fetch file details
              const { mtime } = fs.statSync(jsonFile);
              lastModified = mtime.toISOString();
            }
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
      ${blogPages
        .map((url) => {
          var list = "";
          var lastModified = new Date().toISOString();
          const fs = require('fs');
          languages.forEach(lang => {
            var jsonFile = path.join(process.cwd(), "src", "locales", lang, "posts", url + ".json");
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