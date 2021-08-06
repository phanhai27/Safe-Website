export default function PageUrl (url) {
    let urlExt = "";
    if (process.env.URL_EXT !== undefined) {
        urlExt = process.env.URL_EXT;
    }

    return url + urlExt;
}
