const Renderer = require('../../node_modules/vuepress-plugin-migrate/src/renderer')
const json_data = require('./urls.json')

module.exports = {
	targetDir: '_posts',
	sitemap: 'https://kokorice.org/sitemap1.xml',
	maxConcurrentTasks: 10,
	forceDownload: true,
	forceConvert: true,
	renderRules: {
		a(el) {
			return `[${this.render(el)}](${el.attribs.href})`
		},
	},
	getFileName(url) {
		if (/^https?\:\/\/[^\/]+\/?$/.test(url)) return false
		return url.substring(url.lastIndexOf('/') + 1)
	},
	parseHTML($, render) {
		const article = $('#content')
		let content = article.find('.post-content')
		const tags = article.find('.single-tag').toArray().map(el => el.children[0].nodeValue)
		content.find('.tags').remove()
		content.find('a[href*="t.umblr.com/redirect"]').each((index, value) => {
			let link = $(value).attr('href')
			let originalURL = link.split("?z=")[1].split("&t=")[0];
			let decodedURL = decodeURIComponent(originalURL);
			$(value).attr('href', decodedURL)
		})
		content.find('img').each((index, value) => {
			if ($(value).attr('src').indexOf('nippon-toilet') > -1 || $(value).attr('src').indexOf('img.zemanta.com') > -1) {
				$(value).remove()
			}
			let fname = $(value).attr('src').substring($(value).attr('src').lastIndexOf('/') + 1)
			if (json_data.img.hasOwnProperty(fname)) {
				$(value).attr('src', json_data.img[fname])
			}
		})
		content.find('a').each((index, value) => {
			if ($(value).attr('href').includes('resolveuid')) {
				if ($(value).children('img').length) {
					$(value).attr('href', '#')
				} else {
					$(value).remove()
				}
			} else {
				for (key in json_data.a) {
					if ($(value).attr('href').includes(key)) {
						if ($(value).parent()[0].name != 'h3') {
							$(value).attr('href', json_data.a[key])
						}
					}
				}
			}
		})
		content.find('b').each(function() {
			$(this).replaceWith("<strong>" + $(this).html() + "</strong>")
		})
		content.find('pre').each(function() {
			$(this).replaceWith("<code>" + $(this).html() + "</code>")
		})
		content.find('code').each(function() {
			$(this).replaceWith("```\n" + $(this).html() + "\n```")
		})
		content.find('sup').each(function() {
			$(this).replaceWith($(this).html())
		})
		const date = article.find('.date').text().trim()
		const author = 'duffyd'
		let bloglink
		let title
		if (!article.find('h3 > a').attr('href')) {
			bloglink = article.find('.caption p').html().replace(/\s+/g, '-').toLowerCase()
			let newcontent = ''
			for (idx in json_data.img[article.find('.post-content iframe').attr('src')]) {
				newcontent += `![image](${json_data.img[article.find('.post-content iframe').attr('src')][idx]})`
			}
			content = newcontent
			title = article.find('.caption p').html()
		} else {
			bloglink = article.find('h3 > a').attr('href').substring(article.find('h3 > a').attr('href').lastIndexOf('/') + 1)
			title = article.find('.post-content h3 a').text()
			content.find('h3').remove()
			content = render(content[0]).trim()
		}

		return {
			frontmatter: {
				date,
				author,
				title,
				tags,
			},
			filename: `${date}-${bloglink}`,
			content: `${content}`,
		}
	},
}