import { languages, defaultLanguage } from '../i18n/config';

export function getSortedLangsData() {
	return languages;
}

export function getAllLanguageSlugs() {
	const glob = require('glob')
	//get all .md files in the posts dir
	const blogs = glob.sync('posts/**/*.md')
	//remove path and extension to leave filename only
	const blogSlugs = blogs.map(file =>
	  file
		.replace('posts/','')
		.replace(/ /g, '-')
		.slice(0, -3)
		.trim()
	)
	
	const params = blogSlugs.map((slug) => {
		const parts = slug.split('/');
		return { params: { lang: parts[0], slug: parts[1]} };
	});

	return params;
}

export function getLanguage(lang) {
	return languages.includes(lang) ? lang : defaultLanguage;
}
